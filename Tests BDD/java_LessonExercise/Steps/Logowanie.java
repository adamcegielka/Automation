package Steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Logowanie {

    WebDriver driver;

    @Given("Uzytkownik jest na stronie logowania")
    public void uzytkownik_jest_na_stronie_logowania() {
        System.out.println("Krok 1");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        // driver.get("https://the-internet.herokuapp.com/login");
        driver.navigate().to("https://the-internet.herokuapp.com/login");
    }
    @When("Uzytkownik wpisze poprawna nazwe uzytkownika")
    public void uzytkownik_wpisze_poprawna_nazwe_uzytkownika() {
        System.out.println("Krok 2");
        driver.findElement(By.id("username")).sendKeys("tomsmith");
    }
    @When("Uzytkownik wpisuje poprawne haslo")
    public void uzytkownik_wpisuje_poprawne_haslo() {
        System.out.println("Krok 3");
        driver.findElement(By.name("password")).sendKeys("SuperSecretPassword!");
    }
    @When("Uzytkownik kliknie w przycisk Login")
    public void uzytkownik_kliknie_w_przycisk_login() {
        System.out.println("Krok 4");
        driver.findElement(By.tagName("button")).click();
    }
    @Then("Uzytkownik zostal poprawnie zalogowany")
    public void uzytkownik_zostal_poprawnie_zalogowany() {
        System.out.println("Krok 5");
        Assert.assertEquals("https://the-internet.herokuapp.com/secure", driver.getCurrentUrl());
        driver.close();
    }
}
