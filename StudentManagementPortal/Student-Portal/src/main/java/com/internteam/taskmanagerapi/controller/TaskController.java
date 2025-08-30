package com.internteam.taskmanagerapi.controller;

import com.internteam.taskmanagerapi.model.Task;
import com.internteam.taskmanagerapi.repository.TaskRepository;
import com.internteam.taskmanagerapi.util.ApiResponse; // Import ApiResponse
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // Allow CORS for testing; restrict in production
public class TaskController {

    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    private TaskRepository taskRepository;

    // Exception handler for validation errors (remains the same)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Task>>> getAllTasks() { // Changed return type
        try {
            List<Task> tasks = taskRepository.findAll();
            // Wrap the response in ApiResponse
            return new ResponseEntity<>(
                new ApiResponse<>("success", "Tasks retrieved successfully", tasks),
                HttpStatus.OK
            );
        } catch (Exception e) {
            logger.error("Error fetching all tasks: {}", e.getMessage());
            // For errors, you can also wrap in ApiResponse for consistency, or keep as is.
            // For now, let's keep validation errors as Map<String,String> for simplicity,
            // but for generic errors, you could use ApiResponse<String> or ApiResponse<Object>.
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Failed to retrieve tasks", null),
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Task>> createTask(@Valid @RequestBody Task taskDetails) { // Changed return type
        try {
            Task savedTask = taskRepository.save(taskDetails);
            // Wrap the response in ApiResponse
            return new ResponseEntity<>(
                new ApiResponse<>("success", "Task created successfully", savedTask),
                HttpStatus.CREATED
            );
        } catch (Exception e) {
            logger.error("Error creating task: {}", e.getMessage());
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Failed to create task", null),
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Task>> getTask(@PathVariable String id) { // Changed return type
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent()) {
            return new ResponseEntity<>(
                new ApiResponse<>("success", "Task retrieved successfully", task.get()),
                HttpStatus.OK
            );
        } else {
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Task not found", null),
                HttpStatus.NOT_FOUND // Still return 404, but with the consistent body
            );
        }
    }

    // searchTasks remains similar to getAllTasks for its response structure
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<Task>>> searchTasks( // Changed return type
            @RequestParam(required = false) String priority,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String query) {
        try {
            List<Task> tasks = taskRepository.findAll();
            logger.debug("Initial tasks count: {}", tasks.size());
            if (priority != null) {
                tasks = tasks.stream().filter(t -> {
                    String taskPriority = t.getPriority() != null ? t.getPriority().toString() : null;
                    logger.debug("Task priority: {}, filter priority: {}", taskPriority, priority);
                    return priority.equalsIgnoreCase(taskPriority);
                }).toList();
            }
            if (status != null) {
                tasks = tasks.stream().filter(t -> t.getStatus() != null && status.equals(t.getStatus())).toList();
            }
            if (query != null) {
                tasks = tasks.stream().filter(t -> t.getTitle() != null && t.getTitle().toLowerCase().contains(query.toLowerCase())).toList();
            }
            logger.debug("Filtered tasks count: {}", tasks.size());
            return new ResponseEntity<>(
                new ApiResponse<>("success", "Tasks filtered successfully", tasks),
                HttpStatus.OK
            );
        } catch (Exception e) {
            logger.error("Error in searchTasks: {}", e.getMessage());
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Failed to search tasks", null),
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Task>> updateTask(@PathVariable String id, @Valid @RequestBody Task taskDetails) { // Changed return type
        try {
            Optional<Task> existingTask = taskRepository.findById(id);
            if (existingTask.isPresent()) {
                Task taskToUpdate = existingTask.get();
                // Only update fields if they are provided in the request
                if (taskDetails.getStatus() != null) taskToUpdate.setStatus(taskDetails.getStatus());
                if (taskDetails.getDescription() != null && !taskDetails.getDescription().isBlank()) taskToUpdate.setDescription(taskDetails.getDescription());
                if (taskDetails.getPriority() != null) taskToUpdate.setPriority(taskDetails.getPriority());
                if (taskDetails.getTitle() != null && !taskDetails.getTitle().isBlank()) taskToUpdate.setTitle(taskDetails.getTitle());

                Task updatedTask = taskRepository.save(taskToUpdate);
                return new ResponseEntity<>(
                    new ApiResponse<>("success", "Task updated successfully", updatedTask),
                    HttpStatus.OK
                );
            }
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Task not found for update", null),
                HttpStatus.NOT_FOUND
            );
        } catch (Exception e) {
            logger.error("Error updating task {}: {}", id, e.getMessage());
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Failed to update task", null),
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    // Note: This contact endpoint currently creates a 'Task'.
    // For a real contact form, you might want a separate ContactMessage model and repository.
    // We'll keep its response as String for now as it's not returning a specific data entity.
    @PostMapping("/contact")
    public ResponseEntity<String> submitContact(@Valid @RequestBody Map<String, String> contactDetails) {
        try {
            Task task = new Task(contactDetails.get("name"), contactDetails.get("message"), false, Task.Priority.MEDIUM);
            taskRepository.save(task);
            return new ResponseEntity<>("Contact submitted successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error submitting contact", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // File upload endpoint is typically simple, can return String or a FileInfo object
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = file.getOriginalFilename();
            // In a real app, you'd save the file to a storage service (e.g., S3, local disk)
            return new ResponseEntity<>("File uploaded: " + fileName, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Upload failed", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteTask(@PathVariable String id) { // Changed return type
        try {
            // Check if task exists before deleting for a more accurate response
            if (taskRepository.existsById(id)) {
                taskRepository.deleteById(id);
                return new ResponseEntity<>(
                    new ApiResponse<>("success", "Task deleted successfully", null), // Data is null for delete
                    HttpStatus.OK
                );
            } else {
                return new ResponseEntity<>(
                    new ApiResponse<>("error", "Task not found for deletion", null),
                    HttpStatus.NOT_FOUND
                );
            }
        } catch (Exception e) {
            logger.error("Error deleting task {}: {}", id, e.getMessage());
            return new ResponseEntity<>(
                new ApiResponse<>("error", "Failed to delete task", null),
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
