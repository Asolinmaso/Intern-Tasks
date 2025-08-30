package com.internteam.taskmanagerapi.service;

import com.internteam.taskmanagerapi.model.Task;
import java.util.List;
import java.util.Map;

public interface TaskService {
    Task updateTask(String id, Task task);
    List<Task> searchTasks(String query, String status, Task.Priority priority);
    Map<String, Long> getTaskStatusCounts();
}