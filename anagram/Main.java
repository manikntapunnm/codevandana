import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input two strings
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();

        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();

        // Call method from AnagramChecker class
        if (AnagramChecker.areAnagrams(str1, str2)) {
            System.out.println("Output: true (They are anagrams)");
        } else {
            System.out.println("Output: false (Not anagrams)");
        }

        scanner.close();
    }
}
