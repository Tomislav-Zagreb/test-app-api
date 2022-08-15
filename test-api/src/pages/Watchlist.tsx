function Watchlist() {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--xs-gap)",
        width: "min(1000px, 100%)",
      }}
    >
      <h1>Napomene oko izrade ovog zadatka</h1>
      <p>
        Zadatak je rađen prema uputama koje su poslane. Veći dio aplikacije je
        funkcionalan, iako manji dijelovi nisu završeni do kraja budući da sam
        imao i puno drugih obveza pa nisam mogao raditi "u punom tempu". Na
        usmenom razgovoru ću objasniti detalje i ako treba svaku liniju koda,
        kao i reći kako bih završio manji ostatak koji još treba (možda 5 %).
      </p>
      <br />
      <h1>Objašnjenje za button FAVORITI iz headera</h1>
      <p>
        Kako se vidi, opcija FAVORITI u headeru je funkcionalna. Pritiskom na
        nju otvara se dropdown unutar kojeg će biti izlistani svi filmovi koje
        je korisnik označio kao favorite, a isti se uredno zatvara klikom na
        opciju ili bilo gdje sa strane. Također, klikom na bilo koju opciju ili
        film, otvara se nova stranica na kojoj su podatci o pojedinačnom filmu.{" "}
      </p>
      <p>
        Međutim, u ovom trenu otvara se ne popis imena filmova, već njihovi
        ID-brojevi. Razlog je jer sam pri spremanju podataka u localStorage
        informacije spremao kao array s ID-brojevima. Iz tog razloga mi je bilo
        praktičnije ostaviti da bude ovako kao sada, s ID-jevima. Ubacivanje
        imena filmova tražilo bi fetching podataka za sve stavke iz localStorage
        pojedinačno, što je loše za performanse.
      </p>
      <p>
        Rješenje je trebalo biti to da sam pri spremanju u localStorage trebao
        spremati OBJECT koji sadrži ID + NAME. To nisam napravio jer je rađeno u
        brzini, a naknadno nisam ulazio u izmjene da ne moram ispravljati i neke
        druge stavri vezane uz to. S obzirom da sam na barem tri-četiri druga
        mjesta u aplikaciji koristio fetching podataka, očito je da s ovim ne bi
        bilo nikakvih problema.
      </p>
      <br />
      <h1>Ostalo</h1>
      <p>
        Ovako pri brzinskom pregledu aplikacije na kraju palo mi je na pamet još
        nekoliko stvari koje bi se mogle izvesti drugačije. Recimo, iz foldera
        "hooks" sve tri datoteke bi se vjerojatno mogle povezati u jednu jako
        veliku s puno IF-provjera i slično, ali pitanje je je li to uopće
        potrebno. Vjerojatno bi samo datoteku učinilo predugom. Ima još nekih
        sitnica, ali nisam namjerno dalje dirao kod jer će biti brže to sve
        riješiti u razgovoru, s obzirom na to da ovo ipak nije stvarni projekt.{" "}
      </p>
    </div>
  )
}

export default Watchlist
