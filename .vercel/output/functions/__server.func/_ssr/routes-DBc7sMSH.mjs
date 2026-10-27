import { i as __toESM } from "../_runtime.mjs";
import { U as isRedirect, b as require_jsx_runtime, q as require_react, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as MessageCircle, c as Coins, i as Moon, l as BookOpen, n as Sun, o as Heart, r as Sparkles, s as Compass } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBc7sMSH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var KURSI = "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ.";
var THREE_QUL = "قُلْ هُوَ اللَّهُ أَحَدٌ … قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ … قُلْ أَعُوذُ بِرَبِّ النَّاسِ. (الإخلاص والمعوّذتان)";
var SAYYID = "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.";
var ADHKAR = {
	صباح: [
		{
			text: KURSI,
			count: 1,
			note: "آية الكرسي"
		},
		{
			text: THREE_QUL,
			count: 3,
			note: "ثلاث مرات"
		},
		{
			text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
			count: 1
		},
		{
			text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
			count: 1
		},
		{
			text: SAYYID,
			count: 1,
			note: "سيّد الاستغفار"
		},
		{
			text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.",
			count: 4
		},
		{
			text: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
			count: 1
		},
		{
			text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ.",
			count: 3
		},
		{
			text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
			count: 7
		},
		{
			text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.",
			count: 1
		},
		{
			text: "اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ.",
			count: 1
		},
		{
			text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
			count: 3
		},
		{
			text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
			count: 3
		},
		{
			text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ.",
			count: 1
		},
		{
			text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَٰذَا الْيَوْمِ: فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.",
			count: 1
		},
		{
			text: "أَصْبَحْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.",
			count: 1
		},
		{
			text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
			count: 100,
			note: "مائة مرة"
		},
		{
			text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
			count: 10
		},
		{
			text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.",
			count: 3
		},
		{
			text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",
			count: 1
		},
		{
			text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",
			count: 100,
			note: "مائة مرة"
		},
		{
			text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ.",
			count: 10
		}
	],
	مساء: [
		{
			text: KURSI,
			count: 1,
			note: "آية الكرسي"
		},
		{
			text: THREE_QUL,
			count: 3,
			note: "ثلاث مرات"
		},
		{
			text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا.",
			count: 1
		},
		{
			text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ.",
			count: 1
		},
		{
			text: SAYYID,
			count: 1,
			note: "سيّد الاستغفار"
		},
		{
			text: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.",
			count: 4
		},
		{
			text: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
			count: 1
		},
		{
			text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ.",
			count: 3
		},
		{
			text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
			count: 7
		},
		{
			text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
			count: 3
		},
		{
			text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
			count: 3
		},
		{
			text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
			count: 3
		},
		{
			text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ.",
			count: 1
		},
		{
			text: "أَمْسَيْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَىٰ مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ.",
			count: 1
		},
		{
			text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
			count: 100,
			note: "مائة مرة"
		},
		{
			text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
			count: 10
		},
		{
			text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ.",
			count: 1
		},
		{
			text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.",
			count: 100,
			note: "مائة مرة"
		},
		{
			text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ.",
			count: 10
		}
	],
	"بعد الصلاة": [
		{
			text: "أَسْتَغْفِرُ اللَّهَ.",
			count: 3
		},
		{
			text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ.",
			count: 1
		},
		{
			text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ.",
			count: 1
		},
		{
			text: KURSI,
			count: 1,
			note: "آية الكرسي"
		},
		{
			text: THREE_QUL,
			count: 1
		},
		{
			text: "سُبْحَانَ اللَّهِ.",
			count: 33
		},
		{
			text: "الْحَمْدُ لِلَّهِ.",
			count: 33
		},
		{
			text: "اللَّهُ أَكْبَرُ.",
			count: 34
		},
		{
			text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
			count: 1
		}
	]
};
var DUAS = [
	{
		title: "من القرآن",
		items: [
			{
				name: "ربنا آتنا",
				text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ."
			},
			{
				name: "ربنا لا تزغ قلوبنا",
				text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ."
			},
			{
				name: "رب اشرح لي صدري",
				text: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي."
			},
			{
				name: "ربنا اغفر لنا",
				text: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ."
			}
		]
	},
	{
		title: "نبوية",
		items: [
			{
				name: "اللهم إني أسألك الهدى",
				text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى، وَالْعَفَافَ وَالْغِنَى."
			},
			{
				name: "يا مقلب القلوب",
				text: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ."
			},
			{
				name: "اللهم إني أعوذ بك",
				text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ."
			},
			{
				name: "اللهم اغفر لي",
				text: "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي."
			}
		]
	},
	{
		title: "حاجة وهمّ",
		items: [
			{
				name: "دعاء الكرب",
				text: "لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ."
			},
			{
				name: "عند الهم",
				text: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَٰهَ إِلَّا أَنْتَ."
			},
			{
				name: "تيسير الأمر",
				text: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا."
			}
		]
	},
	{
		title: "سفر وطعام",
		items: [
			{
				name: "دعاء السفر",
				text: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ. اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَٰذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى."
			},
			{
				name: "دخول المنزل",
				text: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا."
			},
			{
				name: "قبل الطعام",
				text: "بِسْمِ اللَّهِ. فإن نسي: بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ."
			},
			{
				name: "بعد الطعام",
				text: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ."
			}
		]
	}
];
var SURAHS = [
	{
		n: 1,
		name: "الفاتحة",
		ayahs: 7,
		place: "مكية"
	},
	{
		n: 2,
		name: "البقرة",
		ayahs: 286,
		place: "مدنية"
	},
	{
		n: 3,
		name: "آل عمران",
		ayahs: 200,
		place: "مدنية"
	},
	{
		n: 4,
		name: "النساء",
		ayahs: 176,
		place: "مدنية"
	},
	{
		n: 5,
		name: "المائدة",
		ayahs: 120,
		place: "مدنية"
	},
	{
		n: 6,
		name: "الأنعام",
		ayahs: 165,
		place: "مكية"
	},
	{
		n: 7,
		name: "الأعراف",
		ayahs: 206,
		place: "مكية"
	},
	{
		n: 8,
		name: "الأنفال",
		ayahs: 75,
		place: "مدنية"
	},
	{
		n: 9,
		name: "التوبة",
		ayahs: 129,
		place: "مدنية"
	},
	{
		n: 10,
		name: "يونس",
		ayahs: 109,
		place: "مكية"
	},
	{
		n: 11,
		name: "هود",
		ayahs: 123,
		place: "مكية"
	},
	{
		n: 12,
		name: "يوسف",
		ayahs: 111,
		place: "مكية"
	},
	{
		n: 13,
		name: "الرعد",
		ayahs: 43,
		place: "مدنية"
	},
	{
		n: 14,
		name: "إبراهيم",
		ayahs: 52,
		place: "مكية"
	},
	{
		n: 15,
		name: "الحجر",
		ayahs: 99,
		place: "مكية"
	},
	{
		n: 16,
		name: "النحل",
		ayahs: 128,
		place: "مكية"
	},
	{
		n: 17,
		name: "الإسراء",
		ayahs: 111,
		place: "مكية"
	},
	{
		n: 18,
		name: "الكهف",
		ayahs: 110,
		place: "مكية"
	},
	{
		n: 19,
		name: "مريم",
		ayahs: 98,
		place: "مكية"
	},
	{
		n: 20,
		name: "طه",
		ayahs: 135,
		place: "مكية"
	},
	{
		n: 21,
		name: "الأنبياء",
		ayahs: 112,
		place: "مكية"
	},
	{
		n: 22,
		name: "الحج",
		ayahs: 78,
		place: "مدنية"
	},
	{
		n: 23,
		name: "المؤمنون",
		ayahs: 118,
		place: "مكية"
	},
	{
		n: 24,
		name: "النور",
		ayahs: 64,
		place: "مدنية"
	},
	{
		n: 25,
		name: "الفرقان",
		ayahs: 77,
		place: "مكية"
	},
	{
		n: 26,
		name: "الشعراء",
		ayahs: 227,
		place: "مكية"
	},
	{
		n: 27,
		name: "النمل",
		ayahs: 93,
		place: "مكية"
	},
	{
		n: 28,
		name: "القصص",
		ayahs: 88,
		place: "مكية"
	},
	{
		n: 29,
		name: "العنكبوت",
		ayahs: 69,
		place: "مكية"
	},
	{
		n: 30,
		name: "الروم",
		ayahs: 60,
		place: "مكية"
	},
	{
		n: 31,
		name: "لقمان",
		ayahs: 34,
		place: "مكية"
	},
	{
		n: 32,
		name: "السجدة",
		ayahs: 30,
		place: "مكية"
	},
	{
		n: 33,
		name: "الأحزاب",
		ayahs: 73,
		place: "مدنية"
	},
	{
		n: 34,
		name: "سبأ",
		ayahs: 54,
		place: "مكية"
	},
	{
		n: 35,
		name: "فاطر",
		ayahs: 45,
		place: "مكية"
	},
	{
		n: 36,
		name: "يس",
		ayahs: 83,
		place: "مكية"
	},
	{
		n: 37,
		name: "الصافات",
		ayahs: 182,
		place: "مكية"
	},
	{
		n: 38,
		name: "ص",
		ayahs: 88,
		place: "مكية"
	},
	{
		n: 39,
		name: "الزمر",
		ayahs: 75,
		place: "مكية"
	},
	{
		n: 40,
		name: "غافر",
		ayahs: 85,
		place: "مكية"
	},
	{
		n: 41,
		name: "فصلت",
		ayahs: 54,
		place: "مكية"
	},
	{
		n: 42,
		name: "الشورى",
		ayahs: 53,
		place: "مكية"
	},
	{
		n: 43,
		name: "الزخرف",
		ayahs: 89,
		place: "مكية"
	},
	{
		n: 44,
		name: "الدخان",
		ayahs: 59,
		place: "مكية"
	},
	{
		n: 45,
		name: "الجاثية",
		ayahs: 37,
		place: "مكية"
	},
	{
		n: 46,
		name: "الأحقاف",
		ayahs: 35,
		place: "مكية"
	},
	{
		n: 47,
		name: "محمد",
		ayahs: 38,
		place: "مدنية"
	},
	{
		n: 48,
		name: "الفتح",
		ayahs: 29,
		place: "مدنية"
	},
	{
		n: 49,
		name: "الحجرات",
		ayahs: 18,
		place: "مدنية"
	},
	{
		n: 50,
		name: "ق",
		ayahs: 45,
		place: "مكية"
	},
	{
		n: 51,
		name: "الذاريات",
		ayahs: 60,
		place: "مكية"
	},
	{
		n: 52,
		name: "الطور",
		ayahs: 49,
		place: "مكية"
	},
	{
		n: 53,
		name: "النجم",
		ayahs: 62,
		place: "مكية"
	},
	{
		n: 54,
		name: "القمر",
		ayahs: 55,
		place: "مكية"
	},
	{
		n: 55,
		name: "الرحمن",
		ayahs: 78,
		place: "مدنية"
	},
	{
		n: 56,
		name: "الواقعة",
		ayahs: 96,
		place: "مكية"
	},
	{
		n: 57,
		name: "الحديد",
		ayahs: 29,
		place: "مدنية"
	},
	{
		n: 58,
		name: "المجادلة",
		ayahs: 22,
		place: "مدنية"
	},
	{
		n: 59,
		name: "الحشر",
		ayahs: 24,
		place: "مدنية"
	},
	{
		n: 60,
		name: "الممتحنة",
		ayahs: 13,
		place: "مدنية"
	},
	{
		n: 61,
		name: "الصف",
		ayahs: 14,
		place: "مدنية"
	},
	{
		n: 62,
		name: "الجمعة",
		ayahs: 11,
		place: "مدنية"
	},
	{
		n: 63,
		name: "المنافقون",
		ayahs: 11,
		place: "مدنية"
	},
	{
		n: 64,
		name: "التغابن",
		ayahs: 18,
		place: "مدنية"
	},
	{
		n: 65,
		name: "الطلاق",
		ayahs: 12,
		place: "مدنية"
	},
	{
		n: 66,
		name: "التحريم",
		ayahs: 12,
		place: "مدنية"
	},
	{
		n: 67,
		name: "الملك",
		ayahs: 30,
		place: "مكية"
	},
	{
		n: 68,
		name: "القلم",
		ayahs: 52,
		place: "مكية"
	},
	{
		n: 69,
		name: "الحاقة",
		ayahs: 52,
		place: "مكية"
	},
	{
		n: 70,
		name: "المعارج",
		ayahs: 44,
		place: "مكية"
	},
	{
		n: 71,
		name: "نوح",
		ayahs: 28,
		place: "مكية"
	},
	{
		n: 72,
		name: "الجن",
		ayahs: 28,
		place: "مكية"
	},
	{
		n: 73,
		name: "المزمل",
		ayahs: 20,
		place: "مكية"
	},
	{
		n: 74,
		name: "المدثر",
		ayahs: 56,
		place: "مكية"
	},
	{
		n: 75,
		name: "القيامة",
		ayahs: 40,
		place: "مكية"
	},
	{
		n: 76,
		name: "الإنسان",
		ayahs: 31,
		place: "مدنية"
	},
	{
		n: 77,
		name: "المرسلات",
		ayahs: 50,
		place: "مكية"
	},
	{
		n: 78,
		name: "النبأ",
		ayahs: 40,
		place: "مكية"
	},
	{
		n: 79,
		name: "النازعات",
		ayahs: 46,
		place: "مكية"
	},
	{
		n: 80,
		name: "عبس",
		ayahs: 42,
		place: "مكية"
	},
	{
		n: 81,
		name: "التكوير",
		ayahs: 29,
		place: "مكية"
	},
	{
		n: 82,
		name: "الانفطار",
		ayahs: 19,
		place: "مكية"
	},
	{
		n: 83,
		name: "المطففين",
		ayahs: 36,
		place: "مكية"
	},
	{
		n: 84,
		name: "الانشقاق",
		ayahs: 25,
		place: "مكية"
	},
	{
		n: 85,
		name: "البروج",
		ayahs: 22,
		place: "مكية"
	},
	{
		n: 86,
		name: "الطارق",
		ayahs: 17,
		place: "مكية"
	},
	{
		n: 87,
		name: "الأعلى",
		ayahs: 19,
		place: "مكية"
	},
	{
		n: 88,
		name: "الغاشية",
		ayahs: 26,
		place: "مكية"
	},
	{
		n: 89,
		name: "الفجر",
		ayahs: 30,
		place: "مكية"
	},
	{
		n: 90,
		name: "البلد",
		ayahs: 20,
		place: "مكية"
	},
	{
		n: 91,
		name: "الشمس",
		ayahs: 15,
		place: "مكية"
	},
	{
		n: 92,
		name: "الليل",
		ayahs: 21,
		place: "مكية"
	},
	{
		n: 93,
		name: "الضحى",
		ayahs: 11,
		place: "مكية"
	},
	{
		n: 94,
		name: "الشرح",
		ayahs: 8,
		place: "مكية"
	},
	{
		n: 95,
		name: "التين",
		ayahs: 8,
		place: "مكية"
	},
	{
		n: 96,
		name: "العلق",
		ayahs: 19,
		place: "مكية"
	},
	{
		n: 97,
		name: "القدر",
		ayahs: 5,
		place: "مكية"
	},
	{
		n: 98,
		name: "البينة",
		ayahs: 8,
		place: "مدنية"
	},
	{
		n: 99,
		name: "الزلزلة",
		ayahs: 8,
		place: "مدنية"
	},
	{
		n: 100,
		name: "العاديات",
		ayahs: 11,
		place: "مكية"
	},
	{
		n: 101,
		name: "القارعة",
		ayahs: 11,
		place: "مكية"
	},
	{
		n: 102,
		name: "التكاثر",
		ayahs: 8,
		place: "مكية"
	},
	{
		n: 103,
		name: "العصر",
		ayahs: 3,
		place: "مكية"
	},
	{
		n: 104,
		name: "الهمزة",
		ayahs: 9,
		place: "مكية"
	},
	{
		n: 105,
		name: "الفيل",
		ayahs: 5,
		place: "مكية"
	},
	{
		n: 106,
		name: "قريش",
		ayahs: 4,
		place: "مكية"
	},
	{
		n: 107,
		name: "الماعون",
		ayahs: 7,
		place: "مكية"
	},
	{
		n: 108,
		name: "الكوثر",
		ayahs: 3,
		place: "مكية"
	},
	{
		n: 109,
		name: "الكافرون",
		ayahs: 6,
		place: "مكية"
	},
	{
		n: 110,
		name: "النصر",
		ayahs: 3,
		place: "مدنية"
	},
	{
		n: 111,
		name: "المسد",
		ayahs: 5,
		place: "مكية"
	},
	{
		n: 112,
		name: "الإخلاص",
		ayahs: 4,
		place: "مكية"
	},
	{
		n: 113,
		name: "الفلق",
		ayahs: 5,
		place: "مكية"
	},
	{
		n: 114,
		name: "الناس",
		ayahs: 6,
		place: "مكية"
	}
];
/** Approximate juz start surah for the 30 parts (first surah of each juz). */
var JUZ_STARTS = [
	1,
	2,
	2,
	3,
	4,
	4,
	5,
	6,
	7,
	8,
	9,
	11,
	12,
	15,
	17,
	18,
	21,
	23,
	25,
	27,
	29,
	33,
	36,
	39,
	41,
	46,
	51,
	58,
	67,
	78
];
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askDeen = createServerFn({ method: "POST" }).validator((input) => {
	const question = (input?.question ?? "").trim().slice(0, 600);
	if (question.length < 4) throw new Error("اكتب سؤالاً أوضح");
	return { question };
}).handler(createSsrRpc("d66bb39f67be62cced308761ad83d14f36de37b808f18edb61eb978ebac779c8"));
function todayKey() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
function yesterdayKey() {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() - 1);
	return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
var useHameed = create()(persist((set, get) => ({
	tab: "today",
	setTab: (tab) => set({ tab }),
	surah: null,
	openSurah: (n) => set({
		surah: n,
		tab: "quran"
	}),
	closeSurah: () => set({ surah: null }),
	juz: Array(30).fill(false),
	toggleJuz: (i) => set((s) => {
		const juz = s.juz.slice();
		juz[i] = !juz[i];
		return { juz };
	}),
	resetKhatma: () => set({ juz: Array(30).fill(false) }),
	goal: 20,
	setGoal: (goal) => set({ goal }),
	pagesToday: 0,
	lastDay: todayKey(),
	streak: 0,
	addPages: (n) => set((s) => {
		const day = todayKey();
		const base = s.lastDay === day ? s.pagesToday : 0;
		const pagesToday = Math.max(0, base + n);
		let streak = s.streak;
		if (base < s.goal && pagesToday >= s.goal) streak = s.lastDay === yesterdayKey() ? s.streak + 1 : 1;
		return {
			pagesToday,
			lastDay: day,
			streak
		};
	}),
	bookmarks: [],
	toggleBookmark: (n) => set((s) => ({ bookmarks: s.bookmarks.includes(n) ? s.bookmarks.filter((x) => x !== n) : [...s.bookmarks, n] })),
	tasbih: 0,
	bumpTasbih: () => set((s) => ({ tasbih: (s.tasbih + 1) % 100 })),
	resetTasbih: () => set({ tasbih: 0 })
}), {
	name: "hameed-v1",
	partialize: (s) => ({
		juz: s.juz,
		goal: s.goal,
		pagesToday: s.pagesToday,
		lastDay: s.lastDay,
		streak: s.streak,
		bookmarks: s.bookmarks,
		tasbih: s.tasbih
	})
}));
function khatmaPct(juz) {
	const list = juz?.length ? juz : [];
	return Math.round(list.filter(Boolean).length / 30 * 100);
}
function visiblePages(pagesToday, lastDay) {
	const d = /* @__PURE__ */ new Date();
	return lastDay === `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` ? pagesToday : 0;
}
var PRAYERS = [
	["الفجر", "Fajr"],
	["الشروق", "Sunrise"],
	["الظهر", "Dhuhr"],
	["العصر", "Asr"],
	["المغرب", "Maghrib"],
	["العشاء", "Isha"]
];
var KAABA = {
	lat: 21.4225,
	lng: 39.8262
};
function qiblaBearing(lat, lng) {
	const φ = lat * Math.PI / 180;
	const λ = lng * Math.PI / 180;
	const φk = KAABA.lat * Math.PI / 180;
	const λk = KAABA.lng * Math.PI / 180;
	const y = Math.sin(λk - λ);
	const x = Math.cos(φ) * Math.tan(φk) - Math.sin(φ) * Math.cos(λk - λ);
	return Math.atan2(y, x) * 180 / Math.PI;
}
function norm(deg) {
	return (deg % 360 + 360) % 360;
}
function Home() {
	const tab = useHameed((s) => s.tab);
	const setTab = useHameed((s) => s.setTab);
	const surah = useHameed((s) => s.surah);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-screen max-w-lg flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-5 pt-6 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.28em] text-primary",
						children: "بِسْمِ اللَّهِ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl font-semibold",
						children: "حميد"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "ختمة، صلاة، أذكار، أدعية، زكاة"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 px-4 pb-28",
				children: [
					tab === "today" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Today, {}),
					tab === "quran" && (surah ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, { n: surah }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SurahList, {})),
					tab === "khatma" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Khatma, {}),
					tab === "adhkar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Adhkar, {}),
					tab === "duas" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Duas, {}),
					tab === "zakat" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zakat, {}),
					tab === "ask" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ask, {}),
					tab === "qibla" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qibla, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 mx-auto flex max-w-lg gap-1 overflow-x-auto border-t border-border bg-surface/95 px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] backdrop-blur",
				children: [
					[
						"today",
						"اليوم",
						Sun
					],
					[
						"quran",
						"مصحف",
						BookOpen
					],
					[
						"khatma",
						"ختمة",
						Sparkles
					],
					[
						"adhkar",
						"أذكار",
						Moon
					],
					[
						"duas",
						"أدعية",
						Heart
					],
					[
						"zakat",
						"زكاة",
						Coins
					],
					[
						"ask",
						"اسأل",
						MessageCircle
					],
					[
						"qibla",
						"قبلة",
						Compass
					]
				].map(([id, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: "flex min-h-11 min-w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl px-2 text-[11px] " + (tab === id ? "bg-surface-2 text-primary" : "text-muted"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						size: 18,
						strokeWidth: 1.75
					}), label]
				}, id))
			})
		]
	});
}
function Card({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `rounded-2xl border border-border bg-surface p-4 ${className}`,
		children
	});
}
function Today() {
	const juz = useHameed((s) => s.juz);
	const goal = useHameed((s) => s.goal);
	const pagesToday = useHameed((s) => s.pagesToday);
	const lastDay = useHameed((s) => s.lastDay);
	const streak = useHameed((s) => s.streak);
	const addPages = useHameed((s) => s.addPages);
	const openSurah = useHameed((s) => s.openSurah);
	const tasbih = useHameed((s) => s.tasbih);
	const bump = useHameed((s) => s.bumpTasbih);
	const reset = useHameed((s) => s.resetTasbih);
	const pages = visiblePages(pagesToday, lastDay);
	const pct = khatmaPct(juz);
	const next = juz.findIndex((v) => !v);
	const [times, setTimes] = (0, import_react.useState)(null);
	const [place, setPlace] = (0, import_react.useState)("الدمام");
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		const load = (lat, lng, label) => {
			setPlace(label);
			fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=4`).then((r) => r.json()).then((j) => setTimes(j?.data?.timings ?? null)).catch(() => setTimes(null));
		};
		if (navigator.geolocation) navigator.geolocation.getCurrentPosition((p) => load(p.coords.latitude, p.coords.longitude, "موقعك"), () => load(26.4207, 50.0888, "الدمام"), { timeout: 4e3 });
		else load(26.4207, 50.0888, "الدمام");
	}, []);
	const nextPrayer = (0, import_react.useMemo)(() => {
		if (!times) return null;
		const mins = now.getHours() * 60 + now.getMinutes();
		const slots = [];
		for (const [ar, key] of PRAYERS) {
			if (key === "Sunrise") continue;
			const t = (times[key] ?? "00:00").slice(0, 5);
			const [h, m] = t.split(":").map(Number);
			slots.push({
				ar,
				t,
				tomorrow: h * 60 + m <= mins
			});
		}
		const upcoming = slots.find((s) => !s.tomorrow) ?? {
			...slots[0],
			tomorrow: true
		};
		const [h, m] = upcoming.t.split(":").map(Number);
		const at = new Date(now);
		if (upcoming.tomorrow) at.setDate(at.getDate() + 1);
		at.setHours(h, m, 0, 0);
		const left = Math.max(0, Math.floor((at.getTime() - now.getTime()) / 1e3));
		const hh = String(Math.floor(left / 3600)).padStart(2, "0");
		const mm = String(Math.floor(left % 3600 / 60)).padStart(2, "0");
		const ss = String(left % 60).padStart(2, "0");
		return {
			ar: upcoming.ar,
			t: upcoming.t,
			clock: `${hh}:${mm}:${ss}`
		};
	}, [times, now]);
	const hijri = now.toLocaleDateString("ar-SA-u-ca-islamic", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	const greg = now.toLocaleDateString("ar-SA", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-semibold",
				children: hijri
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: greg
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "الختمة"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-4xl font-semibold text-primary",
							children: [pct, "٪"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [juz.filter(Boolean).length, " من 30 جزءاً"]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "سلسلة الأيام"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl",
							children: streak
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 overflow-hidden rounded-full bg-bg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-primary",
						style: { width: `${Math.min(100, pages / goal * 100)}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						"ورد اليوم ",
						pages,
						" / ",
						goal,
						" صفحة",
						next >= 0 ? ` · التالي: الجزء ${next + 1}` : " · أتممت الختمة"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: [
						1,
						4,
						10
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => addPages(n),
						className: "min-h-11 flex-1 rounded-xl bg-surface-2 text-sm",
						children: ["+", n]
					}, n))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "أوقات الصلاة"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [place, " · أم القرى"]
					})]
				}),
				nextPrayer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 rounded-xl bg-bg px-3 py-3 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: ["المتبقي على ", nextPrayer.ar]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-semibold tracking-widest text-primary",
							children: nextPrayer.clock
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: ["عند ", nextPrayer.t]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-3 gap-2",
					children: PRAYERS.filter(([, k]) => k !== "Sunrise").map(([ar, key]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-bg px-2 py-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: ar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg",
							children: times ? times[key]?.slice(0, 5) : "—"
						})]
					}, key))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: bump,
				className: "flex min-h-28 flex-col items-center justify-center rounded-2xl border border-border bg-surface-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "سبحة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-5xl font-semibold text-primary",
						children: tasbih
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted",
						children: "اضغط للعد · حتى 99 ثم تعود"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: reset,
					className: "min-h-11 flex-1 rounded-xl border border-border text-sm text-muted",
					children: "تصفير السبحة"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openSurah(18),
					className: "min-h-11 flex-1 rounded-xl bg-primary text-sm font-semibold text-primary-ink",
					children: "سورة الكهف"
				})]
			})
		]
	});
}
function SurahList() {
	const openSurah = useHameed((s) => s.openSurah);
	const bookmarks = useHameed((s) => s.bookmarks);
	const [q, setQ] = (0, import_react.useState)("");
	const list = SURAHS.filter((s) => s.name.includes(q.trim()) || String(s.n) === q.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "ابحث عن سورة",
				className: "min-h-11 rounded-xl border border-border bg-surface px-4 outline-none"
			}),
			bookmarks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: bookmarks.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openSurah(n),
					className: "min-h-9 rounded-full bg-surface-2 px-3 text-sm text-primary",
					children: SURAHS[n - 1]?.name
				}, n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openSurah(s.n),
					className: "flex min-h-14 w-full items-center gap-3 rounded-xl px-2 text-right hover:bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-lg bg-surface-2 text-sm text-primary",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 font-medium",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [
								s.place,
								" · ",
								s.ayahs
							]
						})
					]
				}) }, s.n))
			})
		]
	});
}
function Reader({ n }) {
	const close = useHameed((s) => s.closeSurah);
	const bookmarks = useHameed((s) => s.bookmarks);
	const toggle = useHameed((s) => s.toggleBookmark);
	const meta = SURAHS[n - 1];
	const [ayahs, setAyahs] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)("");
	const [audio, setAudio] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setAyahs(null);
		setErr("");
		fetch(`https://api.alquran.cloud/v1/surah/${n}/ar.asad`).then((r) => r.json()).then((j) => setAyahs(j.data.ayahs)).catch(() => setErr("تعذّر تحميل السورة. تحقق من الاتصال."));
	}, [n]);
	const play = (global) => {
		audio?.pause();
		const a = new Audio(`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${global}.mp3`);
		setAudio(a);
		a.play();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: close,
				className: "min-h-11 rounded-xl px-3 text-sm text-primary",
				children: "السور"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => toggle(n),
				className: "min-h-11 rounded-xl px-3 text-sm text-muted",
				children: bookmarks.includes(n) ? "إزالة الإشارة" : "إشارة"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-center font-[family-name:var(--font-quran)] text-3xl",
			children: meta?.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-center text-xs text-muted",
			children: [
				meta?.place,
				" · ",
				meta?.ayahs,
				" آية · العسقلاني / أسد · صوت: العفاسي"
			]
		}),
		err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-primary",
			children: err
		}),
		!ayahs && !err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-muted",
			children: "جارٍ التحميل…"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [n !== 1 && n !== 9 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center font-[family-name:var(--font-quran)] text-2xl text-primary",
				children: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
			}), ayahs?.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-[family-name:var(--font-quran)] text-2xl leading-[2.1]",
				children: [
					a.text,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => play(a.number),
						className: "align-middle text-sm text-primary",
						children: [
							"﴿",
							a.numberInSurah,
							"﴾"
						]
					})
				]
			}, a.number))]
		})
	] });
}
function Zakat() {
	const [gold, setGold] = (0, import_react.useState)("280");
	const [wealth, setWealth] = (0, import_react.useState)("");
	const price = Number(gold) || 0;
	const money = Number(wealth) || 0;
	const nisab = 85 * price;
	const due = money >= nisab && nisab > 0 ? money * .025 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: "حاسبة الزكاة"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "النصاب ٨٥ غراماً من الذهب، والزكاة ٢٫٥٪ إذا بلغ المال النصاب وحال عليه الحول."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm text-muted",
				children: ["سعر غرام الذهب (ر.س)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					inputMode: "decimal",
					value: gold,
					onChange: (e) => setGold(e.target.value),
					className: "mt-1 min-h-11 w-full rounded-xl border border-border bg-bg px-3 text-fg outline-none"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-3 block text-sm text-muted",
				children: ["المال الزكوي (نقد وذهب وفضة وعروض تجارة)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					inputMode: "decimal",
					value: wealth,
					onChange: (e) => setWealth(e.target.value),
					placeholder: "0",
					className: "mt-1 min-h-11 w-full rounded-xl border border-border bg-bg px-3 text-fg outline-none"
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "النصاب"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-2xl text-primary",
				children: [nisab ? nisab.toLocaleString("ar-SA") : "—", " ر.س"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "الزكاة الواجبة"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-3xl font-semibold",
				children: [due ? due.toLocaleString("ar-SA", { maximumFractionDigits: 2 }) : "٠", " ر.س"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: money > 0 && money < nisab ? "المال دون النصاب، فلا زكاة فيه." : "تقدير تقريبي. الديون والحول يُراجعان مع أهل العلم."
			})
		] })]
	});
}
function Duas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-4",
		children: DUAS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-2 font-semibold text-primary",
			children: group.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2",
			children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: item.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-[family-name:var(--font-quran)] text-xl leading-9",
				children: item.text
			})] }, item.name))
		})] }, group.title))
	});
}
function Ask() {
	const ask = useServerFn(askDeen);
	const [q, setQ] = (0, import_react.useState)("");
	const [answer, setAnswer] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const send = async () => {
		if (busy) return;
		setBusy(true);
		setErr("");
		setAnswer("");
		try {
			const res = await ask({ data: { question: q } });
			if (res.ok) setAnswer(res.text);
			else setErr(res.error);
		} catch {
			setErr("تعذّر الإرسال");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: "اسأل"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "سؤال ديني عام. ليس فتوى خاصة، وللمسائل الشخصية ارجع إلى عالم."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					rows: 4,
					maxLength: 600,
					placeholder: "مثال: ما فضل آية الكرسي؟",
					className: "mt-3 w-full rounded-xl border border-border bg-bg p-3 text-fg outline-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: busy || q.trim().length < 4,
					onClick: () => void send(),
					className: "mt-3 min-h-11 w-full rounded-xl bg-primary font-semibold text-primary-ink disabled:opacity-50",
					children: busy ? "يجيب…" : "اسأل"
				})
			] }),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-primary",
				children: err
			}),
			answer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whitespace-pre-wrap leading-7",
				children: answer
			}) })
		]
	});
}
function Khatma() {
	const juz = useHameed((s) => s.juz);
	const toggle = useHameed((s) => s.toggleJuz);
	const reset = useHameed((s) => s.resetKhatma);
	const goal = useHameed((s) => s.goal);
	const setGoal = useHameed((s) => s.setGoal);
	const openSurah = useHameed((s) => s.openSurah);
	const pct = khatmaPct(juz);
	const done = juz.filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "ختمة القرآن"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-4xl font-semibold text-primary",
					children: [pct, "٪"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: done === 30 ? "أتممت الختمة. تقبّل الله." : `بقي ${30 - done} جزءاً`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-3 block text-sm text-muted",
					children: [
						"هدف الصفحات اليومي: ",
						goal,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 1,
							max: 40,
							value: goal,
							onChange: (e) => setGoal(Number(e.target.value)),
							className: "mt-2 w-full accent-primary"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "٢٠ صفحة يومياً تختم المصحف في شهر تقريباً (٦٠٤ صفحة)."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-2",
				children: juz.map((on, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(i),
					className: "flex min-h-16 flex-col items-center justify-center rounded-xl border text-sm " + (on ? "border-primary bg-primary text-primary-ink" : "border-border bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs opacity-80",
						children: "جزء"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold",
						children: i + 1
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "اضغط الجزء عند إتمامه. اضغط مطوّلاً لا — افتح بداية الجزء من الأزرار التالية."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: JUZ_STARTS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openSurah(s),
					className: "min-h-9 rounded-full bg-surface px-3 text-xs text-muted",
					children: [
						i + 1,
						": ",
						SURAHS[s - 1]?.name
					]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: reset,
				className: "min-h-11 text-sm text-muted",
				children: "بدء ختمة جديدة"
			})
		]
	});
}
function Adhkar() {
	const [setName, setSetName] = (0, import_react.useState)("صباح");
	const [counts, setCounts] = (0, import_react.useState)([]);
	const list = ADHKAR[setName];
	(0, import_react.useEffect)(() => setCounts(list.map(() => 0)), [setName]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2",
			children: Object.keys(ADHKAR).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setSetName(k),
				className: "min-h-11 flex-1 rounded-xl text-sm " + (setName === k ? "bg-primary text-primary-ink" : "bg-surface text-muted"),
				children: k
			}, k))
		}), list.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DhikrCard, {
			d,
			n: counts[i] ?? 0,
			onInc: () => setCounts((c) => {
				const next = c.slice();
				next[i] = Math.min(d.count, (next[i] ?? 0) + 1);
				return next;
			})
		}, setName + i))]
	});
}
function DhikrCard({ d, n, onInc }) {
	const done = n >= d.count;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onInc,
		className: "rounded-2xl border p-4 text-right " + (done ? "border-good bg-surface" : "border-border bg-surface"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-[family-name:var(--font-quran)] text-xl leading-9",
			children: d.text
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-primary",
			children: [
				n,
				" / ",
				d.count,
				d.note ? ` · ${d.note}` : "",
				done ? " · تم" : ""
			]
		})]
	});
}
function Qibla() {
	const [bearing, setBearing] = (0, import_react.useState)(null);
	const [heading, setHeading] = (0, import_react.useState)(null);
	const [msg, setMsg] = (0, import_react.useState)("نحدد موقعك…");
	(0, import_react.useEffect)(() => {
		const ok = (lat, lng, label) => {
			setBearing(norm(qiblaBearing(lat, lng)));
			setMsg(label);
		};
		if (!navigator.geolocation) {
			ok(26.4207, 50.0888, "الدمام — الموقع غير متاح");
			return;
		}
		navigator.geolocation.getCurrentPosition((p) => ok(p.coords.latitude, p.coords.longitude, "حسب موقعك"), () => ok(26.4207, 50.0888, "الدمام — لم يُسمح بالموقع"), { timeout: 5e3 });
	}, []);
	const askCompass = () => {
		const DO = DeviceOrientationEvent;
		const start = () => {
			const on = (e) => {
				if (typeof e.webkitCompassHeading === "number") setHeading(e.webkitCompassHeading);
				else if (typeof e.alpha === "number") setHeading(norm(360 - e.alpha));
			};
			window.addEventListener("deviceorientation", on, true);
		};
		if (DO.requestPermission) DO.requestPermission().then((s) => {
			if (s === "granted") start();
		});
		else start();
	};
	const delta = bearing != null && heading != null ? norm(bearing - heading) : bearing;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "w-full text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: msg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-3xl font-semibold text-primary",
						children: bearing == null ? "—" : `${Math.round(bearing)}°`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "اتجاه الكعبة من الشمال"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid size-64 place-items-center rounded-full border border-primary bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-6 rounded-full border border-border",
					style: { transform: `rotate(${delta ?? 0}deg)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 h-1/2 w-1 -translate-x-1/2 rounded-full bg-primary" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-primary",
					children: "الكعبة"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: askCompass,
				className: "min-h-11 rounded-xl bg-primary px-5 font-semibold text-primary-ink",
				children: "تفعيل البوصلة"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 text-center text-xs text-muted",
				children: "على الآيفون اضغط «تفعيل البوصلة» واسمح بالحركة. إن لم تتوفر البوصلة، اتجه حسب الدرجة من الشمال."
			})
		]
	});
}
//#endregion
export { Home as component };
