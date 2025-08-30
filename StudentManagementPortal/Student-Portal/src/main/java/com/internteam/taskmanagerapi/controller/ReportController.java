package com.internteam.taskmanagerapi.controller;

import com.internteam.taskmanagerapi.model.Task;
import com.internteam.taskmanagerapi.repository.TaskRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/reports") // Assuming this is the base path for reports
@CrossOrigin(origins = "*") // Allow CORS for testing; restrict in production
@Tag(name = "Reports", description = "Endpoints for generating various reports and aggregated data")
public class ReportController {

    @Autowired
    private TaskRepository taskRepository; // Inject TaskRepository to access task data

    @Operation(summary = "Get task counts by status",
               description = "Retrieves the number of tasks for each status (e.g., PENDING, COMPLETED). Requires JWT authentication.",
               security = @SecurityRequirement(name = "bearerAuth"),
               responses = {
                   @ApiResponse(responseCode = "200", description = "Successfully retrieved task status counts",
                                content = @Content(mediaType = "application/json",
                                schema = @Schema(example = "{\"PENDING\": 5, \"COMPLETED\": 10, \"IN_PROGRESS\": 3}"))),
                   @ApiResponse(responseCode = "401", description = "Unauthorized - JWT token missing or invalid"),
                   @ApiResponse(responseCode = "500", description = "Internal server error")
               })
    @GetMapping("/tasks/status-counts")
    public ResponseEntity<Map<String, Long>> getTaskStatusCounts() {
        try {
            List<Task> tasks = taskRepository.findAll(); // Fetch all tasks
            // Group tasks by status and count them
            Map<String, Long> statusCounts = tasks.stream()
                    .collect(Collectors.groupingBy(
                            task -> task.getStatus() != null ? task.getStatus() : "UNKNOWN", // Handle null status
                            Collectors.counting()
                    ));
            return new ResponseEntity<>(statusCounts, HttpStatus.OK);
        } catch (Exception e) {
            // Log the error for debugging purposes
            System.err.println("Error fetching task status counts: " + e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
