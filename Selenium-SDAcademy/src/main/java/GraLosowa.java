import java.util.Random;
import java.util.Scanner;

public class GraLosowa {
    public void graj(int proby) {
        Random random = new Random();
        int y = random.nextInt(10);
        Scanner scanner = new Scanner(System.in);

        for (int i = 1; i <= proby; i++) {
            System.out.println("Zgadnij liczbę");
            int x = scanner.nextInt();

            if (x == y) {
                System.out.println("Zgadłeś!");
                break;
            } else {
                System.out.println("Spróbuj jeszcze raz");
                if (y < x) {
                    System.out.println("Liczba jest mniejsza");
                } else {
                    System.out.println("Liczba jest większa");
                }
            }
        }
    }
}
