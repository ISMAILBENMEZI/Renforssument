<!-- ✏ Exercice 1 — Gestion de projets — Guidé (30 min) -->
<?php
require_once "Task.php";

class Project
{
    private $title;
    private $dailyRate;
    private $tasks = [];

    public function __construct($title, $dailyRate, $tasks = [])
    {
        $this->title = $title;
        $this->dailyRate = $dailyRate;
        $this->tasks = $tasks;
    }

    public function addTask($task)
    {
        array_push($this->tasks, $task);
    }

    public function getTasks()
    {
        return $this->tasks;
    }

    public function calculateTotalHours()
    {
        $total = 0;

        foreach ($this->tasks as $task) {
            $total += $task->getEstimatedHours();
        }

        return $total;
    }

    public function calculateTotalWithBuffer($bufferPercent = 10)
    {
        return $this->calculateTotalHours() * (1 + $bufferPercent / 100);
    }

    public function calculateBudget()
    {
        return $this->calculateTotalWithBuffer() * ($this->dailyRate / 8);
    }

    public function getBigTasks($threshold)
    {
        $bigTasks = array_filter($this->tasks, fn($task) => $task->isBig($threshold));
        return $bigTasks;
    }

    public function getSummary()
    {
        echo "Title: " . $this->title . "DailyRate: " . $this->dailyRate . " ";
        foreach ($this->tasks as $task)
            $task->affiche();

        echo "Total hours: " . $this->calculateTotalHours() . "\n";
        echo "total estimated hours with buffer of 10% " . $this->calculateTotalWithBuffer() . "\n";
    }

    public function getMostExpensiveTask()
    {
        $maxHours = 0;
        $mostExpensiveTask = null;

        foreach ($this->tasks as $task) {
            if ($task->getEstimatedHours() > $maxHours) {
                $maxHours = $task->getEstimatedHours();
                $mostExpensiveTask = $task;
            }
        }
        return $mostExpensiveTask->affiche();
    }
}

$project = new Project('Refonte site web', 600, [new Task(1, 'Design', 12), new Task(2, 'Dev front', 30), new Task(3, 'Dev back', 45)]);

// echo $project->calculateTotalHours() . "\n";
// echo $project->calculateTotalWithBuffer() . "\n";
// echo $project->calculateBudget() . "\n";
// print_r($project->getBigTasks(20)) . "\n";
// echo $project->getSummary();

$project->addTask(new Task(1, 'hello' , 50));
print_r($project->getMostExpensiveTask()) ;
