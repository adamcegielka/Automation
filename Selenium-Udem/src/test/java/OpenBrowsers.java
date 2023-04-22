import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.Test;

public class OpenBrowsers {

    @Test
    public void openGooglePage() {
        ChromeDriver chromeDriver = new  ChromeDriver();
        chromeDriver.get("https://www.google.com/");
    }

    @Test
    public void openFirefoxPage() {
        FirefoxDriver firefoxDriver = new FirefoxDriver();
        firefoxDriver.get("https://www.google.com/");
    }

    @Test
    public void openInternetExplorerDriver() {
        InternetExplorerDriver internetExplorerDriver = new InternetExplorerDriver();
        internetExplorerDriver.get("https://www.google.com/");
    }
}
