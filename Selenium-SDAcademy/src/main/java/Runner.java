import java.util.Scanner;

public class Runner {
    //Ta metoda służy do uruchamiania programu
    public static void main(String[] args) {
        Bin bin = new Bin();
//        bin.open();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Podaj x: ");
        double x = scanner.nextDouble();
        System.out.println("Podaj y: ");
        double y = scanner.nextDouble();
        FizzBuzz fizzBuzz = new FizzBuzz();
        fizzBuzz.play(5);
        fizzBuzz.play(3);
        fizzBuzz.play(11);
        fizzBuzz.play(15);

        Kalkulator kalkulator = new Kalkulator();
        kalkulator.dodaj(10, 20);
        kalkulator.odejmij(10, 20);
        kalkulator.pomnoz(10, 20);
        kalkulator.dzielenie(10, 20);

        kalkulator.pomnoz(x,y);
        kalkulator.dzielenie(x,y);
    }
}
