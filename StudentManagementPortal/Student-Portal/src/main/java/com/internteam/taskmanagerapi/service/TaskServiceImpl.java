package com.internteam.taskmanagerapi.service;

import com.internteam.taskmanagerapi.model.Task;
import com.internteam.taskmanagerapi.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Task updateTask(String id, Task task) {
        task.setId(id);
        return taskRepository.save(task);
    }

    @Override
    public List<Task> searchTasks(String query, String status, Task.Priority priority) {
        List<Task> tasks = taskRepository.findAll();
        if (query != null && !query.isEmpty()) {
            tasks = tasks.stream().filter(t -> t.getTitle().toLowerCase().contains(query.toLowerCase())).toList();
        }
        if (status != null) {
            tasks = tasks.stream().filter(t -> t.getStatus() != null && status.equals(t.getStatus())).toList();
        }
        if (priority != null) {
            tasks = tasks.stream().filter(t -> t.getPriority() == priority).toList();
        }
        return tasks;
    }

    @Override
    public Map<String, Long> getTaskStatusCounts() {
        return taskRepository.findAll().stream()
                .filter(t -> t.getStatus() != null)
                .collect(Collectors.groupingBy(Task::getStatus, Collectors.counting()));
    }
}