public class Kalkulator {
    public void dodaj(double x, double y) {
        double suma = x+y;
        System.out.println("x+y=" + suma);
        System.out.println(String.format("%s+%s=%s", x,y, suma));
    }

    public void odejmij(double x, double y) {
        double roznica = x-y;
        System.out.println("x-y=" + roznica);
        System.out.println(String.format("%s-%s=%s", x,y, roznica));
    }

    public void pomnoz(double x, double y) {
        double mnozenie = x*y;
        System.out.println("x*y=" + mnozenie);
        System.out.println(String.format("%s*%s=%s", x,y, mnozenie));
    }

    public void dzielenie(double x, double y) {
        if (y != 0) {
            double dzielenie = x/y;
            System.out.println("x-y=" + dzielenie);
            System.out.println(String.format("%s/%s=%s", x,y, dzielenie));
        } else {
            System.out.println("Nie mozna dzielic przez 0");
        }

    }
}