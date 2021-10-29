const randomIpsum = document.querySelector(".random_ipsum")
const showCase = document.querySelector(".show_case")
const loremData = [

    "I'm baby twee dreamcatcher skateboard, williamsburg schlitz jean shorts meditation ugh literally la croix. Vexillologist yr hella, unicorn organic shoreditch pickled church-key fixie drinking vinegar edison bulb squid sartorial pabst. Readymade bitters vinyl food truck keffiyeh synth kombucha health goth distillery wolf literally affogato plaid pitchfork. Flannel paleo cray street art fashion axe asymmetrical hashtag blog. PBR&B forage shabby chic lumbersexual. Viral authentic trust fund, banjo typewriter cronut single-origin coffee +1 affogato retro cornhole tote bag godard. Crucifix vape brooklyn meditation, snackwave kombucha butcher bespoke hoodie disrupt fixie.",
    "VHS keffiyeh before they sold out tote bag gochujang humblebrag fixie lyft asymmetrical man braid tofu microdosing.Chia roof party four loko mumblecore edison bulb chicharrones la croix food truck kickstarter vape slow - carb 90's meggings. Umami vaporware live-edge wolf. Marfa locavore lo-fi organic fanny pack pinterest farm-to-table you probably haven't heard of them tattooed selvage beard drinking vinegar keffiyeh pok pok.",
    "Skateboard banh mi drinking vinegar tumeric beard woke.Pickled crucifix roof party edison bulb chillwave fanny pack, lo - fi wolf stumptown tacos blue bottle.Portland tilde vice pitchfork brunch squid irony chambray gochujang scenester tbh ugh neutra whatever cardigan.Heirloom small batch pok pok, normcore cliche quinoa celiac cray palo santo freegan poke yuccie.",
    "Fixie crucifix 90's, typewriter cred lomo squid hexagon gentrify meggings pug. Meh twee viral single-origin coffee intelligentsia. Meh blue bottle humblebrag offal man braid seitan sustainable, cloud bread distillery deep v vinyl. Edison bulb shaman pinterest tumeric af, post-ironic fashion axe salvia kale chips.",
    "Viral hexagon forage freegan 90's blog chicharrones letterpress prism +1 fashion axe tousled. Literally copper mug tbh DIY, vice freegan scenester cold-pressed unicorn blue bottle. Artisan beard PBR&B flexitarian bushwick slow-carb try-hard sriracha brooklyn humblebrag salvia deep v normcore. Unicorn bicycle rights twee man bun lumbersexual small batch mlkshk literally 90's 3 wolf moon polaroid la croix.",
    "Cliche leggings VHS four loko, DIY mixtape try-hard tumeric pug flexitarian poutine plaid fam 3 wolf moon craft beer.Irony photo booth microdosing, adaptogen brunch food truck sriracha selvage pok pok crucifix banjo ugh.Knausgaard banh mi thundercats direct trade.Yr shaman kale chips post - ironic.Fingerstache venmo helvetica, pug air plant schlitz lyft.Fanny pack shoreditch squid, scenester tbh succulents raw denim heirloom.",
    "Hammock four dollar toast mustache, paleo iPhone narwhal hella.Iceland hella pitchfork migas skateboard thundercats authentic leggings.Woke organic pour - over wayfarers yr.Prism paleo whatever art party.",
    "Chia enamel pin yuccie, taxidermy trust fund affogato blog roof party fanny pack.Vape four loko artisan organic.Lomo woke fingerstache salvia fashion axe pok pok bespoke kickstarter.Quinoa succulents austin literally XOXO, cloud bread pitchfork organic lyft.Austin small batch salvia lumbersexual readymade trust fund wayfarers."
]

randomIpsum.addEventListener("submit", event => {
    event.preventDefault()
    const number = parseInt(event.target.number.value)
    let value = Math.floor(Math.random() * loremData.length)

    if (isNaN(number) || number > 8 || number < 0) {
        showCase.innerHTML = `<p>${loremData[value]}</p>`
        alert("Insert Between 1 to 8")
    } else {
        let tempLorem = loremData.slice(0, number)
        tempLorem = tempLorem.map(item => `<p>${item}</p>`).join("")
        showCase.innerHTML = tempLorem
    }
    event.target.number.value = ''
})

