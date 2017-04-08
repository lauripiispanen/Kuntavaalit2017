(function() {
  var municipalities = ["Akaa","Alaj\344rvi","Alavieska","Alavus","Asikkala","Askola","Aura","Enonkoski","Enonteki\366","Espoo","Eura","Eurajoki","Evij\344rvi","Forssa","Haapaj\344rvi","Haapavesi","Hailuoto","Halsua","Hamina","Hankasalmi","Hanko","Harjavalta","Hartola","Hattula","Hausj\344rvi","Heinola","Hein\344vesi","Helsinki","Hirvensalmi","Hollola","Honkajoki","Huittinen","Humppila","Hyrynsalmi","Hyvink\344\344","H\344meenkyr\366","H\344meenlinna","Ii","Iisalmi","Iitti","Ikaalinen","Ilmajoki","Ilomantsi","Imatra","Inari","Inkoo","Isojoki","Isokyr\366","Janakkala","Joensuu","Jokioinen","Joroinen","Joutsa","Juuka","Juupajoki","Juva","Jyv\344skyl\344","J\344mij\344rvi","J\344ms\344","J\344rvenp\344\344","Kaarina","Kaavi","Kajaani","Kalajoki","Kangasala","Kangasniemi","Kankaanp\344\344","Kannonkoski","Kannus","Karijoki","Karkkila","Karstula","Karvia","Kaskinen","Kauhajoki","Kauhava","Kauniainen","Kaustinen","Keitele","Kemi","Kemij\344rvi","Keminmaa","Kemi\366nsaari","Kempele","Kerava","Keuruu","Kihni\366","Kinnula","Kirkkonummi","Kitee","Kittil\344","Kiuruvesi","Kivij\344rvi","Kokem\344ki","Kokkola","Kolari","Konnevesi","Kontiolahti","Korsn\344s","Koski Tl","Kotka","Kouvola","Kristiinankaupunki","Kruunupyy","Kuhmo","Kuhmoinen","Kuopio","Kuortane","Kurikka","Kustavi","Kuusamo","Kyyj\344rvi","K\344rk\366l\344","K\344rs\344m\344ki","Lahti","Laihia","Laitila","Lapinj\344rvi","Lapinlahti","Lappaj\344rvi","Lappeenranta","Lapua","Laukaa","Lemi","Lemp\344\344l\344","Lepp\344virta","Lestij\344rvi","Lieksa","Lieto","Liminka","Liperi","Lohja","Loimaa","Loppi","Loviisa","Lumijoki","Luoto","Luum\344ki","Maalahti","Marttila","Masku","Merikarvia","Miehikk\344l\344","Mikkeli","Muhos","Multia","Muonio","Mustasaari","Muurame","Myn\344m\344ki","Myrskyl\344","M\344nts\344l\344","M\344ntt\344-Vilppula","M\344ntyharju","Naantali","Nakkila","Nivala","Nokia","Nousiainen","Nurmes","Nurmij\344rvi","N\344rpi\366","Orimattila","Orip\344\344","Orivesi","Oulainen","Oulu","Outokumpu","Padasjoki","Paimio","Paltamo","Parainen","Parikkala","Parkano","Peders\366ren kunta","Pelkosenniemi","Pello","Perho","Pertunmaa","Pet\344j\344vesi","Pieks\344m\344ki","Pielavesi","Pietarsaari","Pihtipudas","Pirkkala","Polvij\344rvi","Pomarkku","Pori","Pornainen","Porvoo","Posio","Pudasj\344rvi","Pukkila","Punkalaidun","Puolanka","Puumala","Pyht\344\344","Pyh\344joki","Pyh\344j\344rvi","Pyh\344nt\344","Pyh\344ranta","P\344lk\344ne","P\366yty\344","Raahe","Raasepori","Raisio","Rantasalmi","Ranua","Rauma","Rautalampi","Rautavaara","Rautj\344rvi","Reisj\344rvi","Riihim\344ki","Ristij\344rvi","Rovaniemi","Ruokolahti","Ruovesi","Rusko","R\344\344kkyl\344","Saarij\344rvi","Salla","Salo","Sastamala","Sauvo","Savitaipale","Savonlinna","Savukoski","Sein\344joki","Sievi","Siikainen","Siikajoki","Siikalatva","Siilinj\344rvi","Simo","Sipoo","Siuntio","Sodankyl\344","Soini","Somero","Sonkaj\344rvi","Sotkamo","Sulkava","Suomussalmi","Suonenjoki","Sysm\344","S\344kyl\344","Taipalsaari","Taivalkoski","Taivassalo","Tammela","Tampere","Tervo","Tervola","Teuva","Tohmaj\344rvi","Toholampi","Toivakka","Tornio","Turku","Tuusniemi","Tuusula","Tyrn\344v\344","Ulvila","Urjala","Utaj\344rvi","Utsjoki","Uurainen","Uusikaarlepyy","Uusikaupunki","Vaala","Vaasa","Valkeakoski","Valtimo","Vantaa","Varkaus","Vehmaa","Vesanto","Vesilahti","Veteli","Vierem\344","Vihti","Viitasaari","Vimpeli","Virolahti","Virrat","V\366yri","Ylitornio","Ylivieska","Yl\366j\344rvi","Yp\344j\344","\304ht\344ri","\304\344nekoski"];

  function init() {
    var width = 500,
        height = 500,
        svg = d3.select("#chart")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + width + " " + height),
        data = [],
        selectedParty = null,
        selectedCity = "Helsinki",
        selectedCandidate = null,
        margin = 5,

        partyColors = {
          "Vihre\344 liitto": "#76b72a",
          "Kansallinen Kokoomus": "#00587c",
          "Vasemmistoliitto": "#d2232a",
          "Suomen Sosialidemokraattinen Puolue": "#e11931",
          "Suomen Kristillisdemokraatit (KD)": "#ff9304",
          "Suomen ruotsalainen kansanpuolue": "#007ac9",
          "Perussuomalaiset": "#002395",
          "Suomen Keskusta": "#95c11f",
          "Piraattipuolue": "#000000"
        },
        partyColor = function(party) {
          return partyColors[party] || "gray"
        },
        partyColorFill = function(d) {
          if (selectedParty) {
            return d.party == selectedParty ? partyColor(d.party) : "#e9e9e9"
          } else {
            return partyColor(d.party)
          }
        },
        dotSize = function(d) {
          return candidateBlurb(d) == selectedCandidate ? 10 : 3.5
        },
        candidateBlurb = function(candidate) {
          return candidate.name + " (" + candidate.party + ")"
        },
        tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0),
        xValue = function(d) { return d.x },
        xScale = d3.scaleLinear().range([margin, width - margin]),
        xMap = function(d) { return xScale(xValue(d)) },
        yValue = function(d) { return d.y },
        yScale = d3.scaleLinear().range([height - margin, margin]),
        yMap = function(d) { return yScale(yValue(d)) },

        // elements
        municipalitySearchEl = document.getElementById("municipality-search"),
        municipalityOptionsEl = document.getElementById("municipality-options"),
        candidateSearchEl = document.getElementById("candidate-search"),
        candidateOptionsEl = document.getElementById("candidate-options"),
        partiesEl = document.getElementById("parties")

    function fetch() {
      d3.text("data/"+selectedCity+".csv", function(error, text) {
        data = d3.csvParseRows(text, function(row, i) {
          return { id: row[0], name: row[1], party: row[2], x: +row[3], y: +row[4] }
        })
        updateView(data)
        renderPartiesSelection(data)
        updateCandidateAutocomplete(data)
      })
    }

    function updateView(d) {
      xScale.domain([d3.min(d, xValue), d3.max(d, xValue)])
      yScale.domain([d3.min(d, yValue), d3.max(d, yValue)])

      var dots = svg.selectAll(".dot").data(d)

      dots.exit()
          .transition()
            .style("fill-opacity", 0)
            .remove()

      dots.transition()
         .attr("cx", xMap)
         .attr("cy", yMap)
         .attr("r", dotSize)
         .style("fill", partyColorFill)

      dots.enter()
         .append("circle")
         .attr("class", "dot")
         .attr("r", dotSize)
         .attr("cx", xMap)
         .attr("cy", yMap)
         .style("fill", partyColorFill)
         .style("fill-opacity", 1e-6)
         .on("mouseover", function(d) {
             tooltip.transition()
                  .duration(200)
                  .style("opacity", .9)
             tooltip.html(d.name + "<br/> (" + d.party + ")")
                  .style("left", (d3.event.pageX + 5) + "px")
                  .style("top", (d3.event.pageY - 28) + "px")
         })
         .on("mouseout", function(d) {
             tooltip.transition()
                  .duration(500)
                  .style("opacity", 0)
         })
         .on("click", function(d) {
           selectedCandidate = candidateBlurb(d)
           updateView(data)
         })
         .transition()
             .style("fill-opacity", 1)
    }

    fetch()

    $(municipalitySearchEl).autocomplete({
      data: objectify(municipalities),
      onAutocomplete: function(value) {
        selectedCity = value
        fetch()
      }
    })

    function updateCandidateAutocomplete(data) {
      $(candidateSearchEl).autocomplete({
        data: objectify(data.map(candidateBlurb)),
        onAutocomplete: function(value) {
          selectedCandidate = value
          updateView(data)
        }
      })
    }

    function objectify(list) {
      return list.reduce(function(memo, it) {
        memo[it] = null
        return memo
      }, {})
    }

    function renderPartiesSelection(data) {
      partiesEl.innerHTML = ''
      var parties = distinct(data.map(function(it) { return it.party })).sort()
      parties.forEach(function(party) {
        var li = document.createElement("li")
        li.classList.add("collection-item")
        if (party == selectedParty) {
          li.classList.add("active")
        }
        li.textContent = party
        partiesEl.appendChild(li)
      })
    }

    partiesEl.addEventListener("click", function(e) {
      var party = e.target.textContent
      if (selectedParty == party) {
        selectedParty = null
      } else {
        selectedParty = party
      }
      updateView(data)
      renderPartiesSelection(data)
    })

    function distinct(list) {
      return Object.keys(list.reduce(function(acc, val) {
        acc[val] = 1
        return acc
      }, {}))
    }


  }

  window.addEventListener("load", init)
})()
