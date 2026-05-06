/**
 * Pre-seeded translations for instant first load.
 * Keys are the widget's localStorage keys (jss-{lang}).
 * Values mirror the widget's cache format: { "original text": "translation" }.
 *
 * On first visit these are merged into localStorage before the widget
 * initialises, so the widget finds cache hits immediately and skips all
 * API calls for the seeded strings.
 *
 * To expand: translate the site, open DevTools → Application → Local Storage,
 * copy the jss-en / jss-de / jss-ar values and paste them here.
 */
export const TRANSLATION_SEEDS: Record<string, Record<string, string>> = {
	"jss-en": {
		"Om os": "About us",
		Behandlinger: "Treatments",
		Galleri: "Gallery",
		Kontakt: "Contact",
		"DK/EN": "DK/EN",
		"Book nu": "Book now",
		"I hjertet af Kolding": "In the heart of Kolding",
		Frisør: "Hairdresser",
		'<h1 class="hero-module-scss-module__o9l5Aa__title"><span class="hero-module-scss-module__o9l5Aa__titleBlue">Frisør</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">Kosmetolog</span> i ét</h1>':
			'<h1 class="hero-module-scss-module__o9l5Aa__title"><span class="hero-module-scss-module__o9l5Aa__titleBlue">Hairdresser</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">Beautician</span> in one</h1>',
		"Vi skaber gode oplevelser til både mænd og kvinder.":
			"We create great experiences for both men and women.",
		"Se vores behandlinger": "See our treatments",
	},

	"jss-de": {
		"Om os": "Über uns",
		Behandlinger: "Behandlungen",
		Galleri: "Galerie",
		Kontakt: "Kontakt",
		"Book nu": "Buchen Sie jetzt",
		"DK/EN": "DK/DE",
		"I hjertet af Kolding": "Im Herzen von Kolding",
		"Vi skaber gode oplevelser til både mænd og kvinder.":
			"Wir schaffen gute Erlebnisse für sowohl Männer als auch Frauen.",
		"Se vores behandlinger": "Se unsere Behandlungen",
		حلاق: "Friseur",
		"حلاق/مصفف شعر": "Friseur/Friseurin",
		'<h1 class="hero-module-scss-module__o9l5Aa__title" data-translated-lang="ar" data-original-text="&lt;h1 class=&quot;hero-module-scss-module__o9l5Aa__title&quot;&gt;&lt;span class=&quot;hero-module-scss-module__o9l5Aa__titleBlue&quot;&gt;Frisør&lt;/span&gt; &amp;amp;&lt;!-- --&gt; &lt;span class=&quot;hero-module-scss-module__o9l5Aa__titlePink&quot;&gt;Kosmetolog&lt;/span&gt; i ét&lt;/h1&gt;"><span class="hero-module-scss-module__o9l5Aa__titleBlue">حلاق/مصفف شعر</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">أخصائية تجميل</span> في واحد</h1>':
			'<h1 class="hero-module-scss-module__o9l5Aa__title"><span class="hero-module-scss-module__o9l5Aa__titleBlue">Friseur</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">Kosmetologe</span> in einem</h1>',
		'<h1 class="hero-module-scss-module__o9l5Aa__title" data-translated-lang="ar" data-original-text="&lt;h1 class=&quot;hero-module-scss-module__o9l5Aa__title&quot;&gt;&lt;span class=&quot;hero-module-scss-module__o9l5Aa__titleBlue&quot;&gt;Frisør&lt;/span&gt; &amp;amp;&lt;!-- --&gt; &lt;span class=&quot;hero-module-scss-module__o9l5Aa__titlePink&quot;&gt;Kosmetolog&lt;/span&gt; i ét&lt;/h1&gt;"><span class="hero-module-scss-module__o9l5Aa__titleBlue">حلاق</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">أخصائية تجميل</span> في واحد</h1>':
			'<h1 class="hero-module-scss-module__o9l5Aa__title"><span class="hero-module-scss-module__o9l5Aa__titleBlue">Friseur</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">Kosmetologin</span> in einem</h1>',
	},

	"jss-ar": {
		"Om os": "عنا",
		Behandlinger: "علاجات",
		Galleri: "غاليري",
		Kontakt: "اتصال",
		"Book nu": "احجز الآن",
		"DK/EN": "DK/AR",
		"I hjertet af Kolding": "في قلب Kolding",
		Hairdresser: "حلاق / مصفف شعر",
		'<h1 class="hero-module-scss-module__o9l5Aa__title" data-translated-lang="en" data-original-text="&lt;h1 class=&quot;hero-module-scss-module__o9l5Aa__title&quot;&gt;&lt;span class=&quot;hero-module-scss-module__o9l5Aa__titleBlue&quot;&gt;Frisør&lt;/span&gt; &amp;amp;&lt;!-- --&gt; &lt;span class=&quot;hero-module-scss-module__o9l5Aa__titlePink&quot;&gt;Kosmetolog&lt;/span&gt; i ét&lt;/h1&gt;"><span class="hero-module-scss-module__o9l5Aa__titleBlue">Hairdresser</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">Beautician</span> in one</h1>':
			'<h1 class="hero-module-scss-module__o9l5Aa__title"><span class="hero-module-scss-module__o9l5Aa__titleBlue">حلاق</span> &amp;<!-- --> <span class="hero-module-scss-module__o9l5Aa__titlePink">أخصائية تجميل</span> في واحد</h1>',
		"Vi skaber gode oplevelser til både mænd og kvinder.":
			"نحن نخلق تجارب جيدة لكل من الرجال والنساء.",
		"Se vores behandlinger": "اطلع على علاجاتنا",
	},
}
