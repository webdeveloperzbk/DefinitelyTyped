import chroma, { Color, Scale } from "chroma-js";

function test_chroma() {
    chroma("hotpink");
    chroma("#ff3399");
    chroma("F39");
    chroma(chroma("#ff3399"));
    chroma.valid(0);
    chroma.valid("");
    chroma.valid({});
    chroma.valid(null);
    chroma.valid(undefined);

    chroma(0xff3399);
    chroma(0xff, 0x33, 0x99);
    chroma(255, 51, 153);
    chroma([255, 51, 153]);
    chroma(330, 1, 0.6, "hsl");
    chroma.hsl(330, 1, 0.6);
    chroma.hsl(330, 1, 0.6, 0.5);
    chroma.hcl(50, 40, 40);
    // @ts-expect-error
    chroma.hcl(50, 40, 40, "0");
    chroma.lch(80, 40, 130);
    chroma.oklch(0.8, 0.4, 130);
    chroma.oklch(0.8, 0.4, 130, 0.5);
    chroma(80, 40, 130, "lch");
    chroma(0.8, 0.4, 130, "oklch");
    chroma.cmyk(0.2, 0.8, 0, 0);
    chroma(0.2, 0.8, 0, 0, "cmyk");
    chroma.gl(0.6, 0, 0.8);
    chroma.gl(0.6, 0, 0.8, 0.5);
    chroma(0.6, 0, 0.8, "gl");
    chroma.temperature(2000);
    chroma.temperature(3500);
    chroma.temperature(6000);
    chroma.mix("red", "blue");
    chroma.mix("red", "blue", 0.25);
    chroma.mix("red", "blue", 0.5, "rgb");
    chroma.mix("red", "blue", 0.5, "hsl");
    chroma.mix("red", "blue", 0.5, "lab");
    chroma.mix("red", "blue", 0.5, "oklab");
    chroma.mix("red", "blue", 0.5, "lrgb");
    chroma.blend("4CBBFC", "EEEE22", "multiply");
    chroma.blend("4CBBFC", "EEEE22", "darken");
    chroma.blend("4CBBFC", "EEEE22", "lighten");
    chroma.average(["4CBBFC", "yellow"], "lch", [1, 1, 2, 1]);
    chroma.average(["4CBBFC", "yellow"], "lrgb", [1, 1, 2, 1]);
    chroma.random();
    chroma.contrast("pink", "hotpink");
    chroma.contrast("pink", "purple");
    chroma.brewer.OrRd;
    const data = [
        3.0,
        3.5,
        3.6,
        3.8,
        3.8,
        4.1,
        4.3,
        4.4,
        4.6,
        4.9,
        5.2,
        5.3,
        5.4,
        5.7,
        5.8,
        5.9,
        6.2,
        6.5,
        6.8,
        7.2,
        9,
    ];
    chroma.limits(data, "e", 5);
    chroma.limits(data, "q", 5);
    chroma.limits(data, "k", 5);

    chroma(0xff3399);
    chroma.limits(data, "k", 5);
    chroma.deltaE("#ededee", "#ededee");
    chroma.deltaE("#ededee", "#ededee", 1);
    chroma.deltaE("#ededee", "#ededee", 1, 1);
    chroma.deltaE("#ededee", "#ededee", 1, 1, 1);
}

function test_color() {
    chroma("red").alpha(0.5);
    chroma("rgba(255,0,0,0.35)").alpha() === 0.35;
    chroma("hotpink").darken();
    chroma("hotpink").darken(2);
    chroma("hotpink").brighten();
    chroma("slategray").saturate();
    chroma("slategray").saturate(2);
    chroma("hotpink").desaturate();
    chroma("hotpink").desaturate(2);
    chroma("hotpink").desaturate(3);
    chroma("hotpink").mix("blue");
    chroma("hotpink").mix("blue", 0.25);
    chroma("hotpink").mix("blue", 0.75);
    // change hue to 0 deg (=red)
    chroma("skyblue").set("hsl.h", 0);
    // set chromacity to 30
    chroma("hotpink").set("lch.c", 30);
    // half Lab lightness
    chroma("orangered").set("lab.l", "*0.5");
    // double Lch saturation
    chroma("darkseagreen").set("lch.c", "*2");
    chroma("orangered").get("lab.l");
    chroma("orangered").get("hsl.l");
    chroma("orangered").get("rgb.g");
    chroma("white").luminance();
    chroma("aquamarine").luminance();
    chroma("hotpink").luminance();
    chroma("darkslateblue").luminance();
    chroma("black").luminance();
    chroma("white").luminance(0.5);
    chroma("aquamarine").luminance(0.5);
    chroma("hotpink").luminance(0.5);
    chroma("darkslateblue").luminance(0.5);
    chroma("aquamarine").luminance(0.5);
    chroma("aquamarine").luminance(0.5, "lab");
    chroma("aquamarine").luminance(0.5, "hsl");
    chroma("orange").hex();
    chroma("orange").hex("auto");
    chroma("orange").hex("rgb");
    chroma("orange").alpha(0.5).hex("rgba");
    chroma("#ffa500").name();
    chroma("#ffa505").name();
    chroma("teal").css();
    chroma("teal").alpha(0.5).css();
    chroma("teal").css("hsl");
    chroma("teal").css("lab");
    chroma("teal").css("lch");
    chroma("teal").css("oklab");
    chroma("teal").css("oklch");
    chroma("teal").css("rgb");
    chroma("orange").rgb();
    chroma("orange").hsl();
    chroma("white").hsl();
    chroma("orange").hsv();
    chroma("white").hsv();
    chroma("orange").hsi();
    chroma("white").hsi();
    chroma("orange").lab();
    chroma("skyblue").lch();
    chroma("skyblue").hcl();
    chroma("#ff3300").temperature();
    chroma("#ff8a13").temperature();
    chroma("#ffe3cd").temperature();
    chroma("#cbdbff").temperature();
    chroma("#b3ccff").temperature();
    chroma("33cc00").gl();
    chroma(50, 40, 20, "hcl").clipped();
    chroma(50, 40, 20, "hcl")._rgb._unclipped;

    chroma("teal").alpha(0.5).css();
    chroma("teal").css("hsl");
    chroma("orange").rgb();
    chroma("orange").rgb(true);
    chroma("orange").rgba();
    chroma("orange").rgba(true);

    chroma("#000000").num();
    chroma("#0000ff").num();
    chroma("#00ff00").num();
    chroma("#ff0000").num();
}

function test_scale() {
    const f = chroma.scale();
    f(0.25);
    f(0.5);
    f(0.75);
    f(null);
    f(undefined);
    chroma.scale(["yellow", "008ae5"]);
    chroma.scale(["yellow", "red", "black"]);
    // default domain is [0,1]
    chroma.scale(["yellow", "008ae5"]);
    // set domain to [0,100]
    chroma.scale(["yellow", "008ae5"]).domain([0, 100]);
    // default domain is [0,1]
    chroma.scale(["yellow", "lightgreen", "008ae5"]).domain([0, 0.25, 1]);
    chroma.scale(["yellow", "008ae5"]);
    chroma.scale(["yellow", "navy"]);
    chroma.scale(["yellow", "navy"]).mode("lab");
    chroma.scale(["yellow", "navy"]).mode("lrgb");
    chroma.scale(["yellow", "navy"]).mode("hsl");
    chroma.scale(["yellow", "navy"]).mode("lch");
    chroma.scale("YlGnBu");
    chroma.scale("Spectral");
    chroma.scale("Spectral").domain([1, 0]);
    chroma.brewer.OrRd;
    chroma.brewer.Viridis;
    chroma.scale(["yellow", "008ae5"]).mode("lch");

    chroma.scale(["yellow", "008ae5"]).mode("lch").correctLightness();
    // linear interpolation
    chroma.scale(["yellow", "red", "black"]);
    // bezier interpolation
    chroma.bezier(["yellow", "red", "black"]);
    // convert bezier interpolator into chroma.scale
    chroma.bezier(["yellow", "red", "black"]).scale().colors(5);
    // use the default helix...
    chroma.cubehelix();
    // or customize it
    chroma.cubehelix().start(200).rotations(-0.5).gamma(0.8).lightness([0.3, 0.8]);

    chroma
        .cubehelix()
        .start(200)
        .rotations(-0.35)
        .gamma(0.7)
        .lightness([0.3, 0.8])
        .scale() // convert to chroma.scale
        .correctLightness()
        .colors(5);

    chroma.scale("RdYlBu");
    chroma.scale("RdYlBu").padding(0.15);

    chroma.scale("OrRd");
    chroma.scale("OrRd").padding([0.2, 0]);

    chroma.scale("OrRd").classes(5);
    chroma.scale("OrRd").classes(8);

    chroma
        .cubehelix()
        .start(200)
        .rotations(-0.35)
        .gamma(0.7)
        .lightness([0.3, 0.8])
        .scale() // convert to chroma.scale
        .correctLightness()
        .colors(5);

    chroma.scale("RdYlBu");
    chroma.scale("RdYlBu").padding(0.15);
}

function test_types() {
    const color: chroma.Color = chroma("orange");
    const scale: chroma.Scale = chroma.scale("RdYlBu");
    const scale1: Scale = scale.domain([1, 10]);
    const minmax: number[] = scale.domain();
}

// the following should actually, pass, but TS can't disambiguate between a parameter
// which is passed as undefined/null or not passed at all
// const scaleColors1: Color[] = chroma.scale(['black', 'white']).colors(12);
const scaleColors2: Color[] = chroma.scale(["black", "white"]).colors(12, null);
const scaleColors3: Color[] = chroma.scale(["black", "white"]).colors(12, undefined);
