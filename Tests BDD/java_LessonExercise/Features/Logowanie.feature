Feature: Logowanie do systemu

  Jako uzytkownik chce miec mozliwosc logowania sie aby miec dostep do zaawansowanych funkcji systemu

  Scenario: Poprawne logowanie
    Given Uzytkownik jest na stronie logowania
    When Uzytkownik wpisze poprawna nazwe uzytkownika
    And Uzytkownik wpisuje poprawne haslo
    And Uzytkownik kliknie w przycisk Login
    Then Uzytkownik zostal poprawnie zalogowany

