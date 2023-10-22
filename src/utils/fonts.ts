import localFont from "next/font/local";

const MonetDisplayFont = localFont({
	src: "../../public/fonts/Dream Avenue.ttf",
	display: "swap",
});

const CoolCodeFont = localFont({
	src: "../../public/fonts/FiraCode-Regular.ttf", 
	display : 'swap'
})

const RecognitionFont = localFont({
	src: "../../public/fonts/NotoSerifDisplay-Italic-VariableFont_wdth,wght.ttf", 
	display : 'swap'
})


export { MonetDisplayFont, CoolCodeFont , RecognitionFont};