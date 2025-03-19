import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create a list to store employees
        ArrayList<Employee> employees = new ArrayList<>();

        // Add employees to the list
        employees.add(new Employee(101, "Alice Johnson", 50000));
        employees.add(new Employee(102, "Bob Smith", 60000));
        employees.add(new Employee(103, "Charlie Brown", 55000));

        // Display employee details
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
