package com.internteam.taskmanagerapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.NotBlank; // For non-null and non-empty strings
import jakarta.validation.constraints.NotNull; // For non-null objects
import io.swagger.v3.oas.annotations.media.Schema; // For Swagger documentation

@Document(collection = "tasks")
@Schema(description = "Details about a Task") // Swagger annotation for the model
public class Task {

    @Id
    @Schema(description = "Unique identifier of the Task", example = "60c72b2f9b1d8c001f8e4c7a", accessMode = Schema.AccessMode.READ_ONLY)
    private String id;

    @NotBlank(message = "Task title cannot be empty") // Ensures title is not null or empty
    @Schema(description = "Title of the task", example = "Implement User Authentication")
    private String title;

    @NotBlank(message = "Task description cannot be empty") // Ensures description is not null or empty
    @Schema(description = "Detailed description of the task", example = "Develop and integrate JWT-based authentication for user login and registration.")
    private String description;

    @NotNull(message = "Task completion status cannot be null") // Ensures completed is not null
    @Schema(description = "Boolean indicating if the task is completed", example = "false")
    private Boolean completed;

    @NotNull(message = "Task priority cannot be null") // Ensures priority is not null
    @Schema(description = "Priority level of the task", example = "HIGH", allowableValues = {"LOW", "MEDIUM", "HIGH"})
    private Priority priority;

    @Schema(description = "Current status of the task", example = "PENDING", allowableValues = {"PENDING", "IN_PROGRESS", "COMPLETED"})
    private String status; // New field for status

    public enum Priority {
        LOW, MEDIUM, HIGH
    }

    // Default constructor for MongoDB
    public Task() {
    }

    // Constructor with fields (adjust as needed based on your actual usage)
    public Task(String title, String description, Boolean completed, Priority priority) {
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.priority = priority;
        this.status = "PENDING"; // Default status
    }

    // Getters and Setters (ensure all fields have them)
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Priority getPriority() {
        return priority;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
