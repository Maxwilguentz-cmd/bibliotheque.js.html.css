// Baza de done pou Diksyonè a ( HTML, CSS, JS )
const dictionaryData = {
  html: {
    categories: ["Tout", "Baliz", "Atribi & Klas", "Input Types", "Inline vs Block"],
    items: [

      /* ===================== 1. BALIZ ===================== */
      {
        name: "<!DOCTYPE html>",
        cat: "Baliz",
        desc: "Li di navigatè a se yon dokiman HTML5 li pral li.",
        analogy: "💡 Se tankou yon kat idantite ki di navigatè a: 'Mwen se yon paj HTML5 kounye a'.",
        schema: `<div style="background:#1e293b; color:#fff; padding:8px;">&lt;!DOCTYPE html&gt; ➔ [Premye liy dokiman an]</div>`,
        code: `<!DOCTYPE html>`
      },
      {
        name: "<html>",
        cat: "Baliz",
        desc: "Gwo bwat kote tout kòd paj la dwe rete anndan l.",
        analogy: "💡 Panse ak <html> tankou po yon kay. Tout sa ki anndan kay la rete anndan po sa a.",
        schema: `<div style="border:2px solid #000; padding:10px;">&lt;html&gt;<br>&nbsp;&nbsp;[Tout paj la anndan la]<br>&lt;/html&gt;</div>`,
        code: `<html lang="ht">\n  <!-- Tout kontni an -->\n</html>`
      },
      {
        name: "<head>",
        cat: "Baliz",
        desc: "Bwat ki kenbe done sekrè paj la (tit, style, enfòmasyon Google). Moun pa wè l sou paj la.",
        analogy: "💡 Se tankou sèvo paj la. Li konnen tout règ ak enfòmasyon yo, men ou pa wè l ak grenn je w.",
        schema: `<div style="background:#ddd; padding:8px;">&lt;head&gt; ➔ [Konfigirasyon, Tit, Link CSS] &lt;/head&gt;</div>`,
        code: `<head>\n  <title>Paj mwen</title>\n</head>`
      },
      {
        name: "<body>",
        cat: "Baliz",
        desc: "Kò paj la. Tout sa w mete anndan baliz sa a ap parèt sou ekran an pou moun wè.",
        analogy: "💡 Se tankou yon fey papye vid kote w ap desine ak ekri sa moun ap gade.",
        schema: `<div style="border:2px dashed green; padding:10px;">&lt;body&gt; ➔ [Tout sa moun ka wè sou ekran an] &lt;/body&gt;</div>`,
        code: `<body>\n  <h1>Bonjou</h1>\n</body>`
      },
      {
        name: "<meta>",
        cat: "Baliz",
        desc: "Bay enfòmasyon kache sou paj la (akseptasyon aksan kreyòl, gwosè ekran telefòn).",
        analogy: "💡 Tankou yon fèmti sou yon liv ki di nan ki lang liv la ekri.",
        schema: `<div style="background:#fef08a; padding:5px;">Meta Charset: UTF-8 (Aksepte è, à, ò)</div>`,
        code: `<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      },
      {
        name: "<title>",
        cat: "Baliz",
        desc: "Mete non paj la anwo nan zonglet (tab) navigatè a.",
        analogy: "💡 Se non ki ekri sou kouvèti yon kaye.",
        schema: `<div style="background:#93c5fd; padding:5px; border-radius:5px 5px 0 0;">📌 Tit Paj la (anwo nan Tab la)</div>`,
        code: `<title>Diksyonè HTML</title>`
      },
      {
        name: "<link>",
        cat: "Baliz",
        desc: "Konekte paj HTML la ak yon fichye deyò (tankou yon fichye CSS).",
        analogy: "💡 Se tankou yon fil ki branche paj la ak yon lòt radyo pou bay mizik (style).",
        schema: `<div style="padding:5px;">HTML ─── <span style="color:blue;">&lt;link&gt;</span> ─── Style.css</div>`,
        code: `<link rel="stylesheet" href="style.css">`
      },
      {
         name: "<button>",
        cat: "Baliz",
        desc: "Bouton ki ka klike pou deklannche yon fòmilè oswa yon aksyon JavaScript.",
        analogy: "💡 Bouton yon sonèt: lè w peze l, yon bagay pase.",
        schema: `<button style="padding:5px 10px; background:#3b82f6; color:#fff; border:none; border-radius:4px;">Klike la a</button>`,
        code: `<button type="submit">Voye Fòmilè</button>`
       },
      {
        name: "<label>",
        cat: "Baliz",
        desc: "Li kole yon tèks ak yon chan input pou lè moun klike sou tèks la, curseur a antre nan input la otomatikman.",
        analogy: "💡 Etikèt ki kouvri yon boutèy ki di w sa ki anndan l.",
        schema: `<div style="padding:5px;"><label for="n">Nom:</label> <input id="n" type="text"></div>`,
        code: `<label for="email">Adrès Email:</label>\n<input type="email" id="email">`
       },
      {
        name: "<style>",
        cat: "Baliz",
        desc: "Pèmèt ou ekri kòd CSS dirèkteman anndan fichye HTML la.",
        analogy: "💡 Tankou gade yon foto epi deside pentire l menm kote a san w pa chanje fey.",
        schema: `<div style="background:#e2e8f0; padding:5px;">&lt;style&gt; color: red; &lt;/style&gt;</div>`,
        code: `<style>\n  h1 { color: blue; }\n</style>`
      },
      {
        name: "<base>",
        cat: "Baliz",
        desc: "Fakse yon adrès entènet prensipal pou tout lòt lyen nan paj la.",
        analogy: "💡 Se tankou di yon moun: 'Mete adrès vil sa a anvan tout lari m ap ba ou'.",
        schema: `<div style="padding:5px;">Base URL: https://sit.com/ ➔ Lyen: /paj1</div>`,
        code: `<base href="https://mysite.com/" target="_blank">`
      },
      {
        name: "<script>",
        cat: "Baliz",
        desc: "Mete oswa konekte kòd JavaScript nan paj la pou rann li entèaktif.",
        analogy: "💡 Se tankou mete yon motè anndan yon machin jwèt pou l ka kouri.",
        schema: `<div style="background:#fef08a; padding:5px;">&lt;script&gt; ➔ [Kòd JS pou fè paj la kouri]</div>`,
        code: `<script src="app.js"></script>`
      },
      {
        name: "<h1> rive <h6>",
        cat: "Baliz",
        desc: "Baliz pou mete tit nan paj la. <h1> se pi gwo tit la, <h6> se pi piti a.",
        analogy: "💡 <h1> se gwo tit nan premye paj yon jounal. <h6> se ti nòt anba paj la.",
        schema: `
          <h1 style="margin:0;">H1: Pi gwo tit</h1>
          <h3 style="margin:0;">H3: Tit mwayen</h3>
          <h6 style="margin:0;">H6: Pi piti tit</h6>`,
        code: `<h1>Gwo Tit Prensipal</h1>\n<h2>Ti Tit Sekondè</h2>\n<h6>Pi piti tit la</h6>`
      },
      {
        name: "<p>",
        cat: "Baliz",
        desc: "Mete yon paragraf tèks.",
        analogy: "💡 Tankou yon blok tèks nan yon liv.",
        schema: `<p style="border:1px solid #ccc; padding:5px;">Sa se yon paragraf tèks ki gen plizyè mo ladan l.</p>`,
        code: `<p>Bonjou, sa se yon paragraf nan HTML.</p>`
      },
      {
        name: "<br>",
        cat: "Baliz",
        desc: "Sote yon liy rapid san kreye yon nouvo paragraf.",
        analogy: "💡 Se tankou peze 'Enter' sou yon klavye lè w ap ekri yon poèm.",
        schema: `<div>Liy 1 <br> Liy 2 (Sote liy)</div>`,
        code: `Liy 1 <br> Liy 2`
      },
      {
        name: "<hr>",
        cat: "Baliz",
        desc: "Desine yon liy orizontal pou separe de sekisyon.",
        analogy: "💡 Tankou yon liy ou trase ak yon règ sou yon kaye pou separe de devwa.",
        schema: `<div>Kontni anwo <hr> Kontni anba</div>`,
        code: `<p>Pati 1</p>\n<hr>\n<p>Pati 2</p>`
      },
      {
        name: "<strong> ak <b>",
        cat: "Baliz",
        desc: "Mete tèks an gra. <strong> di li enpòtan anpil, <b> se pou style sèlman.",
        analogy: "💡 Tankou peze fò sou kreyon an pou mo a parèt pi fonse ak pi gra.",
        schema: `<div>Tèks nòmal <strong>Tèks an gra (Strong)</strong></div>`,
        code: `<strong>Enpòtan anpil!</strong>\n<b>Tèks gra sèlman</b>`
      },
      {
        name: "<em> ak <i>",
        cat: "Baliz",
        desc: "Mete tèks an italik (panche). <em> se pou aksantué yon mo.",
        analogy: "💡 Tankou panche ekriti w lè w ap ekri yon mo an fransè oswa an angle.",
        schema: `<div>Tèks <em>emfasize an italik</em></div>`,
        code: `<em>Mo sa a enpòtan!</em>`
      },
      {
        name: "<u>",
        cat: "Baliz",
        desc: "Souliye yon tèks ak yon liy anba l.",
        analogy: "💡 Trase yon liy dwat dwat anba yon mo pou atire atansyon.",
        schema: `<div><u>Tèks ki souliye</u></div>`,
        code: `<u>Tèks souliye</u>`
      },
      {
        name: "<mark>",
        cat: "Baliz",
        desc: "Mete yon koulè jón dèyè tèks la tankou yon makè flworesan.",
        analogy: "💡 Tankou pase yon makè jón sou yon fraz enpòtan nan yon liv.",
        schema: `<div>Mwen gen yon <mark>mo souligné ak jón</mark>.</div>`,
        code: `<p>Pa bliye <mark>dat sa a</mark>!</p>`
      },
      {
        name: "<small>",
        cat: "Baliz",
        desc: "Mete tèks la pi piti pase nòmal (itil pou nòt legal oswa copyright).",
        analogy: "💡 Ti ekriti ki anba nan kontra yo.",
        schema: `<div>Tèks nòmal <small>ti ekriti anba</small></div>`,
        code: `<small>© 2026 Tout dwa rezève.</small>`
      },
      {
        name: "<sub> ak <sup>",
        cat: "Baliz",
        desc: "<sub> mete tèks anba liy lan (fizik/chimik). <sup> mete l anwo (pwisans).",
        analogy: "💡 <sub> pou H₂O (dlo), <sup> pou 10² (pwisans).",
        schema: `<div>H<sub>2</sub>O ak X<sup>2</sup></div>`,
        code: `H<sub>2</sub>O ak 10<sup>2</sup>`
      },
      {
        name: "<del> ak <ins>",
        cat: "Baliz",
        desc: "<del> bare mo a (efase). <ins> souliye mo ki ranplase l la (ajoute).",
        analogy: "💡 Tankou bare yon ansyen pri sou yon etikèt pou mete yon nouvo pri anba l.",
        schema: `<div>Pri: <del>$50</del> <ins>$30</ins></div>`,
        code: `<del>$50</del> <ins>$30</ins>`
      },
      {
        name: "<blockquote> ak <q>",
        cat: "Baliz",
        desc: "Mete citasyon. <blockquote> fè yon gwo dekalaj, <q> mete ti guillemet.",
        analogy: "💡 Tankou rapòte pawòl yon moun te di nan yon diskou.",
        schema: `<blockquote style="border-left:3px solid blue; padding-left:5px;">"Pawòl yon maji"</blockquote>`,
        code: `<blockquote>Yon gwo citasyon...</blockquote>`
      },
      {
        name: "<abbr>",
        cat: "Baliz",
        desc: "Montre definisyon yon abrevrasyon lè w pase sourit sou li.",
        analogy: "💡 Tankou ekri 'OTAN' epi lè moun klike sou li li wè tout non an.",
        schema: `<div><abbr title="HyperText Markup Language">HTML</abbr> (Pase sourit sou li)</div>`,
        code: `<abbr title="World Health Organization">WHO</abbr>`
      },
      {
        name: "<code> ak <pre>",
        cat: "Baliz",
        desc: "<code> montre kòd. <pre> gade tout espas ak sote liy jan w ekri yo a.",
        analogy: "💡 Tankou ekri yon poèm kote ou vle pou chak espas ak liy rete ekzakeman jan w te tape l la.",
        schema: `<pre style="background:#000; color:#0f0; padding:5px;">Line 1\n  Line 2 (Espas konsève)</pre>`,
        code: `<pre><code>const x = 10;</code></pre>`
      },
      {
        name: "<a>",
        cat: "Baliz",
        desc: "Kreye yon lyen ki ka mennen w sou yon lòt paj oswa yon lòt sit entènet.",
        analogy: "💡 Tankou yon pòt majik: ou klike sou li epi li transpòte w yon lòt kote.",
        schema: `<a href="#" style="color:blue;">Klike isit la pou ale sou Google ➔</a>`,
        code: `<a href="https://google.com" target="_blank">Klike isit la</a>`
      },
      {
        name: "<img>",
        cat: "Baliz",
        desc: "Afiche yon foto sou paj la.",
        analogy: "💡 Tankou kole yon foto sou yon miray.",
        schema: `<div style="border:1px solid #aaa; padding:5px;">🖼️ Foto Afiche isit la</div>`,
        code: `<img src="foto.jpg" alt="Yon bèl peyizaj" width="300">`
      },
      {
        name: "<figure> ak <figcaption>",
        cat: "Baliz",
        desc: "Kovri yon foto oswa yon desin ansanm ak yon ti tèks ki eksplike sa foto a ye anba l.",
        analogy: "💡 Tankou yon kad foto sou yon miray ki gen yon ti etikèt anba l ki di kisa l ye.",
        schema: `<div style="border:1px solid #ccc; padding:5px; text-align:center;">🖼️ Foto <br> <small><i>[Légende / Deskripsyon foto a]</i></small></div>`,
        code: `<figure>\n  <img src="foto.jpg" alt="Foto">\n  <figcaption>Deskripsyon foto a</figcaption>\n</figure>`
      },
      {
        name: "<time>",
        cat: "Baliz",
        desc: "Endike yon dat oswa yon lè ke moun ka li e ke navigatè yo ka konprann fasil.",
        analogy: "💡 Tankou sele yon dat sou yon lèt pou di nan ki jou l te ekri.",
        schema: `<div style="background:#f1f5f9; padding:5px;">📅 <time datetime="2026-07-21">21 Jiyè 2026</time></div>`,
        code: `<p>Rendez-vous a se nan <time datetime="2026-08-01">1ye Out</time>.</p>`
      },
      {
        name: "<audio> ak <source>",
        cat: "Baliz",
        desc: "Mete yon ti jwè mizik/son sou paj la.",
        analogy: "💡 Tankou entegre yon ti radyo kote moun ka peze Play ak Pause.",
        schema: `<div style="background:#ddd; padding:5px; border-radius:15px;">▶️ 🔊 ━━━━━🔴━━━ [Jwè Audio]</div>`,
        code: `<audio controls>\n  <source src="mizik.mp3" type="audio/mpeg">\n</audio>`
      },
      {
        name: "<video> ak <track>",
        cat: "Baliz",
        desc: "<video> afiche yon videyo. <track> ka ajoute sous-titre (titres anba l).",
        analogy: "💡 Tankou yon ti ekran televizyon sou paj la ak sous-titre anba l.",
        schema: `<div style="background:#000; color:#fff; text-align:center; padding:15px;">🎬 Ekran Videyo (Play / Pause)</div>`,
        code: `<video controls width="250">\n  <source src="video.mp4" type="video/mp4">\n  <track src="sub.vtt" kind="subtitles" srclang="ht" label="Kreyòl">\n</video>`
      },
      {
        name: "<ul> ak <li>",
        cat: "Baliz",
        desc: "Lis san lòd (ak ti pwen anvan chak elèman).",
        analogy: "💡 Tankou yon lis komisyon pou al achte nan mache.",
        schema: `<ul><li>• Banann</li><li>• Figi</li></ul>`,
        code: `<ul>\n  <li>Banann</li>\n  <li>Mano</li>\n</ul>`
      },
      {
        name: "<ol> ak <li>",
        cat: "Baliz",
        desc: "Lis ak nimewo (1, 2, 3...) ki kòmande an lòd.",
        analogy: "💡 Tankou etap nan yon resèt manje kote lòd la enpòtan.",
        schema: `<ol><li>1. Lave men w</li><li>2. Mange</li></ol>`,
        code: `<ol>\n  <li>Premye etap</li>\n  <li>Dezyèm etap</li>\n</ol>`
      },
      {
        name: "<dl>, <dt> ak <dd>",
        cat: "Baliz",
        desc: "Lis definisyon. <dt> se mo a, <dd> se eksplikasyon mo a.",
        analogy: "💡 Ekzakeman tankou yon baj nan yon diksyonè.",
        schema: `<div><b>Mo:</b> HTML <br> &nbsp;&nbsp; ➔ Definisyon mo a isit la.</div>`,
        code: `<dl>\n  <dt>HTML</dt>\n  <dd>Langaj baliz pou kreye sit web.</dd>\n</dl>`
      },
      {
        name: "<table>, <tr>, <th>, <td>",
        cat: "Baliz",
        desc: "Kreye yon tablo ak ranje (tr), tit tablo (th), ak done (td).",
        analogy: "💡 Tankou yon fey Excel ki gen liy ak kolòn.",
        schema: `
          <table border="1" style="width:100%;">
            <tr><th>Non</th><th>Laj</th></tr>
            <tr><td>Paul</td><td>20</td></tr>
          </table>`,
        code: `<table border="1">\n  <tr>\n    <th>Non</th>\n    <th>Laj</th>\n  </tr>\n  <tr>\n    <td>Paul</td>\n    <td>20</td>\n  </tr>\n</table>`
      },
      {
        name: "<thead>, <tbody>, <tfoot>",
        cat: "Baliz",
        desc: "Òganize tablo a an 3 pati: Tèt (thead), Kò (tbody), ak Anba (tfoot).",
        analogy: "💡 Divize yon fey fòmilè an tèt paj, kò prensipal, ak total anba paj la.",
        schema: `<div style="border:1px solid #000; padding:3px;"><thead>Tèt</thead><br><tbody>Kò</tbody><br><tfoot>Total/Anba</tfoot></div>`,
        code: `<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>...</tfoot>\n</table>`
      },
      {
        name: "<form>",
        cat: "Baliz",
        desc: "Fòmilè pou ranmase done moun rantre pou voye sou yon sèvè.",
        analogy: "💡 Yon fòmilè an papye w ap ranpli nan yon biwo.",
        schema: `<div style="border:2px solid #3b82f6; padding:8px;">[ Fòmilè ak Input ak Bouton ]</div>`,
        code: `<form action="/submit" method="POST">\n  <input type="text">\n  <button>Voye</button>\n</form>`
      },
      {
        name: "<fieldset> ak <legend>",
        cat: "Baliz",
        desc: "<fieldset> trase yon kad alantou yon gwoup fòmilè. <legend> se ti tit ki chita sou liy kad sa a.",
        analogy: "💡 Tankou mete yon baryè alantou yon seksyon espesyal nan yon fòmilè ak yon ti plak anwo l.",
        schema: `<fieldset style="border:1px solid blue; padding:5px;"><legend style="color:blue;">Enfòmasyon Pèsonèl</legend>[ Input yo chita isit la ]</fieldset>`,
        code: `<fieldset>\n  <legend>Kontak</legend>\n  <input type="email">\n</fieldset>`
      },
      {
        name: "<datalist>",
        cat: "Baliz",
        desc: "Propoze yon lis sijesyon otomatik lè yon moun ap tape nan yon bwat input.",
        analogy: "💡 Tankou Google ki ba w lis sijesyon lè w kòmanse ekri nan bwat rechèch la.",
        schema: `<div style="background:#fef08a; padding:5px;">Input ➔ Sijesyon: [Ayiti, Kanada, Frans]</div>`,
        code: `<input list="peyi">\n<datalist id="peyi">\n  <option value="Ayiti">\n  <option value="Kanada">\n</datalist>`
      },
      {
        name: "<textarea>",
        cat: "Baliz",
        desc: "Gwo bwat tèks kote moun ka ekri yon long mesaj sou plizyè liy.",
        analogy: "💡 Yon gwo zòn sou yon fòmilè pou ekri kòmantè oswa lèt.",
        schema: `<textarea rows="2" style="width:100%;" placeholder="Ekri mesaj ou la..."></textarea>`,
        code: `<textarea rows="4" cols="50" placeholder="Mesaj ou..."></textarea>`
      },
      {
        name: "<select> ak <option>",
        cat: "Baliz",
        desc: "Meni dewoulan kote moun nan klike pou chwazi yon opsyon.",
        analogy: "💡 Tankou yon meni nan yon restoran kote w chwazi yon plat nan yon lis.",
        schema: `<select><option>Ayiti</option><option>Kanada</option></select>`,
        code: `<select>\n  <option value="ht">Ayiti</option>\n  <option value="ca">Kanada</option>\n</select>`
      },
      {
        name: "<details> ak <summary>",
        cat: "Baliz",
        desc: "Mete yon meni ki ka louvri epi fèmen lè w klike sou li.",
        analogy: "💡 Tankou yon bwat ki kouvri, lè w klike sou tit la li louvri pou montre kontni an.",
        schema: `<details><summary>Klike pou louvri</summary><p>Kontni kache a parèt!</p></details>`,
        code: `<details>\n  <summary>Plis enfòmasyon</summary>\n  <p>Men detay yo kache...</p>\n</details>`
      },
      {
        name: "<dialog>",
        cat: "Baliz",
        desc: "Fè yon ti bwat moso (Modal/Popup) parèt sou ekran an.",
        analogy: "💡 Yon bwat mesaj ki vin sou ekran an pou mande w reponn 'Wi' oswa 'Non'.",
        schema: `<div style="border:2px solid black; background:#fff; padding:5px; width:80%; margin:auto;">[ Modal Dialog Popup ]</div>`,
        code: `<dialog open>\n  <p>Bonjou! Sa se yon fenèt Popup.</p>\n</dialog>`
      },
      {
        name: "<canvas>",
        cat: "Baliz",
        desc: "Yon zòn vid kote w ka desine grafik ak jwèt 2D/3D atravè JavaScript.",
        analogy: "💡 Yon fey tablo nwa vid kote JS ap desine foto ak jwèt sou li.",
        schema: `<div style="border:1px solid red; background:#fafafa; padding:10px;">🎨 Canvas Zone (Desine ak JS)</div>`,
        code: `<canvas id="myCanvas" width="200" height="100"></canvas>`
      },
      {
        name: "<svg>",
        cat: "Baliz",
        desc: "Desine imaj ak linèt vektoryèl ki pa janm flou menm si w zoom li.",
        analogy: "💡 Desine ak liy majik ki toujou rete nèt kou dlo.",
        schema: `<svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="orange" /></svg>`,
        code: `<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="red" />\n</svg>`
      },
      {
        name: "<iframe>",
        cat: "Baliz",
        desc: "Ouvri yon lòt sit entènet oswa yon videyo YouTube anndan pwòp paj pa w la.",
        analogy: "💡 Tankou yon ti fenèt sou kay pa w ki ba w gade anndan kay vwazin lan.",
        schema: `<div style="border:2px solid gray; padding:10px;">[ Paj Entènet anndan yon lòt Paj ]</div>`,
        code: `<iframe src="https://example.com" width="300" height="200"></iframe>`
      },

      /* ===== BALIZ SEMANTIK HTML5 ===== */
      {
        name: "<header>",
        cat: "Baliz",
        desc: "Reprezante tèt paj la oswa tèt yon sekisyon. Anjeneral li gen logo, tit, ak meni prensipal la.",
        analogy: "💡 Tankou tèt yon moun oswa galri anvan ou antre anndan yon kay.",
        schema: `<div style="background:#ddd; border:1px solid #000; padding:8px; text-align:center;">HEADER (Logo, Tit, Meni)</div>`,
        code: `<header>\n  <h1>Sit Mwen</h1>\n</header>`
      },
      {
        name: "<nav>",
        cat: "Baliz",
        desc: "Kovri tout lyen navigasyon prensipal yo pou deplase sou sit la.",
        analogy: "💡 Tankou yon panèl oryantasyon oswa yon meni nan yon restoran.",
        schema: `<div style="background:#bbb; border:1px solid #000; padding:5px; text-align:center;">NAV (Lyen 1 | Lyen 2 | Lyen 3)</div>`,
        code: `<nav>\n  <a href="#home">Akèy</a>\n  <a href="#about">Aswè a</a>\n</nav>`
      },
      {
        name: "<main>",
        cat: "Baliz",
        desc: "Kenbe kontni prensipal ak inik nan paj la. Li pa dwe gen kontni ki repete sou lòt paj yo.",
        analogy: "💡 Tankou salon an oswa chanm prensipal yon kay kote pi gwo aktivite yo fèt.",
        schema: `<div style="border:2px solid green; padding:10px;">MAIN (Kontni prensipal paj la)</div>`,
        code: `<main>\n  <h2>Byenveni sou sit mwen an</h2>\n</main>`
      },
      {
        name: "<section>",
        cat: "Baliz",
        desc: "Reprezante yon sekisyon lojik nan dokiman an ki gen yon menm tèm (souvan ak pwòp tit pa l).",
        analogy: "💡 Tankou yon chapit nan yon liv oswa yon chanm espesyal anndan yon kay.",
        schema: `<div style="border:1px dashed blue; padding:8px;">SECTION (Nouvèl, Sèvis, elatriye)</div>`,
        code: `<section>\n  <h2>Sèvis Mwen Yo</h2>\n</section>`
      },
      {
        name: "<article>",
        cat: "Baliz",
        desc: "Yon kontni endepandan ki ka li oswa pataje pou kont li (tankou yon atik jounal oswa yon pòs blog).",
        analogy: "💡 Tankou yon atik separe nan yon jounal ke w ka koupe epi li l pou kont li.",
        schema: `<div style="border:1px solid brown; padding:8px;">ARTICLE (Atik blog, Kòmantè, Pòs)</div>`,
        code: `<article>\n  <h2>Atik 1</h2>\n  <p>Tèks atik la...</p>\n</article>`
      },
      {
        name: "<aside>",
        cat: "Baliz",
        desc: "Kontni segondè ki sou kote kontni prensipal la (sidebar, piblisite, lyen anrejistre).",
        analogy: "💡 Tankou yon ti tablo afichaj ki sou miray kote w ap pase a.",
        schema: `<div style="background:#eee; border:1px solid #999; padding:8px;">ASIDE (Piblisite, Meni kote)</div>`,
        code: `<aside>\n  <h3>Pub</h3>\n</aside>`
      },
      {
        name: "<footer>",
        cat: "Baliz",
        desc: "Pye paj la oswa anba yon sekisyon. Li gen enfòmasyon copyright, kontakt, ak lyen legal.",
        analogy: "💡 Tankou pye yon moun oswa fondasyon anba nèt nan yon liv.",
        schema: `<div style="background:#333; color:#fff; padding:8px; text-align:center;">FOOTER (Copyright © 2026, Kontakt)</div>`,
        code: `<footer>\n  <p>© 2026 Tout dwa rezève.</p>\n</footer>`
      },

      /* ===================== 2. ATRIBI & KLAS ===================== */
      {
        name: "href",
        cat: "Atribi & Klas",
        desc: "Bay adrès Entènet oswa paj kote yon lyen <a> oswa <link> dwe mennen w.",
        analogy: "💡 Tankou adrès yon kay ou ekri sou yon anvlòp lèt.",
        schema: `<div style="background:#e0f2fe; padding:5px;">href="<b>https://google.com</b>"</div>`,
        code: `<a href="https://google.com">Ale sou Google</a>`
      },
      {
        name: "src",
        cat: "Atribi & Klas",
        desc: "Endike sous (chimen/fichye) foto, videyo, odyo oswa script JS la.",
        analogy: "💡 Se tankou di: 'Al chèche imaj sa a nan dosye sa a'.",
        schema: `<div style="background:#e0f2fe; padding:5px;">src="<b>foto.jpg</b>"</div>`,
        code: `<img src="foto.jpg" alt="Foto">`
      },
      {
        name: "alt",
        cat: "Atribi & Klas",
        desc: "Tèks ki parèt si foto a pa ka chaje epi ki ede moun ki gen pwoblèm grenn je tande sa ki nan foto a.",
        analogy: "💡 Yon deskripsyon an kachèt ki eksplike sa ki nan foto a.",
        schema: `<div style="background:#e0f2fe; padding:5px;">alt="<b>Yon bèl kay</b>"</div>`,
        code: `<img src="kay.jpg" alt="Yon bèl kay blan">`
      },
      {
        name: "id",
        cat: "Atribi & Klas",
        desc: "Mete yon idantifyan ki inik nèt sou paj la pou yon sèl baliz.",
        analogy: "💡 Tankou nimewo matrikil oswa NIF yon moun. Pa ka gen 2 ki gen menm ID.",
        schema: `<div style="background:#e0f2fe; padding:5px;">id="<b>tit-prensipal</b>"</div>`,
        code: `<h1 id="tit-prensipal">Bonjou</h1>`
      },
      {
        name: "class",
        cat: "Atribi & Klas",
        desc: "Mete yon non gwoup sou plizyè baliz pou w ka style yo ansanm nan CSS.",
        analogy: "💡 Tankou inifòm yon lekòl: tout elèv ki nan gwoup sa a gen menm style.",
        schema: `<div style="background:#e0f2fe; padding:5px;">class="<b>btn-bleu</b>"</div>`,
        code: `<button class="btn-bleu">Ok</button>`
      },
      {
        name: "style",
        cat: "Atribi & Klas",
        desc: "Mete kòd CSS dirèkteman sou yon eleman HTML (Inline CSS).",
        analogy: "💡 Tankou mete yon makiyaj rapid sou vizaj yon moun dirèkteman.",
        schema: `<div style="background:#e0f2fe; padding:5px;">style="<b>color: red;</b>"</div>`,
        code: `<p style="color: red;">Tèks wouj</p>`
      },
      {
        name: "placeholder",
        cat: "Atribi & Klas",
        desc: "Yon ti tèks gri ki kache anndan yon zòn rantre done pou montre moun sa pou l ekri.",
        analogy: "💡 Ti ekriti gri anndan bwat fòmilè a ki disparèt lè w kòmanse tape.",
        schema: `<div style="background:#e0f2fe; padding:5px;">placeholder="<b>Mete non w...</b>"</div>`,
        code: `<input type="text" placeholder="Mete non w...">`
      },
      {
        name: "name",
        cat: "Atribi & Klas",
        desc: "Non sekrè an kachèt baliz la sèvi pou idantifye done an lè fòmilè a ap voye sou sèvè a.",
        analogy: "💡 Etikèt ki sou yon kès: lè w voye kès la, moun ki resevwa l la wè sa ki anndan l daprè non etikèt la.",
        schema: `<div style="background:#e0f2fe; padding:5px;">name="<b>username</b>"</div>`,
        code: `<input type="text" name="username">`
      },
      {
        name: "value",
        cat: "Atribi & Klas",
        desc: "Valè ki rantre oswa ki deja fikse nan yon bwat input.",
        analogy: "💡 Kontni ki anndan yon bwat anpapye.",
        schema: `<div style="background:#e0f2fe; padding:5px;">value="<b>Jean</b>"</div>`,
        code: `<input type="text" value="Jean">`
      },
      {
        name: "required",
        cat: "Atribi & Klas",
        desc: "Fòse moun nan ranpli champ sa a anvan li ka voye fòmilè a.",
        analogy: "💡 Tankou yon kesyon obligatwa nan yon egzamèn ke w pa ka sote.",
        schema: `<div style="background:#fee2e2; padding:5px;">required ➔ Champ an vèmasyon obligatwa</div>`,
        code: `<input type="text" required>`
      },
      {
        name: "disabled",
        cat: "Atribi & Klas",
        desc: "Desaktive epi bloke eleman an pou moun pa ka klike sou li ni ekri ladan l.",
        analogy: "💡 Tankou yon pòt ki fèmen ak kadna kote pèsonn pa ka antre.",
        schema: `<div style="background:#e2e8f0; padding:5px;">disabled ➔ Bloke, pa ka tape ni klike</div>`,
        code: `<input type="text" disabled value="Bloke">\n<button disabled>Voye</button>`
      },
      {
        name: "readonly",
        cat: "Atribi & Klas",
        desc: "Pèmèt moun nan sèlman li sa ki ekri nan bwat la san l pa ka chanje l ni modifye l.",
        analogy: "💡 Tankou yon dokiman ki kouvri ak vit: ou ka li l sèlman men ou pa ka ekri sou li.",
        schema: `<div style="background:#fef08a; padding:5px;">readonly ➔ Li sèlman, pa ka edite</div>`,
        code: `<input type="text" value="Sèlman pou li" readonly>`
      },
      {
        name: "pattern",
        cat: "Atribi & Klas",
        desc: "Fòse moun nan tape done yo sou yon fòma règleman spesifik (itilize kòd Regex).",
        analogy: "💡 Tankou yon mwoul: si pat la pa gen menm fòm ak mwoul la, li p ap antre.",
        schema: `<div style="background:#e0f2fe; padding:5px;">pattern="[0-9]{3}" ➔ Sèlman 3 chif aksepte</div>`,
        code: `<input type="text" pattern="[0-9]{8}" title="Rantre 8 chif nimewo telefòn lan">`
      },
      {
        name: "autocomplete",
        cat: "Atribi & Klas",
        desc: "Mete 'on' oswa 'off' pou di navigatè a si pou l sonje sa moun lan te tape anvan pou ranpli l pou li otomatikman.",
        analogy: "💡 Yon sekratè ki gen bon memwa ki sonje tout sa w te konn reponn pou l poze kreyon an pou ou.",
        schema: `<div style="background:#e0f2fe; padding:5px;">autocomplete="off" ➔ Pa sonje sa pou sekirite</div>`,
        code: `<input type="text" name="code" autocomplete="off">`
      },
      {
        name: "Karaktè Espesyal (Entities / Escapes)",
        cat: "Atribi & Klas",
        desc: "Kòd espesyal pou afiche karaktè ki ta ka twonpe HTML la (tankou < ak >).",
        analogy: "💡 Se tankou ekri yon kòd sekrè pou di navigatè a: 'Afiche flèch sa a, pa konprann se kòd li ye'.",
        schema: `<div>&amp;lt; ➔ <b>&lt;</b> | &amp;gt; ➔ <b>&gt;</b> | &amp;amp; ➔ <b>&amp;</b> | &amp;nbsp; ➔ <b>(Espas)</b></div>`,
        code: `&lt;  <!-- Pwodui < -->\n&gt;  <!-- Pwodui > -->\n&amp; <!-- Pwodui & -->\n&nbsp; <!-- Pwodui yon Espas -->`
      },

      /* ===================== 3. INPUT TYPES ===================== */
      {
        name: 'input type="text"',
        cat: "Input Types",
        desc: "Bwat pou rantre yon sèl liy tèks nòmal.",
        analogy: "💡 Yon ti fey papye pou ekri yon non oswa yon mo.",
        schema: `<input type="text" placeholder="Rantre tèks..." style="padding:5px;">`,
        code: `<input type="text" placeholder="Rantre non w">`
      },
      {
        name: 'input type="password"',
        cat: "Input Types",
        desc: "Bwat pou rantre yon mòdpas kote karaktè yo kache an ti pwen (●●●).",
        analogy: "💡 Yon rido ki kache sa w ap ekri a pou moun k kòt ou pa wè l.",
        schema: `<input type="password" value="12345" style="padding:5px;">`,
        code: `<input type="password" placeholder="Mòdpas ou">`
      },
      {
        name: 'input type="email"',
        cat: "Input Types",
        desc: "Bwat espesyal pou ranmase yon adrès email k ap tcheke si gen '@' ladan l.",
        analogy: "💡 Yon bwat lèt ki sèlman aksepte lèt ki gen yon bon adrès email.",
        schema: `<input type="email" placeholder="nom@gmail.com" style="padding:5px;">`,
        code: `<input type="email" placeholder="Email ou">`
      },
      {
        name: 'input type="number"',
        cat: "Input Types",
        desc: "Bwat ki aksepte nimewo sèlman ak ti flèch pou moute/desann.",
        analogy: "💡 Yon ti kalkilatris ki sèlman kite w rantre chif.",
        schema: `<input type="number" value="1" style="padding:5px;">`,
        code: `<input type="number" min="1" max="100">`
      },
      {
        name: 'input type="checkbox"',
        cat: "Input Types",
        desc: "Ti bwat karot pou koche (ou ka chwazi plizyè nan yon lis).",
        analogy: "💡 Ti kare sou yon lis komisyon kote w mete yon kwai lè w fin achte l.",
        schema: `<label><input type="checkbox" checked> Chwazi opsyon sa a</label>`,
        code: `<input type="checkbox" id="aksepte">\n<label for="aksepte">Mwen aksepte</label>`
      },
      {
        name: 'input type="radio"',
        cat: "Input Types",
        desc: "Ti pwen wòch pou chwazi YON SÈL opsyon nan yon gwoup.",
        analogy: "💡 Bouton chanje chèn sou yon ansyen radyo: w pa ka peze de an menm tan.",
        schema: `<label><input type="radio" checked> Gason</label> <label><input type="radio"> Fi</label>`,
        code: `<input type="radio" name="seks" value="gason"> Gason\n<input type="radio" name="seks" value="fi"> Fi`
      },
      {
        name: 'input type="color"',
        cat: "Input Types",
        desc: "Mete yon chwazi koulè (color picker) pou moun chwazi yon koulè.",
        analogy: "💡 Yon palèt penti kote w ka klike pou w chwazi yon koulè.",
        schema: `<input type="color" value="#3b82f6">`,
        code: `<input type="color" name="koulè_prefere">`
      },
      {
        name: 'input type="date"',
        cat: "Input Types",
        desc: "Ouvri yon kalandriye pou moun ka chwazi yon dat (jou, mwa, ane).",
        analogy: "💡 Yon ti kalandriye an papye kote w klike sou yon dat.",
        schema: `<input type="date" style="padding:5px;">`,
        code: `<input type="date" name="fèt">`
      },
      {
        name: 'input type="file"',
        cat: "Input Types",
        desc: "Mete yon bouton pou chwazi epi voye yon fichye (foto, PDF) sot nan aparèy la.",
        analogy: "💡 Yon pòt ki ouvri dosye nan telefòn oswa konpitè w pou w chwazi yon foto.",
        schema: `<input type="file" style="padding:5px;">`,
        code: `<input type="file" accept="image/*">`
      },
      {
        name: 'input type="range"',
        cat: "Input Types",
        desc: "Yon ti bar pou glise moute oswa desann yon valè (volume, pri).",
        analogy: "💡 Bouton glise pou moute oswa desann volim yon radyo.",
        schema: `<input type="range" min="0" max="100">`,
        code: `<input type="range" min="0" max="100" value="50">`
      },
      {
        name: 'input type="submit" / "button"',
        cat: "Input Types",
        desc: "Bouton pou voye done fòmilè a oswa deklannche yon aksyon.",
        analogy: "💡 Peze yon bouton pou voye yon lèt nan lapòs.",
        schema: `<input type="submit" value="Voye Fòmilè a" style="padding:5px; background:blue; color:white; border:none;">`,
        code: `<input type="submit" value="Voye">\n<input type="button" value="Klike">`
      },
      {
        name: 'input type="reset"',
        cat: "Input Types",
        desc: "Bouton ki efase tout sa moun lan te fen ekri nan fòmilè a pou remete l tou nèf.",
        analogy: "💡 Tankou pase yon chifon moute sou yon tablo nwa pou efase tout bagay san w pa bezwen efase mo pa mo.",
        schema: `<input type="reset" value="Efase Tout" style="padding:5px; background:red; color:white; border:none;">`,
        code: `<input type="reset" value="Efase ak Re-kòmanse">`
      },
      {
        name: 'input type="tel"',
        cat: "Input Types",
        desc: "Bwat espesyal pou rantre nimewo telefòn. Sou telefòn mobil, li ouvè yon klavye ak chif sèlman.",
        analogy: "💡 Klavye telefòn ou ki parèt dirèkteman lè w pral konpoze yon nimewo.",
        schema: `<input type="tel" placeholder="+509 3000-0000" style="padding:5px;">`,
        code: `<input type="tel" placeholder="+509 1234 5678">`
      },
      {
        name: 'input type="url"',
        cat: "Input Types",
        desc: "Bwat pou rantre adrès sit entènet (URL). Li tcheke si adrès la gen 'http://' oswa 'https://'.",
        analogy: "💡 Bwat adrès navigatè a ki mande yon lyen entènet valid.",
        schema: `<input type="url" placeholder="https://example.com" style="padding:5px;">`,
        code: `<input type="url" placeholder="https://mysite.com">`
      },
      {
        name: 'input type="search"',
        cat: "Input Types",
        desc: "Bwat pou fè rechèch. Li souvan gen yon ti kwa 'X' pou efase tèks la vit.",
        analogy: "💡 Bwat rechèch sou Google ki gen ti bouton pou efase sa w tape a.",
        schema: `<input type="search" placeholder="Chèche yon bagay..." style="padding:5px;">`,
        code: `<input type="search" placeholder="Chèche...">`
      },
      {
        name: 'input type="time"',
        cat: "Input Types",
        desc: "Bwat pou chwazi yon lè ak minit (egzanp: 02:30 PM).",
        analogy: "💡 Yon reloy dijital kote w chwazi nan ki lè yon evènman kòmanse.",
        schema: `<input type="time" style="padding:5px;">`,
        code: `<input type="time" name="lè_rendezvous">`
      },
      {
        name: 'input type="hidden"',
        cat: "Input Types",
        desc: "Bwat kache ki pa parèt sou ekran an men ki voye done (tankou yon ID) ansanm ak fòmilè a.",
        analogy: "💡 Yon ti poch sekrè nan yon valiz ki transpòte yon done san moun pa wè l.",
        schema: `<div style="background:#e2e8f0; padding:5px; font-size:12px;">hidden ➔ [Done sa a kache pou moun, men JS ak Sèvè wè l]</div>`,
        code: `<input type="hidden" name="user_id" value="98765">`
      },

      /* ===================== 4. INLINE VS BLOCK ===================== */
      {
        name: "<div> (Block Element)",
        cat: "Inline vs Block",
        desc: "Gwo bwat BLOCK vid ki pran tout lajè liy lan san kite okenn eleman monte bò kote l.",
        analogy: "💡 Yon gwo bwat katon vid ki pran tout espas nan yon liy.",
        schema: `<div style="border:2px dashed red; padding:5px;">[ DIV: Eleman Block ki pran tout liy lan ]</div>`,
        code: `<div class="bwat">\n  <h2>Tit</h2>\n  <p>Tèks</p>\n</div>`
      },
      {
        name: "<span> (Inline Element)",
        cat: "Inline vs Block",
        desc: "Ti bwat INLINE pou rewope yon ti pati nan yon tèks san kraze liy lan.",
        analogy: "💡 Tankou yon marqeur flworesan sou yon sèl mo anndan yon fraz.",
        schema: `<p>Bonjou <span style="background:yellow;">[ mo anndan span ]</span> frè m.</p>`,
        code: `<p>Yon tèks ak <span style="color:red;">mo wouj</span>.</p>`
      },
      {
        name: "Konparezon: Block vs Inline",
        cat: "Inline vs Block",
        desc: "Block pran tout liy lan e li kòmanse sou yon nouvo liy. Inline pran sèlman espas kontni l la.",
        analogy: "💡 Block se tankou yon gwo kamyon ki pran tout lari a. Inline se tankou yon moun k ap mache ki kite plas pou lòt moun.",
        schema: `
          <div style="background:#fee2e2; border:1px solid red; margin-bottom:4px;">BLOCK (100% lajè)</div>
          <span style="background:#dcfce7; border:1px solid green;">INLINE 1</span>
          <span style="background:#dcfce7; border:1px solid green;">INLINE 2</span>`,
        code: `<!-- Block elements: <div>, <p>, <h1>, <section> -->\n<!-- Inline elements: <span>, <a>, <strong>, <img> -->`
      }
    ]
  },
css: {
  categories: [
    "Tout",
    "Selektè & Pseudo",
    "Koulè & Fond",
    "Tèks & Typography",
    "Box Model & Dimansyon",
    "Layout (Flexbox/Grid)",
    "Position & Overflow",
    "Sante Vizyèl, Transform & Animasyon",
    "Inite, Fonksyon & Varyab",
    "Responsive & @Rules"
  ],
  items: [
    /* ========================================= */
    /* 1. SELEKTÈ & PSEUDO                       */
    /* ========================================= */
    {
      name: "Siblaj de Baz (*, element, .class, #id)",
      cat: "Selektè & Pseudo",
      desc: "Mwayen pou w chwazi ki eleman nan paj la w ap aplike CSS la sou li.",
      analogy: "💡 Rele yon moun pa non l (#id), pa deziyasyon li (.class), pa ras li (element), oswa rele tout moun ansanm (*).",
      schema: `<div style="border:1px dashed #64748b; padding:6px; font-size:12px;">* (Tout), div (Element), .card (Class), #header (ID)</div>`,
      code: `* { box-sizing: border-box; }\np {\n  color: #333;\n}\n.card {\n  padding: 10px;\n}\n#header {\n  background: blue;\n}`
    },
    {
      name: "Combinators (>, +, ~, space, comma)",
      cat: "Selektè & Pseudo",
      desc: "Relasyon ant eleman yo (Parenn/Pitit, Frè ak Sè, Combinasyon).",
      analogy: "💡 Swiv yon branch fanmi pou konnen egzakteman ki moun pou w lonje dwèt sou li.",
      schema: `<div style="background:#f1f5f9; padding:6px; font-size:12px;">div > p (Pitit dirèk), div p (Nenpòt pitit/pitit pitit)</div>`,
      code: `div > p {\n  margin: 0;\n}\nh1, h2 {\n  font-family: sans-serif;\n}\nh1 + p {\n  margin-top: 5px;\n}`
    },
    {
      name: "Pseudo-Classes (:hover, :focus, :active, :checked, :disabled)",
      cat: "Selektè & Pseudo",
      desc: "Siblaj yon eleman dapre eta li ye nan moman an (lè moun klike l, pase sou li, elatriye).",
      analogy: "💡 Koulè yon moun ki kache lè li koute yon bon mizik oswa lè l flache soti.",
      schema: `<button style="background:#3b82f6; color:white; border:none; padding:6px 12px; border-radius:4px;">Pase sou mwen (:hover)</button>`,
      code: `button:hover {\n  background-color: #2563eb;\n}\ninput:focus {\n  border-color: #3b82f6;\n}\ninput:disabled {\n  opacity: 0.5;\n}`
    },
    {
      name: "Pseudo-Classes Estriktirèl (:first-child, :last-child, :nth-child(), :not(), :root, :empty)",
      cat: "Selektè & Pseudo",
      desc: "Siblaj eleman yo dapre pozisyon yo nan kòd HTML la oswa si yo vid.",
      analogy: "💡 Chwazi premye timoun nan yon ranje, oswa chak 2zyèm timoun.",
      schema: `<div style="display:flex; gap:4px;"><span style="background:#cbd5e1; padding:4px;">1ye</span><span style="background:#e2e8f0; padding:4px;">2yèm</span></div>`,
      code: `li:first-child {\n  font-weight: bold;\n}\nli:nth-child(even) {\n  background-color: #f8fafc;\n}\n:root {\n  --main-color: #3b82f6;\n}`
    },
    {
      name: "Pseudo-Elements (::before, ::after, ::placeholder, ::selection, ::marker)",
      cat: "Selektè & Pseudo",
      desc: "Siblaj oswa kreye yon moso pati anndan yon eleman san w pa bezwen ekri HTML pou sa.",
      analogy: "💡 Mete yon ti badj sou yon mayo san w pa koud yon lòt rad nan tèt li.",
      schema: `<div style="color:#64748b; font-size:12px;">Tèks ak yon ti ikòn kreye pa ::before</div>`,
      code: `.btn::before {\n  content: "★ ";\n}\ninput::placeholder {\n  color: #94a3b8;\n}`
    },

    /* ========================================= */
    /* 2. KOULÈ & FOND                           */
    /* ========================================= */
    {
      name: "color, background-color & opacity",
      cat: "Koulè & Fond",
      desc: "Chanje koulè tèks la, koulè dèyè bwat la ak nivo transparans tout eleman an.",
      analogy: "💡 Peentire mi an epi chwazi si stikè w ap mete sou li a transparan oswa solid.",
      schema: `<div style="background-color:#3b82f6; color:#ffffff; opacity:0.9; padding:8px;">Koulè + Fond + Opacity 0.9</div>`,
      code: `.card {\n  color: #1e293b;\n  background-color: #f8fafc;\n  opacity: 0.95;\n}`
    },
    {
      name: "Fòma Koulè (rgb, rgba, hsl, hsla, #hex, transparent, currentColor)",
      cat: "Koulè & Fond",
      desc: "Sistèm diferan pou w defini egzakteman koulè ou vle a ak nivo transparans li.",
      analogy: "💡 Melanje penti wouj, vèt, ak ble sou yon palèt pou w jwenn egzak ti koulè w ap chèche a.",
      schema: `<div style="background:hsla(217, 91%, 60%, 0.8); color:white; padding:8px;">HSLA(217, 91%, 60%, 0.8)</div>`,
      code: `.box {\n  color: currentColor;\n  background-color: rgba(59, 130, 246, 0.5);\n  border-color: #3b82f6;\n}`
    },
    {
      name: "Propriyete Background (image, repeat, size, position, attachment, origin, clip)",
      cat: "Koulè & Fond",
      desc: "Kontwol konplè sou kijan yon imaj parèt kòm fond nan paj la.",
      analogy: "💡 Mete yon tablo sou yon mi: chwazi si w ap kouvri tout mi an, si l ap repete, ak kote l ap chita.",
      schema: `<div style="background: linear-gradient(135deg, #60a5fa, #1d4ed8); color:white; padding:12px; border-radius:4px;">Background ak imaj / degrade</div>`,
      code: `.hero {\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}`
    },

    /* ========================================= */
    /* 3. TÈKS & TYPOGRAPHY                      */
    /* ========================================= */
    {
      name: "Font (family, size, style, weight, variant, display, stretch, kerning)",
      cat: "Tèks & Typography",
      desc: "Kontwole tipografi an, gwosè, ak fòm karaktè lèt yo.",
      analogy: "💡 Chwazi kras ekriti ou (kaligrafi, gwo lèt gra, panche, elatriye).",
      schema: `<div style="font-family:sans-serif; font-weight:700; font-size:16px;">Font Gra Sans-Serif</div>`,
      code: `h1 {\n  font-family: 'Inter', sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n}`
    },
    {
      name: "Text Align, Transform, Decoration, Indent & Shadow",
      cat: "Tèks & Typography",
      desc: "Aliyman, gwo lèt/ti lèt, soulajman ak lonbraj sou tèks yo.",
      analogy: "💡 Ranje tèks sou yon paj feyè, soulaye mo enpòtan yo, epi mete lonbraj dèyè yo.",
      schema: `<div style="text-align:center; text-transform:uppercase; text-decoration:underline; font-size:12px;">Tèks Santre, Souliyen</div>`,
      code: `.title {\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: underline;\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);\n}`
    },
    {
      name: "Espas Tèks (line-height, letter-spacing, word-spacing)",
      cat: "Tèks & Typography",
      desc: "Regle espas ki ant liy yo, ant lèt yo, ak ant mo yo.",
      analogy: "💡 Espas ou kite ant liy sou yon kaye pou ekriti a ka pi fasil pou li.",
      schema: `<div style="line-height:1.6; letter-spacing:1px; font-size:12px;">Espas sou liy (1.6) ak ant lèt (1px)</div>`,
      code: `p {\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n  word-spacing: 2px;\n}`
    },
    {
      name: "Formatay Tèks (white-space, word-break, overflow-wrap, direction)",
      cat: "Tèks & Typography",
      desc: "Regle kijan tèks la dwe ranmase sou li menm lè l rive nan bout bwat la.",
      analogy: "💡 Deside si yon mo ki twò long dwe kase an de lè l rive sou bò paj la.",
      schema: `<div style="word-break:break-all; background:#e2e8f0; padding:4px; font-size:10px;">Mo_ki_twò_long_ap_kase_kondisyonèlman</div>`,
      code: `.comment {\n  white-space: nowrap;\n  word-break: break-word;\n  overflow-wrap: anywhere;\n}`
    },

    /* ========================================= */
    /* 4. BOX MODEL & DIMANSYON                  */
    /* ========================================= */
    {
      name: "Width, Height, Min/Max Limits",
      cat: "Box Model & Dimansyon",
      desc: "Regle lajè ak wotè yon eleman ak limit li pa dwe depase.",
      analogy: "💡 Kadre yon foto ak yon limit gwosè pou l pa janm depase fond feyè a.",
      schema: `<div style="max-width:100%; min-height:30px; background:#e2e8f0; padding:4px; font-size:12px;">Max-width: 100% | Min-height: 30px</div>`,
      code: `.container {\n  width: 100%;\n  max-width: 1200px;\n  min-height: 400px;\n}`
    },
    {
      name: "Padding & Margin (top, right, bottom, left)",
      cat: "Box Model & Dimansyon",
      desc: "Espas anndan bwat la (padding) ak espas deyò bwat la (margin).",
      analogy: "💡 Padding se koton ki anndan bwat la; Margin se distans ou kite ant bwat sa a ak lòt bwat bò kote l.",
      schema: `<div style="background:#cbd5e1; padding:8px;"><div style="background:white; padding:6px; font-size:11px;">Padding anndan / Margin deyò</div></div>`,
      code: `.card {\n  margin: 16px;\n  padding: 20px 15px;\n}`
    },
    {
      name: "Border (width, style, color, radius) & Outline",
      cat: "Box Model & Dimansyon",
      desc: "Kadre/Liy ki tounen bwat la ak fòm kwen li yo.",
      analogy: "💡 Desine yon kadre ak yon kreyon toutotou bwat la epi rounded kwen yo.",
      schema: `<div style="border:2px solid #3b82f6; border-radius:8px; padding:6px; font-size:12px;">Border solid ak Radius 8px</div>`,
      code: `.box {\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  outline: 2px solid transparent;\n}`
    },
    {
      name: "box-sizing & box-shadow",
      cat: "Box Model & Dimansyon",
      desc: "Fòse padding antre nan lajè total la (border-box) epi mete lonbraj anba bwat la.",
      analogy: "💡 Yon bwat ki kenbe dimansyon deyò l kèlkeswa sa w mete anndan l, epi ki gen yon lonbraj anba l.",
      schema: `<div style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1); padding:8px; background:white; font-size:12px;">Bwat ak Box-Shadow</div>`,
      code: `* {\n  box-sizing: border-box;\n}\n.card {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}`
    },

    /* ========================================= */
    /* 5. LAYOUT (FLEXBOX & GRID)                */
    /* ========================================= */
    {
      name: "display (block, inline, inline-block, flex, grid, none, table)",
      cat: "Layout (Flexbox/Grid)",
      desc: "Defini ki jan yon eleman dwe konpòte l sou paj la (si l pran tout liy lan oswa si l rete kòt a kòt).",
      analogy: "💡 Deside si yon bwat ap pran tout lajè yon tab oswa si l ap chita bò kote yon lòt.",
      schema: `<div style="display:inline-block; background:#bfdbfe; padding:4px; font-size:12px;">Inline-Block</div>`,
      code: `.btn {\n  display: inline-block;\n}\n.hidden {\n  display: none;\n}`
    },
    {
      name: "Flexbox (direction, wrap, flow, justify, align, gap, order, grow, shrink, basis)",
      cat: "Layout (Flexbox/Grid)",
      desc: "Sistèm pou aliyen eleman sou yon sèl aks (orizontal oswa vertikal) byen fasil.",
      analogy: "💡 Ranranje moun sou yon sèl liy kòt a kòt epi ajiste espas ant yo.",
      schema: `<div style="display:flex; justify-content:space-between; gap:8px; background:#f1f5f9; padding:6px;"><span style="background:#60a5fa; color:white; padding:2px 6px;">1</span><span style="background:#60a5fa; color:white; padding:2px 6px;">2</span></div>`,
      code: `.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}`
    },
    {
      name: "Grid (template-columns/rows, areas, column/row, gap, place-items, auto-flow)",
      cat: "Layout (Flexbox/Grid)",
      desc: "Sistèm konplè pou ranje eleman yo an 2 dimansyon (liy ak kolon tankou yon tablo).",
      analogy: "💡 Yon chodyè kare-kare pou mete ti bwat nan kolon ak liy byen kwadre.",
      schema: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;"><div style="background:#cbd5e1; padding:4px;">Col 1</div><div style="background:#cbd5e1; padding:4px;">Col 2</div></div>`,
      code: `.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}`
    },

    /* ========================================= */
    /* 6. POSITION & OVERFLOW                    */
    /* ========================================= */
    {
      name: "position (static, relative, absolute, fixed, sticky, top, right, bottom, left)",
      cat: "Position & Overflow",
      desc: "Plase eleman kote w vle sou paj la oswa kole l nan yon ti kwen.",
      analogy: "💡 Kole yon stikè presi sou yon foto (absolute) oswa kole yon nòt sou vit machin lan pou l pa janm deplase (fixed).",
      schema: `<div style="position:relative; background:#e2e8f0; height:35px;"><span style="position:absolute; right:5px; top:5px; background:red; color:white; padding:2px 4px; font-size:10px;">Absolute</span></div>`,
      code: `.parent {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}`
    },
    {
      name: "z-index",
      cat: "Position & Overflow",
      desc: "Kontwole ki eleman ki dwe parèt anlè yon lòt lè yo piled sou lòt.",
      analogy: "💡 Yon pil kajak: sa ki gen z-index ki pi wo a se li ki sou tèt la.",
      schema: `<div style="background:#1e293b; color:white; padding:4px; font-size:12px;">z-index: 999 (Sou Tèt)</div>`,
      code: `.modal {\n  position: fixed;\n  z-index: 9999;\n}`
    },
    {
      name: "overflow (overflow-x, overflow-y, visible, hidden, scroll, auto)",
      cat: "Position & Overflow",
      desc: "Kontwole sa k rive lè kontni an pi gwo pase bwat ki kenbe l la.",
      analogy: "💡 Yon bwat ki twò piti pou rad ou: ou dwe swa koupe rad la (hidden) oswa mete yon asansè pou rale yo (scroll).",
      schema: `<div style="height:30px; overflow:hidden; background:#fef08a; padding:4px; font-size:10px;">Gwo tèks ki koupe paske overflow se hidden...</div>`,
      code: `.scroll-box {\n  max-height: 200px;\n  overflow-y: auto;\n}`
    },

    /* ========================================= */
    /* 7. SANTE VIZYÈL, TRANSFORM & ANIMASYON   */
    /* ========================================= */
    {
      name: "transform (translate, rotate, scale, skew, matrix, transform-origin)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Deplase, tounen, agrandi oswa deformation sou yon eleman sou paj la.",
      analogy: "💡 Vire yon foto ak dwèt ou sou yon telefòn oswa zoom sou li.",
      schema: `<div style="transform:rotate(-3deg); background:#fca5a5; padding:4px; font-size:11px; display:inline-block;">Rotate(-3deg)</div>`,
      code: `.card:hover {\n  transform: translateY(-5px) scale(1.02);\n}`
    },
    {
      name: "transition (property, duration, delay, timing-function, ease, linear...)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Fè yon chanjman fèt dousman nan yon ti tan fikse ant de eta.",
      analogy: "💡 Yon pòt k ap louvri dousman nan 0.3 segonn olye li ouvri sou kou.",
      schema: `<button style="transition:all 0.3s ease; background:#10b981; color:white; border:none; padding:4px 8px;">Transition 0.3s</button>`,
      code: `.btn {\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}`
    },
    {
      name: "animation & @keyframes",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Kreye animasyon konplèks ki gen plizyè etap san bezwen JavaScript.",
      analogy: "💡 Yon fim desine kote w desine chak imaj anndan yon seri etap ki gen pousantaj (0% rive 100%).",
      schema: `<div style="background:#a7f3d0; padding:4px; font-size:12px;">Animasyon @keyframes</div>`,
      code: `@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n.loader {\n  animation: spin 1s linear infinite;\n}`
    },
    {
      name: "Filters (blur, brightness, contrast, drop-shadow, grayscale, invert, sepia, saturate, hue-rotate)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Efè vizyèl foto sou eleman yo tankou flou, nwa-ak-blan, oswa klète.",
      analogy: "💡 Filtè Instagram ou mete sou yon foto anvan w publiye l.",
      schema: `<div style="filter:grayscale(100%); background:#bfdbfe; padding:4px; font-size:11px;">Filter: grayscale(100%)</div>`,
      code: `img.bw {\n  filter: grayscale(100%);\n}\n.glass {\n  backdrop-filter: blur(10px);\n}`
    },
    {
      name: "Media Elements (object-fit, object-position, aspect-ratio)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Kontwole kijan imaj ak videyo antre nan bwat yo san yo pa fòse oswa rale deformation.",
      analogy: "💡 Rantre yon gwo foto nan yon ti kadre san w pa krase oswa rale fòm moun ki sou foto a.",
      schema: `<div style="aspect-ratio:16/9; background:#94a3b8; color:white; text-align:center; line-height:30px; font-size:11px;">16 / 9 Aspect Ratio</div>`,
      code: `img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  aspect-ratio: 16 / 9;\n}`
    },
    {
      name: "Sèvis Siplemantè (cursor, visibility, list-style, table formatting)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Regle flèch sourit la (pointer, grab...), afichaj lis yo ak tab yo.",
      analogy: "💡 Kwen sourit la ki tounen yon ti men lè w pase sou yon bouton ki ka klike.",
      schema: `<div style="cursor:pointer; background:#e2e8f0; padding:4px; font-size:11px;">Cursor: pointer</div>`,
      code: `button {\n  cursor: pointer;\n}\nul {\n  list-style: none;\n}\ntable {\n  border-collapse: collapse;\n}`
    },

    /* ========================================= */
    /* 8. INITE, FONKSYON & VARYAB               */
    /* ========================================= */
    {
      name: "Varyab CSS (--color, var())",
      cat: "Inite, Fonksyon & Varyab",
      desc: "Stoke yon valè (tankou yon koulè) yon sèl fwa epi itilize l plizyè kote sou paj la.",
      analogy: "💡 Ekri yon nimewo telefòn sou yon bout papye pou tout moun ka sèvi avèk li san yo pa aprann li pa kè.",
      schema: `<div style="background:#3b82f6; color:white; padding:6px; font-size:11px;">var(--main-bg)</div>`,
      code: `:root {\n  --primary-color: #3b82f6;\n}\n.btn {\n  background-color: var(--primary-color);\n}`
    },
    {
      name: "Fonksyon Kalkil (calc, min, max, clamp)",
      cat: "Inite, Fonksyon & Varyab",
      desc: "Fè opòvasyon matematik dirèkteman anndan CSS pou ajiste gwosè yo dinamikman.",
      analogy: "💡 Yon règ ki kalkile 100% lajè paj la epi li retire 20px sou li otomatikman.",
      schema: `<div style="width:calc(100% - 20px); background:#fef08a; padding:4px; font-size:11px;">calc(100% - 20px)</div>`,
      code: `.container {\n  width: calc(100% - 40px);\n  font-size: clamp(1rem, 2.5vw, 2rem);\n}`
    },
    {
      name: "Inite CSS (px, %, em, rem, vw, vh, fr, ch, vmin, vmax)",
      cat: "Inite, Fonksyon & Varyab",
      desc: "Inite mezi pou atiye gwosè sou paj la (swat ki fiks tankou px, oswa ki adapte tankou rem, %, vw).",
      analogy: "💡 Sèvi ak santimèt fiks sou yon feyè oswa sèvi ak pousantaj dapre gwosè feyè a.",
      schema: `<div style="font-size:1.2rem; background:#cbd5e1; padding:4px;">Gwosè an REM (Responsive)</div>`,
      code: `body {\n  font-size: 16px;\n}\nh1 {\n  font-size: 2rem; /* 32px */\n}\n.hero {\n  height: 100vh;\n}`
    },

    /* ========================================= */
    /* 9. RESPONSIVE & @RULES                    */
    /* ========================================= */
    {
      name: "@media Queries (min-width, max-width, orientation, prefers-color-scheme)",
      cat: "Responsive & @Rules",
      desc: "Aplike style sèlman lè ekran an gen yon sèten gwosè oswa lè moun nan nan Dark Mode.",
      analogy: "💡 Yon rad ki chanje fòm dapre si l sou yon timoun (telefòn) oswa sou yon granmoun (òdinatè).",
      schema: `<div style="background:#fed7aa; padding:6px; font-size:11px;">@media (max-width: 768px)</div>`,
      code: `@media (max-width: 768px) {\n  .menu {\n    flex-direction: column;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  body { background: #0f172a; color: white; }\n}`
    },
    {
      name: "@import, @font-face & Common Values (inherit, initial, unset, revert, auto, none, !important)",
      cat: "Responsive & @Rules",
      desc: "Chaje ekriti kanas, enpòte dosye CSS, epi re-itilize oswa devye valè defo ak !important.",
      analogy: "💡 Enpòte yon nouvo kalite kreyon deyò a, oswa fòse yon règ kèlkeswa sa k te ekri anvan.",
      schema: `<div style="color:red !important; font-size:11px;">Valè fòse ak !important</div>`,
      code: `@import url('https://fonts.googleapis.com/css2?family=Inter');\n\n.title {\n  color: red !important; /* Fòse valè a */\n}`
    }
  ]
},
css: {
  categories: [
    "Tout",
    "Selektè & Pseudo",
    "Koulè & Fond",
    "Tèks & Typography",
    "Box Model & Dimansyon",
    "Layout (Flexbox/Grid)",
    "Position & Overflow",
    "Sante Vizyèl, Transform & Animasyon",
    "Inite, Fonksyon & Varyab",
    "Responsive & @Rules",
    "Scroll, Clip & Interactivity"
  ],
  items: [
    /* ========================================= */
    /* 1. SELEKTÈ & PSEUDO                       */
    /* ========================================= */
    {
      name: "Siblaj de Baz (*, element, .class, #id)",
      cat: "Selektè & Pseudo",
      desc: "Mwayen pou w chwazi ki eleman nan paj la w ap aplike CSS la sou li.",
      analogy: "💡 Rele yon moun pa non l (#id), pa deziyasyon li (.class), pa ras li (element), oswa rele tout moun ansanm (*).",
      schema: `<div style="border:1px dashed #64748b; padding:6px; font-size:12px;">* (Tout), div (Element), .card (Class), #header (ID)</div>`,
      code: `* { box-sizing: border-box; }\np {\n  color: #333333; /* ⬛ Nwa fonse */\n}\n.card {\n  padding: 10px;\n}\n#header {\n  background-color: #0000ff; /* 🟦 Ble */\n}`
    },
    {
      name: "Combinators (>, +, ~, space, comma, &)",
      cat: "Selektè & Pseudo",
      desc: "Relasyon ant eleman yo (Parenn/Pitit, Frè ak Sè, Combinasyon ak Nesting &).",
      analogy: "💡 Swiv yon branch fanmi pou konnen egzakteman ki moun pou w lonje dwèt sou li.",
      schema: `<div style="background:#f1f5f9; padding:6px; font-size:12px;">div > p (Pitit dirèk), div p (Nenpòt pitit/pitit pitit)</div>`,
      code: `div > p {\n  margin: 0;\n}\nh1, h2 {\n  font-family: sans-serif;\n}\n.card {\n  & .title { color: #ff0000; /* 🟥 Wouj */ }\n}`
    },
    {
      name: "Pseudo-Classes (:hover, :focus, :active, :checked, :disabled, :enabled, :visited, :link, :focus-within, :focus-visible)",
      cat: "Selektè & Pseudo",
      desc: "Siblaj yon eleman dapre eta li ye nan moman an (lè moun klike l, pase sou li, oswa lè l gen fokus).",
      analogy: "💡 Koulè yon moun ki kache lè li koute yon bon mizik oswa lè l flache soti.",
      schema: `<button style="background:#3b82f6; color:#ffffff; border:none; padding:6px 12px; border-radius:4px;">Pase sou mwen (:hover)</button>`,
      code: `button:hover {\n  background-color: #2563eb; /* 🟦 Ble fonse */\n}\ninput:focus-visible {\n  outline: 2px solid #0000ff; /* 🟦 Ble */\n}\ninput:disabled {\n  opacity: 0.5;\n}`
    },
    {
      name: "Pseudo-Classes Estriktirèl (:first-child, :last-child, :nth-child(), :nth-of-type(), :not(), :is(), :where(), :has(), :root, :empty)",
      cat: "Selektè & Pseudo",
      desc: "Siblaj eleman yo dapre pozisyon yo nan kòd HTML la, lojik avanse (:has) oswa si yo vid.",
      analogy: "💡 Chwazi premye timoun nan yon ranje, oswa yon bwat ki gen yon imaj anndan l (:has).",
      schema: `<div style="display:flex; gap:4px;"><span style="background:#cbd5e1; padding:4px;">1ye</span><span style="background:#e2e8f0; padding:4px;">2yèm</span></div>`,
      code: `li:first-child {\n  font-weight: bold;\n}\n.card:has(img) {\n  padding: 0;\n}\n:is(h1, h2, h3) {\n  margin: 0;\n}`
    },
    {
      name: "Pseudo-Elements (::before, ::after, ::placeholder, ::selection, ::marker, ::first-letter, ::first-line, ::backdrop)",
      cat: "Selektè & Pseudo",
      desc: "Siblaj oswa kreye yon moso pati anndan yon eleman san w pa bezwen ekri HTML pou sa.",
      analogy: "💡 Mete yon ti badj sou yon mayo san w pa koud yon lòt rad nan tèt li.",
      schema: `<div style="color:#64748b; font-size:12px;">Tèks ak yon ti ikòn kreye pa ::before</div>`,
      code: `.btn::before {\n  content: "★ ";\n}\ninput::placeholder {\n  color: #94a3b8; /* 🩶 Grizamè */\n}\n::selection {\n  background-color: #ffd700; /* 🟨 Jòn Ò (#ffd700) */\n}`
    },

    /* ========================================= */
    /* 2. KOULÈ & FOND                           */
    /* ========================================= */
    {
      name: "color, background-color & opacity",
      cat: "Koulè & Fond",
      desc: "Chanje koulè tèks la, koulè dèyè bwat la ak nivo transparans tout eleman an.",
      analogy: "💡 Peentire mi an epi chwazi si stikè w ap mete sou li a transparan oswa solid.",
      schema: `<div style="background-color:#3b82f6; color:#ffffff; opacity:0.9; padding:8px;">Koulè #ffffff + Fond #3b82f6 + Opacity 0.9</div>`,
      code: `.card {\n  color: #1e293b; /* ⬛ Nwa/Gris fonse (#1e293b) */\n  background-color: #f8fafc; /* ⬜ Blan/Gris klè (#f8fafc) */\n  opacity: 0.95;\n}`
    },
    {
      name: "Fòma Koulè (rgb, rgba, hsl, hsla, #hex, transparent, currentColor, oklch, color-mix, light-dark)",
      cat: "Koulè & Fond",
      desc: "Sistèm diferan pou w defini egzakteman koulè ou vle a, melanje koulè, ak sipò mòd klè/sombr.",
      analogy: "💡 Melanje penti wouj (#ff0000), vèt (#00ff00), ak ble (#0000ff) sou yon palèt pou w jwenn egzak ti koulè w ap chèche a.",
      schema: `<div style="background:#3b82f6; color:#ffffff; padding:8px;">#3b82f6 (Ble) | #ffffff (Blan)</div>`,
      code: `.box {\n  color: currentColor;\n  background-color: color-mix(in srgb, #0000ff 30%, #ffffff); /* 🟦 Ble (#0000ff) ak ⬜ Blan (#ffffff) */\n  border-color: #3b82f6; /* 🟦 Ble (#3b82f6) */\n}`
    },
    {
      name: "Propriyete Background (image, repeat, size, position, attachment, origin, clip, linear-gradient, radial-gradient, repeating-linear-gradient)",
      cat: "Koulè & Fond",
      desc: "Kontwol konplè sou kijan yon imaj oswa yon degrade parèt kòm fond nan paj la.",
      analogy: "💡 Mete yon tablo sou yon mi: chwazi si w ap kouvri tout mi an, si l ap repete, ak kote l ap chita.",
      schema: `<div style="background: linear-gradient(135deg, #60a5fa, #1d4ed8); color:#ffffff; padding:12px; border-radius:4px;">Gradient #60a5fa rive #1d4ed8</div>`,
      code: `.hero {\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}`
    },

    /* ========================================= */
    /* 3. TÈKS & TYPOGRAPHY                      */
    /* ========================================= */
    {
      name: "Font (family, size, style, weight, variant, display, stretch, kerning, feature-settings)",
      cat: "Tèks & Typography",
      desc: "Kontwole tipografi an, gwosè, ak fòm karaktè lèt yo.",
      analogy: "💡 Chwazi kras ekriti ou (kaligrafi, gwo lèt gra, panche, elatriye).",
      schema: `<div style="font-family:sans-serif; font-weight:700; font-size:16px;">Font Gra Sans-Serif</div>`,
      code: `h1 {\n  font-family: 'Inter', sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n}`
    },
    {
      name: "Text Align, Transform, Decoration, Indent & Shadow",
      cat: "Tèks & Typography",
      desc: "Aliyman, gwo lèt/ti lèt, soulajman ak lonbraj sou tèks yo.",
      analogy: "💡 Ranje tèks sou yon paj feyè, soulaye mo enpòtan yo, epi mete lonbraj dèyè yo.",
      schema: `<div style="text-align:center; text-transform:uppercase; text-decoration:underline; font-size:12px;">Tèks Santre, Souliyen</div>`,
      code: `.title {\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: underline;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* ⬛ Nwa transparan (#000000) */\n}`
    },
    {
      name: "Espas Tèks (line-height, letter-spacing, word-spacing)",
      cat: "Tèks & Typography",
      desc: "Regle espas ki ant liy yo, ant lèt yo, ak ant mo yo.",
      analogy: "💡 Espas ou kite ant liy sou yon kaye pou ekriti a ka pi fasil pou li.",
      schema: `<div style="line-height:1.6; letter-spacing:1px; font-size:12px;">Espas sou liy (1.6) ak ant lèt (1px)</div>`,
      code: `p {\n  line-height: 1.6;\n  letter-spacing: 0.5px;\n  word-spacing: 2px;\n}`
    },
    {
      name: "Formatay Tèks (white-space, word-break, overflow-wrap, direction, text-overflow, hyphenation)",
      cat: "Tèks & Typography",
      desc: "Regle kijan tèks la dwe ranmase sou li menm lè l rive nan bout bwat la (3 pwen... lè l twò long).",
      analogy: "💡 Deside si yon mo ki twò long dwe kase an de oswa mete '...' nan bout li.",
      schema: `<div style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap; background:#e2e8f0; padding:4px; font-size:10px;">Tèks_ki_twò_long_ap_fè_3_pwen...</div>`,
      code: `.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}`
    },

    /* ========================================= */
    /* 4. BOX MODEL & DIMANSYON                  */
    /* ========================================= */
    {
      name: "Width, Height, Min/Max Limits",
      cat: "Box Model & Dimansyon",
      desc: "Regle lajè ak wotè yon eleman ak limit li pa dwe depase.",
      analogy: "💡 Kadre yon foto ak yon limit gwosè pou l pa janm depase fond feyè a.",
      schema: `<div style="max-width:100%; min-height:30px; background:#e2e8f0; padding:4px; font-size:12px;">Max-width: 100% | Min-height: 30px</div>`,
      code: `.container {\n  width: 100%;\n  max-width: 1200px;\n  min-height: 400px;\n}`
    },
    {
      name: "Padding & Margin (top, right, bottom, left)",
      cat: "Box Model & Dimansyon",
      desc: "Espas anndan bwat la (padding) ak espas deyò bwat la (margin).",
      analogy: "💡 Padding se koton ki anndan bwat la; Margin se distans ou kite ant bwat sa a ak lòt bwat bò kote l.",
      schema: `<div style="background:#cbd5e1; padding:8px;"><div style="background:#ffffff; padding:6px; font-size:11px;">Padding anndan / Margin deyò</div></div>`,
      code: `.card {\n  margin: 16px;\n  padding: 20px 15px;\n}`
    },
    {
      name: "Border (width, style, color, radius) & Outline",
      cat: "Box Model & Dimansyon",
      desc: "Kadre/Liy ki tounen bwat la ak fòm kwen li yo.",
      analogy: "💡 Desine yon kadre ak yon kreyon toutotou bwat la epi rounded kwen yo.",
      schema: `<div style="border:2px solid #3b82f6; border-radius:8px; padding:6px; font-size:12px;">Border solid #3b82f6</div>`,
      code: `.box {\n  border: 1px solid #cbd5e1; /* 🩶 Gris klè (#cbd5e1) */\n  border-radius: 8px;\n  outline: 2px solid transparent;\n}`
    },
    {
      name: "box-sizing & box-shadow",
      cat: "Box Model & Dimansyon",
      desc: "Fòse padding antre nan lajè total la (border-box) epi mete lonbraj anba bwat la.",
      analogy: "💡 Yon bwat ki kenbe dimansyon deyò l kèlkeswa sa w mete anndan l, epi ki gen yon lonbraj anba l.",
      schema: `<div style="box-shadow:0 4px 6px -1px rgba(0,0,0,0.1); padding:8px; background:#ffffff; font-size:12px;">Bwat #ffffff ak Box-Shadow</div>`,
      code: `* {\n  box-sizing: border-box;\n}\n.card {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* ⬛ Nwa transparan (#000000) */\n}`
    },

    /* ========================================= */
    /* 5. LAYOUT (FLEXBOX & GRID)                */
    /* ========================================= */
    {
      name: "display (block, inline, inline-block, flex, grid, none, table, contents)",
      cat: "Layout (Flexbox/Grid)",
      desc: "Defini ki jan yon eleman dwe konpòte l sou paj la (si l pran tout liy lan oswa si l rete kòt a kòt).",
      analogy: "💡 Deside si yon bwat ap pran tout lajè yon tab oswa si l ap chita bò kote yon lòt.",
      schema: `<div style="display:inline-block; background:#bfdbfe; padding:4px; font-size:12px;">Inline-Block</div>`,
      code: `.btn {\n  display: inline-block;\n}\n.hidden {\n  display: none;\n}`
    },
    {
      name: "Flexbox (direction, wrap, flow, justify, align, gap, order, grow, shrink, basis, align-self, place-content)",
      cat: "Layout (Flexbox/Grid)",
      desc: "Sistèm pou aliyen eleman sou yon sèl aks (orizontal oswa vertikal) byen fasil.",
      analogy: "💡 Ranranje moun sou yon sèl liy kòt a kòt epi ajiste espas ant yo.",
      schema: `<div style="display:flex; justify-content:space-between; gap:8px; background:#f1f5f9; padding:6px;"><span style="background:#60a5fa; color:#ffffff; padding:2px 6px;">1</span><span style="background:#60a5fa; color:#ffffff; padding:2px 6px;">2</span></div>`,
      code: `.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}`
    },
    {
      name: "Grid (template-columns/rows, areas, column/row, gap, place-items, auto-flow, subgrid, masonry)",
      cat: "Layout (Flexbox/Grid)",
      desc: "Sistèm konplè pou ranje eleman yo an 2 dimansyon (liy ak kolon tankou yon tablo ak subgrid).",
      analogy: "💡 Yon chodyè kare-kare pou mete ti bwat nan kolon ak liy byen kwadre.",
      schema: `<div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;"><div style="background:#cbd5e1; padding:4px;">Col 1</div><div style="background:#cbd5e1; padding:4px;">Col 2</div></div>`,
      code: `.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}`
    },

    /* ========================================= */
    /* 6. POSITION & OVERFLOW                    */
    /* ========================================= */
    {
      name: "position (static, relative, absolute, fixed, sticky, top, right, bottom, left, inset)",
      cat: "Position & Overflow",
      desc: "Plase eleman kote w vle sou paj la oswa kole l nan yon ti kwen.",
      analogy: "💡 Kole yon stikè presi sou yon foto (absolute) oswa kole yon nòt sou vit machin lan pou l pa janm deplase (fixed).",
      schema: `<div style="position:relative; background:#e2e8f0; height:35px;"><span style="position:absolute; right:5px; top:5px; background:#ff0000; color:#ffffff; padding:2px 4px; font-size:10px;">Absolute #ff0000</span></div>`,
      code: `.parent {\n  position: relative;\n}\n.badge {\n  position: absolute;\n  inset: 10px 10px auto auto;\n}`
    },
    {
      name: "z-index",
      cat: "Position & Overflow",
      desc: "Kontwole ki eleman ki dwe parèt anlè yon lòt lè yo piled sou lòt.",
      analogy: "💡 Yon pil kajak: sa ki gen z-index ki pi wo a se li ki sou tèt la.",
      schema: `<div style="background:#1e293b; color:#ffffff; padding:4px; font-size:12px;">z-index: 999 (#ffffff sou #1e293b)</div>`,
      code: `.modal {\n  position: fixed;\n  z-index: 9999;\n}`
    },
    {
      name: "overflow (overflow-x, overflow-y, visible, hidden, scroll, auto, clip)",
      cat: "Position & Overflow",
      desc: "Kontwole sa k rive lè kontni an pi gwo pase bwat ki kenbe l la.",
      analogy: "💡 Yon bwat ki twò piti pou rad ou: ou dwe swa koupe rad la (hidden) oswa mete yon asansè pou rale yo (scroll).",
      schema: `<div style="height:30px; overflow:hidden; background:#fef08a; padding:4px; font-size:10px;">Gwo tèks ki koupe paske overflow se hidden...</div>`,
      code: `.scroll-box {\n  max-height: 200px;\n  overflow-y: auto;\n}`
    },

    /* ========================================= */
    /* 7. SANTE VIZYÈL, TRANSFORM & ANIMASYON   */
    /* ========================================= */
    {
      name: "transform (translate, rotate, scale, skew, matrix, transform-origin, perspective)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Deplase, tounen, agrandi oswa deformation sou yon eleman sou paj la.",
      analogy: "💡 Vire yon foto ak dwèt ou sou yon telefòn oswa zoom sou li.",
      schema: `<div style="transform:rotate(-3deg); background:#fca5a5; padding:4px; font-size:11px; display:inline-block;">Rotate(-3deg)</div>`,
      code: `.card:hover {\n  transform: translateY(-5px) scale(1.02);\n}`
    },
    {
      name: "transition (property, duration, delay, timing-function, ease, linear...)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Fè yon chanjman fèt dousman nan yon ti tan fikse ant de eta.",
      analogy: "💡 Yon pòt k ap louvri dousman nan 0.3 segonn olye li ouvri sou kou.",
      schema: `<button style="transition:all 0.3s ease; background:#10b981; color:#ffffff; border:none; padding:4px 8px;">Transition 0.3s (#10b981)</button>`,
      code: `.btn {\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}`
    },
    {
      name: "animation, @keyframes & view-transitions",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Kreye animasyon konplèks ki gen plizyè etap san bezwen JavaScript.",
      analogy: "💡 Yon fim desine kote w desine chak imaj anndan yon seri etap ki gen pousantaj (0% rive 100%).",
      schema: `<div style="background:#a7f3d0; padding:4px; font-size:12px;">Animasyon @keyframes</div>`,
      code: `@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n.loader {\n  animation: spin 1s linear infinite;\n}`
    },
    {
      name: "Filters & Backdrop-Filter (blur, brightness, contrast, drop-shadow, grayscale, invert, sepia, saturate, hue-rotate)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Efè vizyèl foto sou eleman yo oswa sou fond ki dèyè yo (vit flou / Glassmorphism).",
      analogy: "💡 Filtè Instagram ou mete sou yon foto anvan w publiye l.",
      schema: `<div style="backdrop-filter:blur(5px); background:rgba(255,255,255,0.3); padding:4px; font-size:11px;">Glassmorphism Blur</div>`,
      code: `img.bw {\n  filter: grayscale(100%);\n}\n.glass {\n  backdrop-filter: blur(10px);\n}`
    },
    {
      name: "Media Elements (object-fit, object-position, aspect-ratio)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Kontwole kijan imaj ak videyo antre nan bwat yo san yo pa fòse oswa rale deformation.",
      analogy: "💡 Rantre yon gwo foto nan yon ti kadre san w pa krase oswa rale fòm moun ki sou foto a.",
      schema: `<div style="aspect-ratio:16/9; background:#94a3b8; color:#ffffff; text-align:center; line-height:30px; font-size:11px;">16 / 9 Aspect Ratio</div>`,
      code: `img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  aspect-ratio: 16 / 9;\n}`
    },
    {
      name: "Sèvis Siplemantè (cursor, visibility, list-style, table formatting)",
      cat: "Sante VizyÈl, Transform & Animasyon",
      desc: "Regle flèch sourit la (pointer, grab...), afichaj lis yo ak tab yo.",
      analogy: "💡 Kwen sourit la ki tounen yon ti men lè w pase sou yon bouton ki ka klike.",
      schema: `<div style="cursor:pointer; background:#e2e8f0; padding:4px; font-size:11px;">Cursor: pointer</div>`,
      code: `button {\n  cursor: pointer;\n}\nul {\n  list-style: none;\n}\ntable {\n  border-collapse: collapse;\n}`
    },

    /* ========================================= */
    /* 8. INITE, FONKSYON & VARYAB               */
    /* ========================================= */
    {
      name: "Varyab CSS (--color, var(), attr(), env())",
      cat: "Inite, Fonksyon & Varyab",
      desc: "Stoke yon valè (tankou yon koulè) yon sèl fwa epi itilize l plizyè kote sou paj la.",
      analogy: "💡 Ekri yon nimewo telefòn sou yon bout papye pou tout moun ka sèvi avèk li san yo pa aprann li pa kè.",
      schema: `<div style="background:#3b82f6; color:#ffffff; padding:6px; font-size:11px;">var(--main-bg)</div>`,
      code: `:root {\n  --primary-color: #3b82f6; /* 🟦 Ble (#3b82f6) */\n}\n.btn {\n  background-color: var(--primary-color);\n}`
    },
    {
      name: "Fonksyon Kalkil & Matematik (calc, min, max, clamp, round, mod, rem, sin, cos, atan)",
      cat: "Inite, Fonksyon & Varyab",
      desc: "Fè opòvasyon matematik ak deklanchman trigonometri dirèkteman anndan CSS.",
      analogy: "💡 Yon règ ki kalkile 100% lajè paj la epi li retire 20px sou li otomatikman.",
      schema: `<div style="width:calc(100% - 20px); background:#fef08a; padding:4px; font-size:11px;">calc(100% - 20px)</div>`,
      code: `.container {\n  width: calc(100% - 40px);\n  font-size: clamp(1rem, 2.5vw, 2rem);\n}`
    },
    {
      name: "Inite CSS (px, %, em, rem, vw, vh, fr, ch, vmin, vmax, cqw, cqh, dvh, svh)",
      cat: "Inite, Fonksyon & Varyab",
      desc: "Inite mezi pou atiye gwosè sou paj la (ak nouvo inite pou mobil tankou dvh ak container query cqw).",
      analogy: "💡 Sèvi ak santimèt fiks sou yon feyè oswa sèvi ak pousantaj dapre gwosè feyè a.",
      schema: `<div style="font-size:1.2rem; background:#cbd5e1; padding:4px;">Gwosè an REM (Responsive)</div>`,
      code: `body {\n  font-size: 16px;\n}\nh1 {\n  font-size: 2rem;\n}\n.hero {\n  height: 100dvh;\n}`
    },

    /* ========================================= */
    /* 9. RESPONSIVE & @RULES                    */
    /* ========================================= */
    {
      name: "@media Queries & @container Queries",
      cat: "Responsive & @Rules",
      desc: "Aplike style dapre gwosè ekran an OSOA dapre gwosè bwat kote eleman an chita a (@container).",
      analogy: "💡 Yon rad ki chanje fòm pa sèlman dapre si l sou yon timoun men tou dapre gwosè bwat kote l chita a.",
      schema: `<div style="background:#fed7aa; padding:6px; font-size:11px;">@container (min-width: 300px)</div>`,
      code: `@container (min-width: 400px) {\n  .card {\n    display: flex;\n  }\n}`
    },
    {
      name: "@import, @font-face, @layer, @supports & Common Values (inherit, initial, unset, revert, auto, none, !important)",
      cat: "Responsive & @Rules",
      desc: "Kaskad kòd avanse, jesyon priyorite kaskad (@layer), ak verifikasyon si navigatè a ka li yon kòd (@supports).",
      analogy: "💡 Izole règ yo nan diferan kouch pou gen kontwòl san w pa bezwen ekri !important toupatou.",
      schema: `<div style="color:#ff0000 !important; font-size:11px;">Valè fòse ak !important (#ff0000)</div>`,
      code: `@layer base, components;\n@supports (display: grid) {\n  .main { display: grid; }\n}`
    },

    /* ========================================= */
    /* 10. SCROLL, CLIP & INTERACTIVITY          */
    /* ========================================= */
    {
      name: "Scroll Control (scroll-behavior, scroll-snap-type, scroll-snap-align, scroll-padding, scrollbar-width, scrollbar-color)",
      cat: "Scroll, Clip & Interactivity",
      desc: "Kontwole fason yon paj kòlte (smooth scroll), fè eleman yo snap nan mitan, ak re-desine liy scroll la.",
      analogy: "💡 Yon sistèm asansè ki stop egzakteman anfas pòt la epi k ap desann byen dousman.",
      schema: `<div style="background:#cbd5e1; padding:4px; font-size:11px;">scroll-behavior: smooth</div>`,
      code: `html {\n  scroll-behavior: smooth;\n}\n.carousel {\n  scroll-snap-type: x mandatory;\n}`
    },
    {
      name: "Clipping, Masks & Shapes (clip-path, mask-image, shape-outside)",
      cat: "Scroll, Clip & Interactivity",
      desc: "Decoupe bwat ak imaj sou nenpòt fòm géometrik (sèk, zwal, dyaman...).",
      analogy: "💡 Pran yon sizo pou w koupe yon moso foto an fòm zetwal.",
      schema: `<div style="clip-path:polygon(50% 0%, 0% 100%, 100% 100%); background:#ef4444; width:30px; height:30px;"></div>`,
      code: `.avatar {\n  clip-path: circle(50% at 50% 50%);\n}`
    },
    {
      name: "Interactivity (pointer-events, user-select, touch-action, accent-color, color-scheme, caret-color)",
      cat: "Scroll, Clip & Interactivity",
      desc: "Gere si moun ka klike sou eleman an, seleksyone tèks la, oswa chanje koulè ti baton k ap flache a (caret).",
      analogy: "💡 Yon vè ki anpeche dwèt ou touche sa k anndan an (pointer-events: none).",
      schema: `<div style="user-select:none; background:#e2e8f0; padding:4px; font-size:11px;">Tèks sa a pa ka kopye (user-select: none)</div>`,
      code: `.overlay {\n  pointer-events: none;\n}\ninput[type="checkbox"] {\n  accent-color: #3b82f6; /* 🟦 Ble (#3b82f6) */\n}`
    }
  ]
},


js: {
  categories: [
    "Tout",
    "Basic",
    "Varyab & Tip",
    "Operatè",
    "Strings",
    "Numbers",
    "Conditions",
    "Loops",
    "Functions",
    "Arrays",
    "Objects",
    "Date",
    "DOM Manipulation",
    "Evènman",
    "BOM & APIs",
    "Classes & OOP",
    "Modules & Import/Export",
    "JSON & Storage",
    "Asynchrone & Promises",
    "Fetch API & Network",
    "Error Handling",
    "Regex",
    "Set & Map",
    "Web & File API",
    "Konsept Avanse",
    "Best Practices"
  ],
  items: [
    /* ========================================= */
    /* 1. BASIC                                  */
    /* ========================================= */
    {
      name: "console.log()",
      cat: "Basic",
      desc: "Afiche yon mesaj oswa valè nan konsòl navigatè a pou w ka kontwole ak debug kòd ou.",
      analogy: "💡 Yon kayenòt sekrè devlopè a kote l ap ekri sa k ap pase dèyè rido a.",
      schema: `<div style="background:#1e293b; color:#38bdf8; padding:6px; font-family:monospace;">Console ➔ "Bonjou Pèp!"</div>`,
      code: `console.log("Bonjou devlopè!");`
    },
    {
      name: "alert()",
      cat: "Basic",
      desc: "Ouvri yon ti bwat pop-up ak yon mesaj epi bloke paj la jiskaske moun peze OK.",
      analogy: "💡 Yon siflèt polisye ki kanpe tout bagay pou di w yon mesaj anvan w kontinye.",
      schema: `<div style="background:#fef08a; border:1px solid #eab308; padding:6px;">[ Pop-up Alert: Ok ]</div>`,
      code: `alert("Atansyon! Modpas ou a pa kòrèk.");`
    },
    {
      name: "prompt()",
      cat: "Basic",
      desc: "Ouvri yon bwat pop-up ki mande itilizatè a pou l antre yon done ak klavye l.",
      analogy: "💡 Yon gadyen nan pòt ki mande w non w anvan w antre anndan an.",
      schema: `<div style="background:#e0e7ff; padding:6px;">[ Entrez votre nom: ______ ] [OK]</div>`,
      code: `const non = prompt("Kijan ou rele?");`
    },
    {
      name: "confirm()",
      cat: "Basic",
      desc: "Ouvri yon bwat pop-up ak bouton OK/Annuler ki retounen true oswa false.",
      analogy: "💡 Mande yon moun: 'Èske w sèten w vle sote?' epi w ap tann li di Wi oswa Non.",
      schema: `<div style="background:#fed7aa; padding:6px;">[ Wi (true) | Non (false) ]</div>`,
      code: `const repons = confirm("Èske w vle efase kont sa a?");`
    },
    {
      name: '"use strict"',
      cat: "Basic",
      desc: "Aktive mòd sevè nan JS pou l bliye move abitid epi voye erè lè kòd la pa pwòp.",
      analogy: "💡 Yon pwofesè sever ki pa kite okenn erè gramè pase nan yon devwa.",
      schema: `<div style="background:#fecdd3; padding:6px;">Strict Mode: Active</div>`,
      code: `"use strict";\nx = 10; // Ap voye erè paske x pa gen let/const`
    },

    /* ========================================= */
    /* 2. VARIABLES                              */
    /* ========================================= */
    {
      name: "let",
      cat: "Varyab & Tip",
      desc: "Deklare yon varyab ki ka chanje valè l pita anndan yon blòk kòd.",
      analogy: "💡 Yon bwat sou ki w ka mete yon etikèt epi chanje sa ki anndan l lè w vle.",
      schema: `<div style="background:#dcfce7; padding:6px;">let laj = 18 ➔ laj = 19 (Otorize)</div>`,
      code: `let laj = 18;\nlaj = 19;`
    },
    {
      name: "const",
      cat: "Varyab & Tip",
      desc: "Deklare yon konstant ki PA KA chanje valè l apre w fin ba li l premye fwa a.",
      analogy: "💡 Yon bwat kwense ak sipè-glou: sa w mete anndan l la rete la pou tout tan.",
      schema: `<div style="background:#fee2e2; padding:6px;">const PI = 3.14 ➔ PI = 5 (Erè!)</div>`,
      code: `const PI = 3.14159;`
    },
    {
      name: "var",
      cat: "Varyab & Tip",
      desc: "Ansyen fason pou deklare varyab. Li gen fonksyon-scope epi li ka kreye ti bug.",
      analogy: "💡 Yon ansyen tip bwat ki ka louvri toupatou nan kay la san w pa rann kont.",
      schema: `<div style="background:#fef3c7; padding:6px;">var x = 10 (Obsolèt)</div>`,
      code: `var non = "Wilguentz";`
    },

    /* ========================================= */
    /* 3. DATA TYPES                             */
    /* ========================================= */
    {
      name: "String",
      cat: "Varyab & Tip",
      desc: "Tip done ki reprezante yon tèks (ant guillemets).",
      analogy: "💡 Yon chenn lèt ak mo ki koud ansanm.",
      schema: `<div style="background:#f0fdf4; padding:6px;">"Bonjou"</div>`,
      code: `let nom = "Wilguentz";`
    },
    {
      name: "Number",
      cat: "Varyab & Tip",
      desc: "Tip done ki reprezante chif antye oswa chif ak virgul.",
      analogy: "💡 Yon valè chif tankou laj oswa pri yon atik.",
      schema: `<div style="background:#f0fdf4; padding:6px;">250.50</div>`,
      code: `let pri = 250.50;`
    },
    {
      name: "Boolean",
      cat: "Varyab & Tip",
      desc: "Tip done ki gen sèlman de valè: true (vrai) oswa false (faux).",
      analogy: "💡 Yon entèriptè limyè: swa li limen, swa li mefè.",
      schema: `<div style="background:#f0fdf4; padding:6px;">true | false</div>`,
      code: `let genAkse = true;`
    },
    {
      name: "Null",
      cat: "Varyab & Tip",
      desc: "Represente yon valè ki vid anba entansyon devlopè a.",
      analogy: "💡 Yon bwat vid ke w mete sou yon etajè epi w ekri 'Pa gen anyen' sou li.",
      schema: `<div style="background:#f1f5f9; padding:6px;">null</div>`,
      code: `let done = null;`
    },
    {
      name: "Undefined",
      cat: "Varyab & Tip",
      desc: "Represente yon varyab ki kreye men ki poko resevwa okenn valè.",
      analogy: "💡 Yon bwat vid ke w poko janm ba li anyen pou l kenbe.",
      schema: `<div style="background:#f1f5f9; padding:6px;">undefined</div>`,
      code: `let rezilta;`
    },
    {
      name: "BigInt",
      cat: "Varyab & Tip",
      desc: "Tip done pou stokaj gwo nonb antye ki depase limit Number nòmal la.",
      analogy: "💡 Yon gwo kamyon pou pote gwo chaj chif ke yon ti machin pa ka pote.",
      schema: `<div style="background:#f0fdf4; padding:6px;">9007199254740991n</div>`,
      code: `const gwoChif = 9007199254740991n;`
    },
    {
      name: "Symbol",
      cat: "Varyab & Tip",
      desc: "Kreye yon idantifyan inik ki pa ka gen doub nan tout kòd la.",
      analogy: "💡 Yon anprent dwèt inik ki pa gen de menm kalite nan tout monn lan.",
      schema: `<div style="background:#f0fdf4; padding:6px;">Symbol('id')</div>`,
      code: `const id = Symbol('id_inik');`
    },
    {
      name: "Object",
      cat: "Varyab & Tip",
      desc: "Estrikti ki pèmèt ou konbine plizyè done ak kle/valè ansanm.",
      analogy: "💡 Yon kat idantite ki gen non, laj, ak adrès yon moun.",
      schema: `<div style="background:#f0fdf4; padding:6px;">{ non: "Mwen", laj: 20 }</div>`,
      code: `const moun = { non: "Wilguentz", laj: 20 };`
    },

    /* ========================================= */
    /* 4. OPERATORS                              */
    /* ========================================= */
    {
      name: "Aritmetik (+, -, *, /, %, **)",
      cat: "Operatè",
      desc: "Kalkil de baz: adisyon, soustraksyon, miltiplikasyon, divizyon, modilo (reste), ak pwuisans.",
      analogy: "💡 Yon ti kalkilatris klasik nan men w.",
      schema: `<div style="background:#e0f2fe; padding:6px;">10 % 3 = 1 (Reste)</div>`,
      code: `let x = 10 % 3;\nlet katab = 2 ** 3; // 8`
    },
    {
      name: "AfeSpace (=, +=, -=, *=, /=)",
      cat: "Operatè",
      desc: "Bay yon varyab yon valè oswa kòmbinen yon opòvasyon anmèmtan.",
      analogy: "💡 Ajoute ti pyès nan yon mouchwa ak kòb san w pa bezwen rekonte tout depi nan kòmansman.",
      schema: `<div style="background:#e0f2fe; padding:6px;">x += 5 (Menm jan ak x = x + 5)</div>`,
      code: `let sol = 100;\nsol += 50; // 150`
    },
    {
      name: "Konparasyon (==, ===, !=, !==, >, <, >=, <=)",
      cat: "Operatè",
      desc: "Konpare valè ak tip yo pou wè si yo egal, diferan, pi gwo oswa pi piti.",
      analogy: "💡 Yon balans ki peze de bagay pou l di w kilès ki pi lou oswa si yo egal.",
      schema: `<div style="background:#e0f2fe; padding:6px;">5 === "5" ➔ false (Tip diferan)</div>`,
      code: `if (a === b) { /* kòd */ }`
    },
    {
      name: "Lojik (&&, ||, !)",
      cat: "Operatè",
      desc: "Opòvatè AND (ak), OR (oswa), ak NOT (siy kontrè).",
      analogy: "💡 Mande si yon moun gen kat AK liy fòm (&&) pou l ka antre.",
      schema: `<div style="background:#e0f2fe; padding:6px;">true && false ➔ false</div>`,
      code: `if (kondisyon1 && kondisyon2) { /* kòd */ }`
    },
    {
      name: "Nullish Coalescing (??)",
      cat: "Operatè",
      desc: "Retounen valè ki sou men dwat la SÈLMAN si sa ki sou men gòch la se null oswa undefined.",
      analogy: "💡 Yon solisyon sekou si premye chwa a pa egziste menm.",
      schema: `<div style="background:#e0f2fe; padding:6px;">null ?? "Valè Par Defo"</div>`,
      code: `let non = nomRantre ?? "Anonyme";`
    },
    {
      name: "Operatè Tènè (?:)",
      cat: "Operatè",
      desc: "Yon fason rapid ak kout pou w ekri yon if...else sou yon sèl liy.",
      analogy: "💡 Yon fouchèt nan wout: si se afèmatif ale adwat, sinon ale agòch.",
      schema: `<div style="background:#e0f2fe; padding:6px;">kondisyon ? 'Wi' : 'Non'</div>`,
      code: `const mo = laj >= 18 ? "Majè" : "Minè";`
    },

    /* ========================================= */
    /* 5. STRINGS                                */
    /* ========================================= */
    {
      name: "length (String)",
      cat: "Strings",
      desc: "Bay kantite karaktè ak espas ki anndan yon tèks.",
      analogy: "💡 Konte konbyen lèt ki gen nan yon mo ak dwèt ou.",
      schema: `<div style="background:#fdfe21; padding:6px;">"Ayiti".length ➔ 5</div>`,
      code: `let longè = "Bonjou".length; // 6`
    },
    {
      name: "toUpperCase() / toLowerCase()",
      cat: "Strings",
      desc: "Chanje tout tèks la an gwo lèt (MAJUSCULE) oswa an ti lèt (minuscule).",
      analogy: "💡 Peze yon bouton pou tout mo yo pase an gwo karaktè.",
      schema: `<div style="background:#fdfe21; padding:6px;">"hi" ➔ "HI"</div>`,
      code: `"akèy".toUpperCase(); // "AKÈY"`
    },
    {
      name: "trim()",
      cat: "Strings",
      desc: "Retire tout espas ki an twòp nan kòmansman ak nan bout yon tèks.",
      analogy: "💡 Netwaye de kwen yon papye anvan w ranje l.",
      schema: `<div style="background:#fdfe21; padding:6px;">"  mo  ".trim() ➔ "mo"</div>`,
      code: `let pwòp = "   test   ".trim();`
    },
    {
      name: "slice(start, end) / substring()",
      cat: "Strings",
      desc: "Koupe yon moso nan yon tèks dapre pozisyon lèt yo.",
      analogy: "💡 Pran yon sizo pou w koupe yon moso nan yon riban.",
      schema: `<div style="background:#fdfe21; padding:6px;">"JavaScript".slice(0, 4) ➔ "Java"</div>`,
      code: `"JavaScript".slice(0, 4);`
    },
    {
      name: "replace() / replaceAll()",
      cat: "Strings",
      desc: "Ranplase yon mo oswa tout mo ki menm jan an pa yon lòt mo anndan yon tèks.",
      analogy: "💡 Efase yon mo sou yon tablo epi ekri yon lòt nan plas li.",
      schema: `<div style="background:#fdfe21; padding:6px;">"A B".replace("A", "C") ➔ "C B"</div>`,
      code: `"Chat ak Chat".replaceAll("Chat", "Chyen");`
    },
    {
      name: "includes() / startsWith() / endsWith()",
      cat: "Strings",
      desc: "Tcheke si yon tèks gen yon mo anndan l, si l kòmanse oswa si l fini avèk li.",
      analogy: "💡 Tcheke si yon bwat gen yon non ekri sou li.",
      schema: `<div style="background:#fdfe21; padding:6px;">"Bonjou".startsWith("Bon") ➔ true</div>`,
      code: `"Kòd JS".includes("JS"); // true`
    },
    {
      name: "split(separator)",
      cat: "Strings",
      desc: "Koupe yon tèks epi konvèti l an yon lis (Array) eleman.",
      analogy: "💡 Koupe yon pen an plizyè moso tranch.",
      schema: `<div style="background:#fdfe21; padding:6px;">"A,B".split(",") ➔ ["A", "B"]</div>`,
      code: `let moYo = "pòm,fig,zoranj".split(",");`
    },
    {
      name: "repeat() / charAt() / indexOf() / lastIndexOf()",
      cat: "Strings",
      desc: "Repete yon tèks, jwenn lèt nan yon pozisyon, oswa chèche nan ki endèks yon lèt chita.",
      analogy: "💡 Chèche paj egzak kote yon mo chita nan yon diksyonè.",
      schema: `<div style="background:#fdfe21; padding:6px;">"A".repeat(3) ➔ "AAA"</div>`,
      code: `"JS".charAt(0); // "J"`
    },

    /* ========================================= */
    /* 6. NUMBERS                                */
    /* ========================================= */
    {
      name: "parseInt() / parseFloat() / Number()",
      cat: "Numbers",
      desc: "Kovèti yon tèks (String) an yon nonb antye, yon nonb ak virgul, oswa an tip Number.",
      analogy: "💡 Traduci yon chif ki ekri sou papye an yon chif reyèl sou yon kalkilatris.",
      schema: `<div style="background:#ecfdf5; padding:6px;">parseInt("10") ➔ 10</div>`,
      code: `let chif = parseInt("42");`
    },
    {
      name: "isNaN()",
      cat: "Numbers",
      desc: "Tcheke si yon valè PA yon chif (Is Not a Number).",
      analogy: "💡 Mande si sa k nan bwat la se pa yon pyès kòb.",
      schema: `<div style="background:#ecfdf5; padding:6px;">isNaN("ABC") ➔ true</div>`,
      code: `isNaN("mwen"); // true`
    },
    {
      name: "Math (random, floor, ceil, round, max, min, abs, pow, sqrt)",
      cat: "Numbers",
      desc: "Bibliyotèk kalkil matematik avanse (chwa pa azar, arondi, gwo/ti chif, rasin karé).",
      analogy: "💡 Yon bwat zouti konplè yon enjenyè pou fè gwo fizik ak kalkil.",
      schema: `<div style="background:#ecfdf5; padding:6px;">Math.floor(4.9) ➔ 4</div>`,
      code: `let azar = Math.floor(Math.random() * 10);`
    },

    /* ========================================= */
    /* 7. CONDITIONS                             */
    /* ========================================= */
    {
      name: "if / else / else if",
      cat: "Conditions",
      desc: "Fè kòd la pran diferan desizyon dapre kondisyon ki vre oswa ki fo.",
      analogy: "💡 Si l fè lapli pran yon parapli, sinon mache konsa.",
      schema: `<div style="background:#fff7ed; padding:6px;">if (kondisyon) { ... } else { ... }</div>`,
      code: `if (laj >= 18) {\n  console.log("Aksè otorize");\n} else {\n  console.log("Refize");\n}`
    },
    {
      name: "switch",
      cat: "Conditions",
      desc: "Pèmèt ou verifye plizyè ka diferan pou yon sèl valè san w pa ekri anpil else if.",
      analogy: "💡 Yon meni restoran kote chak chwa gen yon plat diferan anfas li.",
      schema: `<div style="background:#fff7ed; padding:6px;">switch(ka) { case 'A': ... }</div>`,
      code: `switch(jou) {\n  case "Lendi": console.log("Travay"); break;\n  default: console.log("Repo");\n}`
    },

    /* ========================================= */
    /* 8. LOOPS                                  */
    /* ========================================= */
    {
      name: "for / while / do while",
      cat: "Loops",
      desc: "Repete yon menm blòk kòd plizyè fwa tanzantan kondisyon an vre.",
      analogy: "💡 Yon kourè k ap fè tou yon teren 10 fwa anvan l rann kont li fini.",
      schema: `<div style="background:#f0f9ff; padding:6px;">for (let i=0; i<5; i++)</div>`,
      code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`
    },
    {
      name: "for...of / for...in",
      cat: "Loops",
      desc: "Boukle fasilman sou eleman yon tablo (for...of) oswa sou kle yon objè (for...in).",
      analogy: "💡 Mache pran chak fwi anndan yon panyen youn apre lòt.",
      schema: `<div style="background:#f0f9ff; padding:6px;">for (let item of list)</div>`,
      code: `for (let fwi of ["Pòm", "Fig"]) {\n  console.log(fwi);\n}`
    },
    {
      name: "break / continue",
      cat: "Loops",
      desc: "Stoppe yon boukl nèt (break) oswa sote yon etap pou w al nan pwochen an (continue).",
      analogy: "💡 Break se stope ras la nèt; Continue se sote yon kout obstak epi kontinye kouri.",
      schema: `<div style="background:#f0f9ff; padding:6px;">break (Sòti) | continue (Sote)</div>`,
      code: `for (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}`
    },
    {
      name: "function / return",
      cat: "Functions",
      desc: "Kòmand ki deklare yon blòk kòd ki ka riitilize, epi 'return' voye rezilta a tounen.",
      analogy: "💡 Yon resèt kwizinn ou ka itilize chak fwa w vle koute menm plat la.",
      schema: `<div style="background:#f0fdf4; padding:6px;">function non() { return rezilta; }</div>`,
      code: `function adisyon(a, b) {\n  return a + b;\n}`
    },
    {
      name: "Arrow Function (=>)",
      cat: "Functions",
      desc: "Yon fason pi kout ak pi modèn pou ekri yon fonksyon nan JavaScript.",
      analogy: "💡 Yon fòm abreje rapid pou ekri yon komand san w pa bezwen ekri mo 'function' an.",
      schema: `<div style="background:#f0fdf4; padding:6px;">const f = (a, b) => a + b;</div>`,
      code: `const miltipliye = (a, b) => a * b;`
    },
    {
      name: "Default Parameters / Rest (...) / Spread (...)",
      cat: "Functions",
      desc: "Mete valè pa defo nan paramèt, oswa regwoupe/mande plizyè argiman anndan yon sèl lis.",
      analogy: "💡 Yon sak san limit kote w ka rantre tout ti bagay ki retay yo nan yon sèl kote.",
      schema: `<div style="background:#f0fdf4; padding:6px;">function f(a = 10, ...reste)</div>`,
      code: `function adisyonTout(...nonb) {\n  return nonb.reduce((a, b) => a + b, 0);\n}`
    },
    {
      name: "Callback / Recursive Function",
      cat: "Functions",
      desc: "Fonksyon ki pase anndan yon lòt fonksyon kòm paramèt (Callback), oswa fonksyon ki rele tèt li (Recursive).",
      analogy: "💡 Yon ti moun k ap louvri yon seri bwat ki gen menm kalite ti bwat anndan l jiskaske li jwenn sa l ap chèche a.",
      schema: `<div style="background:#f0fdf4; padding:6px;">Recursive: fn() ➔ fn() ➔ Fini</div>`,
      code: `function faktoryèl(n) {\n  if (n <= 1) return 1;\n  return n * faktoryèl(n - 1);\n}`
    },

    /* ========================================= */
    /* 10. ARRAYS                                */
    /* ========================================= */
    {
      name: "push() / pop() / shift() / unshift()",
      cat: "Arrays",
      desc: "Ajoute oswa retire eleman nan bout (push/pop) oswa nan kòmansman (unshift/shift) yon tablo.",
      analogy: "💡 Yon pile assièt: w ka mete oswa wete yon assièt sou tèt li oswa anba l.",
      schema: `<div style="background:#eff6ff; padding:6px;">[1, 2].push(3) ➔ [1, 2, 3]</div>`,
      code: `let fwi = ["Pòm"];\nfwi.push("Mabouya"); // Ajoute nan bout\nfwi.pop(); // Retire nan bout`
    },
    {
      name: "splice() / slice()",
      cat: "Arrays",
      desc: "Modifye oswa koupe yon moso nan yon tablo ak endèks li yo.",
      analogy: "💡 Koupe yon moso gâteau pou w pran l san w pa kraze rès gâteau a.",
      schema: `<div style="background:#eff6ff; padding:6px;">arr.slice(1, 3) ➔ Pran endèks 1 ak 2</div>`,
      code: `let moso = [10, 20, 30, 40].slice(1, 3);`
    },
    {
      name: "map() / filter() / reduce()",
      cat: "Arrays",
      desc: "Twa gwo metòd pou transfòme eleman, filtre yo dapre yon kondisyon, oswa reyalize yon sèl valè total.",
      analogy: "💡 Yon paswa ki seleksyone sèlman bon fwi yo (filter) epi ki fè ji ak yo (reduce).",
      schema: `<div style="background:#eff6ff; padding:6px;">[1, 2].map(x => x * 2) ➔ [2, 4]</div>`,
      code: `let doub = [1, 2, 3].map(n => n * 2);\nlet gwo = [10, 5, 20].filter(n => n > 8);`
    },
    {
      name: "find() / findIndex() / includes() / indexOf()",
      cat: "Arrays",
      desc: "Chèche yon eleman oswa pozisyon l anndan yon tablo.",
      analogy: "💡 Regarde nan yon rejis pou wè nan ki paj non yon moun chita.",
      schema: `<div style="background:#eff6ff; padding:6px;">[10, 20].find(n => n > 15) ➔ 20</div>`,
      code: `let jwenn = [5, 12, 8].find(x => x > 10);`
    },
    {
      name: "forEach() / flat() / flatMap() / join() / sort()",
      cat: "Arrays",
      desc: "Traverse chak eleman, aplati gwo tablo ki kouvri anndan lòt, triye yo oswa moute yo kòm yon tèks.",
      analogy: "💡 Ranje tout liv sou yon etajè pa lòd alfabetik.",
      schema: `<div style="background:#eff6ff; padding:6px;">["A", "B"].join("-") ➔ "A-B"</div>`,
      code: `[1, 2, 3].forEach(n => console.log(n));\n["b", "a"].sort();`
    },

    /* ========================================= */
    /* 11. OBJECTS                               */
    /* ========================================= */
    {
      name: "{} / property / method / this",
      cat: "Objects",
      desc: "Kreye yon objè ak pwopriyete (done) ak metòd (fonksyon), kote 'this' reprezante objè sa a kounye a.",
      analogy: "💡 Yon machin ki gen koulè (pwopriyete) epi ki ka kouri (metòd).",
      schema: `<div style="background:#fef3c7; padding:6px;">{ non: "JS", aji() { ... } }</div>`,
      code: `const machin = {\n  mak: "Toyota",\n  demare() { console.log(this.mak + " ap kouri"); }\n};`
    },
    {
      name: "Object.keys() / Object.values() / Object.entries()",
      cat: "Objects",
      desc: "Rale tout kle yo, tout valè yo, oswa tout pè kle/valè yon objè anndan yon tablo.",
      analogy: "💡 Lis tout non moun nan yon liv dirèktwa san w pa bezwen li tout paj yo.",
      schema: `<div style="background:#fef3c7; padding:6px;">Object.keys({a: 1}) ➔ ["a"]</div>`,
      code: `const obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj));`
    },
    {
      name: "Destructuring / Spread (...)",
      cat: "Objects",
      desc: "Rale done nan yon objè fasilman oswa kopye yon objè nan yon lòt.",
      analogy: "💡 Rale dirèkteman kat idantite anndan yon bwat san w pa deplase rès bagay yo.",
      schema: `<div style="background:#fef3c7; padding:6px;">const { non } = moun;</div>`,
      code: `const moun = { non: "Wilguentz", laj: 20 };\nconst { non, laj } = moun;`
    },

    /* ========================================= */
    /* 12. DATE                                  */
    /* ========================================= */
    {
      name: "Date() / getFullYear() / getMonth() / getDate()",
      cat: "Date",
      desc: "Jesyon dat ak lè ak metòd pou rale ane, mwa, ak jou presi.",
      analogy: "💡 Yon kalandriye ak yon mont dijital ki ba w dat ak lè an tan reyèl.",
      schema: `<div style="background:#f1f5f9; padding:6px;">new Date().getFullYear() ➔ 2026</div>`,
      code: `const jodia = new Date();\nconsole.log(jodia.getFullYear());`
    },

    /* ========================================= */
    /* 13. DOM MANIPULATION                      */
    /* ========================================= */
    {
      name: "document / window / body / head",
      cat: "DOM Manipulation",
      desc: "Gwo objè prensipal ki reprezante tout paj HTML la (document) oswa fenèt navigatè a (window).",
      analogy: "💡 Yon kay konplè (window) ak tout chanm ki anndan l yo (document).",
      schema: `<div style="background:#e0f2fe; padding:6px;">window ➔ document ➔ body</div>`,
      code: `document.body.style.backgroundColor = "black";`
    },
    {
      name: "getElementById() / querySelectorAll()",
      cat: "DOM Manipulation",
      desc: "Rale yon eleman pa ID l oswa jwenn yon lis tout eleman ki gen yon menm selektè CSS.",
      analogy: "💡 Rele yon moun presi nan nom l ak yon megrafon.",
      schema: `<div style="background:#e0f2fe; padding:6px;">document.querySelectorAll("p")</div>`,
      code: `const tit = document.getElementById("main-title");\nconst paras = document.querySelectorAll(".text");`
    },
    {
      name: "createElement() / appendChild() / remove()",
      cat: "DOM Manipulation",
      desc: "Kreye yon nouvo eleman HTML, ajoute l nan paj la, oswa efase l nèt.",
      analogy: "💡 Fabriker yon nouvo tablo epi kwoke l sou yon miray nan kay la.",
      schema: `<div style="background:#e0f2fe; padding:6px;">[Kreye p] ➔ [Ajoute nan div]</div>`,
      code: `const p = document.createElement("p");\np.textContent = "Nouvo tèks";\ndocument.body.appendChild(p);`
    },
    {
      name: "innerHTML / textContent / value / classList / style",
      cat: "DOM Manipulation",
      desc: "Chanje kontni HTML, tèks brwit, valè yon input, klas CSS oswa style yon eleman.",
      analogy: "💡 Repenn yon miray oswa chanje rad ki sou yon manken.",
      schema: `<div style="background:#e0f2fe; padding:6px;">el.classList.add("active")</div>`,
      code: `const box = document.querySelector(".box");\nbox.textContent = "Koucou!";\nbox.classList.add("highlight");`
    },

    /* ========================================= */
    /* 14. EVENTS                                */
    /* ========================================= */
    {
      name: "onclick / mouseover / keydown / submit / change / input",
      cat: "Evènman",
      desc: "Evènman ki deklannche lè itilizatè a klike, pase sourit, peze yon tou klavye, oswa voye yon fòmilè.",
      analogy: "💡 Bouton sonèt yon kay ki sonnen lè yon moun peze dwèt li sou li.",
      schema: `<div style="background:#fef08a; padding:6px;">[Click] ➔ Deklannche Fonksyon</div>`,
      code: `const input = document.querySelector("input");\ninput.addEventListener("input", (e) => {\n  console.log(e.target.value);\n});`
    },
    {
      name: "preventDefault() / stopPropagation()",
      cat: "Evènman",
      desc: "Anpeche yon eleman fè aksyon pa defo l (tankou recharger paj la lè fòmilè voye), oswa kanpe evènman an pou l pa moute pi wo.",
      analogy: "💡 Kanpe yon tren sou ray li anvan l rive nan dènye stasyon an.",
      schema: `<div style="background:#fef08a; padding:6px;">e.preventDefault() (Anpeche Reload)</div>`,
      code: `document.querySelector("form").addEventListener("submit", (e) => {\n  e.preventDefault();\n});`
    },
    {
      name: "setTimeout() / setInterval() / clearTimeout() / clearInterval()",
      cat: "BOM & APIs",
      desc: "Execute yon kòd apre yon tan presi (setTimeout) oswa repete l chak x milisegonn (setInterval).",
      analogy: "💡 Yon minitram oswa yon revèy alam ki sonnen chak maten.",
      schema: `<div style="background:#e0f2fe; padding:6px;">setTimeout(fn, 1000) ➔ 1s Attente</div>`,
      code: `const timer = setTimeout(() => {\n  console.log("1 dezyèm pase!");\n}, 1000);\n\n// Pou analize/anpeche li:\nclearTimeout(timer);`
    },
    {
      name: "location / history / navigator",
      cat: "BOM & APIs",
      desc: "Objè nan navigatè a pou wè URL la, fè bak/anvan nan istorik la, oswa wè enfòmasyon sou aparèy itilizatè a.",
      analogy: "💡 Yon konpa ak yon radyo ki di w kote w ye ak ki aparèy w ap itilize.",
      schema: `<div style="background:#e0f2fe; padding:6px;">window.location.href = "https://google.com"</div>`,
      code: `// Redirije itilizatè a\nwindow.location.href = "https://example.com";\n\n// Wè si moun nan sou mobil\nconsole.log(navigator.userAgent);`
    },

    /* ========================================= */
    /* 16. CLASSES & OOP                        */
    /* ========================================= */
    {
      name: "class / constructor / extends / super",
      cat: "Classes & OOP",
      desc: "Pèmèt ou kreye yon modèl (moul) pou fabriker objè ak pwopriyete ak metòd, epi fè eritaj (extends).",
      analogy: "💡 Yon plan achitèk: ou ka sèvi ak menm plan an pou kreye plizyè kay ki sanble.",
      schema: `<div style="background:#fef3c7; padding:6px;">class Kay ➔ extends ➔ class Vila</div>`,
      code: `class Moun {\n  constructor(non) {\n    this.non = non;\n  }\n  salye() {\n    console.log("Bonjou " + this.non);\n  }\n}\n\nconst wil = new Moun("Wilguentz");\nwil.salye();`
    },

    /* ========================================= */
    /* 17. MODULES & IMPORT/EXPORT              */
    /* ========================================= */
    {
      name: "export / import / export default",
      cat: "Modules & Import/Export",
      desc: "Pèmèt ou dekonpoze kòd ou an plizyè fichye .js epi pataje fonksyon oswa varyab antre yo.",
      analogy: "💡 Separe yon liv an plizyè chapit pou l pi fasil pou li ak pou ranje.",
      schema: `<div style="background:#f0fdf4; padding:6px;">export const x = 10 ➔ import { x } from './file.js'</div>`,
      code: `// nan fichye math.js:\nexport const adisyon = (a, b) => a + b;\n\n// nan fichye main.js:\nimport { adisyon } from './math.js';`
    },

    /* ========================================= */
    /* 18. JSON & STORAGE                       */
    /* ========================================= */
    {
      name: "JSON.stringify() / JSON.parse()",
      cat: "JSON & Storage",
      desc: "Konvèti yon objè JS an tèks JSON (stringify) pou voye l sou yon sèvè, oswa konvèti tèks JSON an objè (parse).",
      analogy: "💡 Pliye yon rad nan yon bwat pou voye l pa lapòs (stringify) epi depliye l lè l rive (parse).",
      schema: `<div style="background:#f1f5f9; padding:6px;">Objè JS ⇄ [JSON String]</div>`,
      code: `const moun = { non: "Wilguentz", laj: 20 };\nconst json = JSON.stringify(moun);\nconst obj = JSON.parse(json);`
    },
    {
      name: "localStorage / sessionStorage",
      cat: "JSON & Storage",
      desc: "Mete done an kachèt nan navigatè itilizatè a pou yo pa efase menm si l fèmen paj la (localStorage).",
      analogy: "💡 Yon ti bwat sekrè nan founisè kote w mete yon kle pou w ka jwenn li lè w retounen.",
      schema: `<div style="background:#f1f5f9; padding:6px;">localStorage.setItem('kle', 'valè')</div>`,
      code: `// Sove yon done:\nlocalStorage.setItem("user", "Wilguentz");\n\n// Rale done a:\nconst nom = localStorage.getItem("user");`
    },

    /* ========================================= */
    /* 19. ASYNCHRONE & PROMISES                 */
    /* ========================================= */
    {
      name: "Promise (resolve, reject, .then(), .catch(), .finally())",
      cat: "Asynchrone & Promises",
      desc: "Represente yon operasyon ki pran tan pou l fini (yon promès ki ka reyalize oswa echwe).",
      analogy: "💡 Yon kòmand nan yon restoran: ou peye, yo ba w yon tikè (promise), epi w ap tann plat la pare.",
      schema: `<div style="background:#fee2e2; padding:6px;">Promise ➔ Pending ➔ Resolved (then) | Rejected (catch)</div>`,
      code: `const promes = new Promise((resolve, reject) => {\n  let siksè = true;\n  if (siksè) resolve("Li mache!");\n  else reject("Gen yon erè!");\n});\n\npromes\n  .then(res => console.log(res))\n  .catch(err => console.log(err));`
    },

    /* ========================================= */
    /* 20. FETCH API & NETWORK                  */
    /* ========================================= */
    {
      name: "fetch() / response.json()",
      cat: "Fetch API & Network",
      desc: "Voye yon rekèt sou yon sèvè oswa yon API pou rale oswa voye done nan fòma JSON.",
      analogy: "💡 Voye yon faktè al chèche yon lèt nan yon lòt vil epi pote l tounen ba ou.",
      schema: `<div style="background:#dcfce7; padding:6px;">fetch(url) ➔ Response ➔ .json() ➔ Data</div>`,
      code: `fetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));`
    },
    {
      name: "async / await",
      cat: "Asynchrone & Promises",
      desc: "Fason modèn ak pwòp pou ekri kòd ki asenkron (Promises) pou l sanble ak yon kòd ki senkron.",
      analogy: "💡 Mande yon moun: 'Mete men w la, tann mwen pote bagay la, epi n ap kontinye ansanm'.",
      schema: `<div style="background:#dcfce7; padding:6px;">async function ➔ const res = await fetch(...)</div>`,
      code: `async function getDone() {\n  try {\n    const res = await fetch("https://api.example.com/data");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.log("Erè:", err);\n  }\n}\ngetDone();`
    },
    {
      name: "try / catch / finally / throw",
      cat: "Error Handling",
      desc: "Gere erè nan kòd la pou aplikasyon an pa bloke nèt lè gen yon pwoblèm.",
      analogy: "💡 Yon filet sekirite anba yon moun k ap danse sou yon kòd: si l tonbe (try), filet a kenbe l (catch).",
      schema: `<div style="background:#fecdd3; padding:6px;">try { ... } catch (err) { ... }</div>`,
      code: `try {\n  let x = y + 1; // y pa ekziste\n} catch (erè) {\n  console.log("Erè jwenn:", erè.message);\n} finally {\n  console.log("Sa ap toujou ekzekite");\n}`
    },

    /* ========================================= */
    /* 23. REGEX (EXPRESSIONS RÉGULIÈRES)        */
    /* ========================================= */
    {
      name: "RegExp / test() / match()",
      cat: "Regex",
      desc: "Chèche modèl tèks espesifik (tankou verifye si yon imel kòrèk oswa si yon modpas gen chif).",
      analogy: "💡 Yon filtè ki verifye si yon moun gen menm fòm ak modèl kat idantite ki mande a.",
      schema: `<div style="background:#fef3c7; padding:6px;">/^[a-z]+$/.test("bonjou") ➔ true</div>`,
      code: `const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconsole.log(emailRegex.test("test@gmail.com")); // true`
    },

    /* ========================================= */
    /* 24. SET & MAP                             */
    /* ========================================= */
    {
      name: "Set / Map / WeakSet / WeakMap",
      cat: "Set & Map",
      desc: "Estrikti done pou stokaj: Set pa aksepte okenn eleman an doub; Map stoke done ak nenpòt ki tip kle.",
      analogy: "💡 Set se yon sak fwi kote w pa ka mete de menm pòm; Map se yon diksyonè pèsonalize.",
      schema: `<div style="background:#e0f2fe; padding:6px;">new Set([1, 1, 2]) ➔ Set {1, 2}</div>`,
      code: `const unique = new Set([1, 2, 2, 3]); // {1, 2, 3}\n\nconst map = new Map();\nmap.set("non", "Wilguentz");`
    },

    /* ========================================= */
    /* 25. ITERATORS & GENERATORS                */
    /* ========================================= */
    {
      name: "Generator (function*) / yield",
      cat: "Iterators",
      desc: "Fonksyon espesyal ki ka poze (pause) nan mitan ekzekisyon l epi retounen yon valè ak 'yield'.",
      analogy: "💡 Yon liv kote w mete yon makè paj pou w ka kontinye li l pita egzakteman kote w te rete a.",
      schema: `<div style="background:#f0fdf4; padding:6px;">function* ➔ yield 1 ➔ yield 2</div>`,
      code: `function* generator() {\n  yield "Etape 1";\n  yield "Etape 2";\n}\nconst gen = generator();\nconsole.log(gen.next().value); // "Etape 1"`
    },

    /* ========================================= */
    /* 26 & 28. WEB & FILE APIS                  */
    /* ========================================= */
    {
      name: "FileReader / FormData / Blob",
      cat: "Web & File API",
      desc: "Manipule ak li fichye itilizatè a chwazi sou aparèy li (foto, dokiman) oswa prepare yon fòmilè pou voye sou sèvè.",
      analogy: "💡 Yon skanè ki li yon dokiman papye pou konvèti l an imaj sou òdinatè w.",
      schema: `<div style="background:#dcfce7; padding:6px;">FileReader ➔ [ Li Fichye ] ➔ Data URL</div>`,
      code: `const reader = new FileReader();\nreader.onload = (e) => console.log(e.target.result);\n// reader.readAsDataURL(file);`
    },

    /* ========================================= */
    /* 30. KONSEPT AVANSE                        */
    /* ========================================= */
    {
      name: "Closure",
      cat: "Konsept Avanse",
      desc: "Yon fonksyon ki sonje epi ki kenbe aksè ak varyab ki te nan mwayen an kote l te kreye a, menm si mwayen sa a fini.",
      analogy: "💡 Yon ti moun ki kite kay paran l men ki toujou pote yon ti bwat ki gen kle kay la nan pòch li.",
      schema: `<div style="background:#fef08a; padding:6px;">Fonksyon Anndan ➔ Aksè anpil ak Fonksyon Deyò</div>`,
      code: `function deyo() {\n  let sekret = "1234";\n  return function anndan() {\n    console.log(sekret);\n  };\n}\nconst wè = deyo();\nwè(); // 1234`
    },
    {
      name: "Hoisting & Scope",
      cat: "Konsept Avanse",
      desc: "Hoisting se lè JS monte deklarasyon varyab ak fonksyon yo anwo nan kòd la anvan l ekzekite l.",
      analogy: "💡 Yon asansè ki monte tout deklarasyon enpòtan yo nan tèt paj la anvan tout bagay kòmanse.",
      schema: `<div style="background:#fef08a; padding:6px;">Hoisting: Deklarasyon ➔ Monte anwo</div>`,
      code: `console.log(x); // undefined (paske 'var x' monte anwo)\nvar x = 5;`
    },
    {
      name: "Prototype & Prototype Chain",
      cat: "Konsept Avanse",
      desc: "Mekanism kote tout objè nan JS erite pwopriyete ak metòd soti nan yon lòt objè mèt.",
      analogy: "💡 Lwa ADN: ou gen ti karaktè oswa fòm je ki soti dirèkteman nan paran w ak grann ou.",
      schema: `<div style="background:#fef08a; padding:6px;">Objè ➔ Prototype ➔ Object.prototype</div>`,
      code: `Array.prototype.tiSalidite = function() {\n  console.log("Mwen se yon tablo!");\n};`
    },
    {
      name: "Event Loop / Call Stack / Microtask Queue",
      cat: "Konsept Avanse",
      desc: "Motè anndan JS ki jere ki kòd k ap ekzekite kounye a ak ki kòd k ap tann nan fil la (Asynchrone).",
      analogy: "💡 Yon dirijè sikilasyon ki di ki machin k dwe pase an premye ak ki moun ki dwe tann sou kote.",
      schema: `<div style="background:#fef08a; padding:6px;">Call Stack ➔ Event Loop ➔ Task Queue</div>`,
      code: `console.log("1");\nsetTimeout(() => console.log("2"), 0);\nconsole.log("3");\n// Rezilta: 1, 3, 2`
    },
    {
      name: "Debouncing & Throttling",
      cat: "Konsept Avanse",
      desc: "Teknik pou kontwole ak diminye konbyen fwa yon fonksyon ka deklannche lè itilizatè a ap tape oswa scroll gwo vitès.",
      analogy: "💡 Debouncing se tankou tann yon moun fin pale nèt anvan w reponn li; Throttling se tankou pale yon fwa chak 5 minit.",
      schema: `<div style="background:#fef08a; padding:6px;">[Aksyon Anpil] ➔ [Kontwole Ekzekisyon]</div>`,
      code: `// Debounce limite deklanchman repetitif rapid`
    },

    /* ========================================= */
    /* 31 & 32. BEST PRACTICES & MODÈN FEATURES  */
    /* ========================================= */
    {
      name: "Optional Chaining (?.)",
      cat: "Best Practices",
      desc: "Lije pwopriyete yon objè san l pa voye gwo erè si yon pati anndan l pa ekziste (null oswa undefined).",
      analogy: "💡 Frape dousman nan yon pòt anvan w ouvri l pou w wè si gen moun anndan an.",
      schema: `<div style="background:#dcfce7; padding:6px;">user?.profile?.non</div>`,
      code: `const moun = {};\nconsole.log(moun?.adrès?.ri); // undefined (pa gen plant/erè)`
    },
    {
      name: "Clean Code & Modular Programming",
      cat: "Best Practices",
      desc: "Ekri yon kòd ki senp, ki klè, ki byen òganize an ti moso (modil) epi ki gen bon nom pou varyab yo.",
      analogy: "💡 Ranje tout zouti nan yon bwat zouti kote chak zouti gen plas li ak etikèt li.",
      schema: `<div style="background:#dcfce7; padding:6px;">Clean Code ➔ Fasil pou li, fasil pou korije</div>`,
      code: `// Bon non varyab minik:\nconst kantiteItilizatè = 50;`
    }


  ]
}}

let curentLang = 'html';
let currentCategory = 'Tout';

// Lè paj la chaje
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderDictionary();
});

// Chanje Langaj (HTML / CSS / JS)
function switchTab(lang) {
  currentLang = lang;
  currentCategory = 'Tout';
  
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }
  
  document.getElementById('searchInput').placeholder = `Chèche sèlman nan sekisyon ${lang.toUpperCase()} la...`;
  document.getElementById('searchInput').value = '';

  renderCategories();
  renderDictionary();
}

// Afiche Sub-kategori yo
function renderCategories() {
  const container = document.getElementById('subCategories');
  container.innerHTML = '';

  dictionaryData[currentLang].categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `sub-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.innerText = cat;
    btn.onclick = () => filterCategory(cat, btn);
    container.appendChild(btn);
  });
}

// Filtre pa Sub-kategori
function filterCategory(cat, btnElement) {
  currentCategory = cat;
  document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
  renderDictionary();
}

// Afiche Kat yo
function renderDictionary(filterText = "") {
  const grid = document.getElementById('dictionaryGrid');
  grid.innerHTML = '';

  const items = dictionaryData[currentLang].items.filter(item => {
    const matchCat = (currentCategory === 'Tout' || item.cat === currentCategory);
    const matchSearch = item.name.toLowerCase().includes(filterText.toLowerCase()) || 
                        item.desc.toLowerCase().includes(filterText.toLowerCase());
    return matchCat && matchSearch;
  });

  if(items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Pa gen okenn rezilta pou rechèch sa a nan ${currentLang.toUpperCase()}.</p>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${escapeHtml(item.name)}</h3>
      <p>${item.desc}</p>
    `;
    card.onclick = () => openModal(item);
    grid.appendChild(card);
  });
}

// Rechèch ki adaptab
function searchDictionary() {
  const text = document.getElementById('searchInput').value;
  renderDictionary(text);
}

// Ouvè Modal ak Detay
function openModal(item) {
  document.getElementById('modalTitle').innerText = item.name;
  document.getElementById('modalAnalogy').innerHTML = item.analogy;
  document.getElementById('modalSchema').innerHTML = item.schema;
  document.getElementById('modalCode').innerText = item.code;
  document.getElementById('detailModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
