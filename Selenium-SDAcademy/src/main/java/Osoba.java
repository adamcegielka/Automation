public class Osoba {

    private String imie;
    private String nazwisko;

    private boolean isFemale;

    public Osoba(String imie, String nazwisko, boolean isFemale) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.isFemale = isFemale;
    }
    public void przedstawSie() {
        System.out.println("Mam na imie " + imie);
        System.out.println("Mam na nazwisko " + nazwisko);
        if (isFemale) {
            System.out.println("Jestem kobieta");
        } else {
            System.out.println("Jestem mezczyzna");
        }
    }

    public String getImie() {
        return imie;
    }

}
