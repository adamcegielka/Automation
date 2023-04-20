import java.util.Scanner;
public class TaskCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Wpisz pierwszą cyfrę: ");
        int numberA = scanner.nextInt();

        System.out.println("Wpisz drugą cyfrę: ");
        int numberB = scanner.nextInt();

        int addition = numberA + numberB;
        System.out.println("Wynik dodawanie: " + addition);

        int subraction = numberA - numberB;
        System.out.println("Wynik odejmowania: " + subraction);

        int muliplication = numberA * numberB;
        System.out.println("Wynik mnożenia: " + muliplication);

        int division = numberA / numberB;
        System.out.println("Wynik dzielenia: " + division);
    }
}
