let year = 2020
let champion = null

switch (year) {
case 2006:
    champion = "Carolina Hurricanes";
    break;
case 2007:
    champion = "Anaheim Mighty Ducks";
    break;
case 2008:
    champion = "Detroit Red Wings";
    break;
case 2009:
    champion = "Pittsburgh Penguins";
    break;
case 2010:
    champion = "Chicago Blackhawks";
    break;
case 2011:
    champion = "Boston Bruins";
    break;
case 2012:
    champion = "LA Kings";
    break;
case 2013:
    champion = "Chicago Blackhawks";
    break;
case 2014:
    champion = "LA Kings";
    break;
case 2015:
    champion = "Chicago Blackhawks";
    break;
case 2016:
    champion = "Pittsburgh Penguins";
    break;
case 2017:
    champion = "Pittsburgh Penguins";
    break;
}

if (champion) {
console.log(`The winner in ${year} was ${champion}`);
} else {
    console.error("Please try a year between 2006 and 2017");
}