// ============================================================================
// MATHHISTORY DATABASE
// A comprehensive, FAMAT-style encyclopedia of mathematicians.
// Each entry includes: biographical anecdotes, specific dates, named works,
// nationalities, key theorems, trivia, and connections to other figures.
// ============================================================================

const MATHEMATICIANS = [
  {
    "id": "ahmes",
    "name": "Ahmes",
    "born": "c. 1680 BC",
    "died": "c. 1620 BC",
    "era": "ancient",
    "nationality": "Egyptian",
    "fields": [
      "arithmetic",
      "geometry",
      "fractions"
    ],
    "short": "Egyptian scribe who copied the Rhind Mathematical Papyrus, the oldest named document in mathematics.",
    "bio": "Ahmes (also written Ahmose) is the earliest mathematician whose name has survived. Around 1650 BC he copied an older document that is now called the Rhind Mathematical Papyrus (after Scottish antiquarian Alexander Henry Rhind, who purchased it in Luxor in 1858). The papyrus, now in the British Museum, contains 87 problems covering arithmetic, unit fractions, linear equations, areas of triangles and circles, and volumes of granaries. Ahmes describes himself as transcribing 'accurate reckoning for inquiring into things, and the knowledge of all things, mysteries ... all secrets.' The papyrus is our best window into Egyptian mathematical practice of the Middle Kingdom.",
    "keyWorks": [
      "Rhind Mathematical Papyrus (copied c. 1650 BC)"
    ],
    "keyIdeas": [
      "Method of unit fractions (Egyptian fractions)",
      "Approximation of the area of a circle as (8d/9)² giving π ≈ 3.1605",
      "The 'aha' (unknown) problems, an early form of algebra"
    ],
    "trivia": [
      "The Rhind Papyrus was purchased in Luxor in 1858 by A.H. Rhind.",
      "Ahmes says his copy was made from a document about 200 years older.",
      "The papyrus is nearly 18 feet long."
    ],
    "connections": [],
    "tags": [
      "egyptian",
      "papyrus",
      "fractions",
      "π"
    ]
  },
  {
    "id": "thales",
    "name": "Thales of Miletus",
    "born": "c. 624 BC",
    "died": "c. 546 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry",
      "astronomy",
      "philosophy"
    ],
    "short": "One of the Seven Sages of Greece; the first individual in Western tradition to whom mathematical discoveries are attributed.",
    "bio": "Thales was a pre-Socratic philosopher from the Ionian city of Miletus and is considered the first Greek mathematician and the founder of the Ionian school. Herodotus reports that Thales predicted the solar eclipse of May 28, 585 BC, which occurred during the Battle of Halys between the Lydians and Medes. He is said to have calculated the height of the Egyptian pyramids by comparing their shadows to his own at the moment his shadow equaled his height. Proclus credits him with the first use of deductive reasoning in geometry.",
    "keyWorks": [
      "No writings survive"
    ],
    "keyIdeas": [
      "Thales' Theorem: an angle inscribed in a semicircle is a right angle",
      "A circle is bisected by any diameter",
      "The base angles of an isosceles triangle are equal",
      "Two triangles are congruent if they have two angles and a side equal"
    ],
    "trivia": [
      "Predicted the solar eclipse of 585 BC.",
      "One of the Seven Sages of Greece.",
      "Famously fell into a well while stargazing, according to Plato.",
      "Measured the Great Pyramid using shadows."
    ],
    "connections": [
      "pythagoras"
    ],
    "tags": [
      "greek",
      "geometry",
      "ionian-school"
    ]
  },
  {
    "id": "pythagoras",
    "name": "Pythagoras of Samos",
    "born": "c. 570 BC",
    "died": "c. 495 BC",
    "era": "ancient",
    "nationality": "Greek (Ionian)",
    "fields": [
      "geometry",
      "number theory",
      "music",
      "philosophy"
    ],
    "short": "Founder of the Pythagorean brotherhood; his name is attached to the most famous theorem in mathematics.",
    "bio": "Born on the island of Samos, Pythagoras emigrated around 530 BC to Croton in southern Italy, where he founded a religious and philosophical brotherhood. The Pythagoreans believed that 'all is number' and that rational numbers governed the cosmos. They were secretive; discoveries were attributed to the group rather than individuals. The discovery of irrational numbers (specifically that √2 is irrational) is said to have so scandalized the brotherhood that the discoverer — often named as Hippasus — was drowned at sea. Pythagoras is credited with proving what is now the Pythagorean theorem, though the relation was known to Babylonians a millennium earlier.",
    "keyWorks": [
      "No writings survive"
    ],
    "keyIdeas": [
      "Pythagorean theorem: a² + b² = c² for right triangles",
      "Discovery of the relation between string length and musical pitch (2:1 octave, 3:2 fifth, 4:3 fourth)",
      "Classification of numbers as perfect, amicable, figurate",
      "Doctrine that 'all is number'"
    ],
    "trivia": [
      "His brotherhood was both mathematical and religious — members abstained from beans.",
      "Hippasus was supposedly drowned for revealing the existence of irrational numbers.",
      "The Pythagoreans used the pentagram as a secret symbol.",
      "The Pythagorean theorem was known to Babylonians c. 1800 BC (Plimpton 322 tablet).",
      "Pythagoreans believed the soul transmigrated (metempsychosis)."
    ],
    "connections": [
      "thales",
      "hippasus",
      "euclid"
    ],
    "tags": [
      "greek",
      "pythagorean",
      "theorem",
      "number-mysticism"
    ]
  },
  {
    "id": "hippasus",
    "name": "Hippasus of Metapontum",
    "born": "c. 530 BC",
    "died": "c. 450 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry",
      "number theory"
    ],
    "short": "Pythagorean who reputedly discovered irrational numbers and was drowned for the discovery.",
    "bio": "Hippasus is credited — in one influential strand of tradition — with proving the incommensurability of the diagonal of a square with its side, i.e., that √2 is irrational. According to later legend, the Pythagoreans believed the cosmos was built of whole-number ratios, so the discovery of an irrational magnitude threatened their entire worldview. One version of the story says Hippasus was drowned at sea as a punishment; another that the Pythagoreans built him a tomb as though he were already dead. Some sources instead credit him with the discovery of the regular dodecahedron.",
    "keyWorks": [],
    "keyIdeas": [
      "Proof of the irrationality of √2 (attributed)",
      "Construction of the regular dodecahedron (alternative attribution)"
    ],
    "trivia": [
      "Legend says he was drowned at sea by Pythagoreans for revealing irrationals.",
      "An alternative story says he was expelled and a tomb was built as if he had died."
    ],
    "connections": [
      "pythagoras"
    ],
    "tags": [
      "greek",
      "pythagorean",
      "irrational-numbers"
    ]
  },
  {
    "id": "zeno-elea",
    "name": "Zeno of Elea",
    "born": "c. 490 BC",
    "died": "c. 430 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "philosophy",
      "logic",
      "foundations"
    ],
    "short": "Philosopher whose paradoxes on motion and infinity helped seed the later calculus.",
    "bio": "A student of Parmenides, Zeno devised paradoxes designed to defend his master's thesis that motion and plurality are illusions. Aristotle preserved four of them: Achilles and the Tortoise, the Dichotomy, the Arrow, and the Stadium. They forced later mathematicians to grapple with infinity, continuity, and the sum of infinitely many quantities, issues that would not be fully resolved until Cauchy and Weierstrass rigorized the calculus in the 19th century.",
    "keyWorks": [
      "Book of paradoxes (lost, preserved in Aristotle's Physics)"
    ],
    "keyIdeas": [
      "Achilles and the Tortoise paradox",
      "Dichotomy paradox",
      "The Arrow paradox",
      "Paradox of the Stadium"
    ],
    "trivia": [
      "His paradoxes remained a philosophical puzzle for ~2,400 years.",
      "Aristotle called him 'the inventor of dialectic.'"
    ],
    "connections": [
      "aristotle"
    ],
    "tags": [
      "greek",
      "paradox",
      "infinity"
    ]
  },
  {
    "id": "eudoxus",
    "name": "Eudoxus of Cnidus",
    "born": "c. 408 BC",
    "died": "c. 355 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry",
      "astronomy"
    ],
    "short": "Developed the method of exhaustion and a theory of proportion that sidestepped the irrational crisis.",
    "bio": "Eudoxus was a student of Plato and arguably the greatest mathematician of the classical Greek era before Archimedes. His theory of proportion, preserved in Book V of Euclid's Elements, allowed geometers to reason about incommensurable magnitudes without invoking irrational numbers. His method of exhaustion — exhausting an area or volume by inscribing sequences of polygons — was the direct ancestor of integration and was later perfected by Archimedes.",
    "keyWorks": [
      "Theory of proportion (in Elements Book V)",
      "On Speeds"
    ],
    "keyIdeas": [
      "Method of exhaustion for areas and volumes",
      "Theory of proportion for incommensurable magnitudes",
      "Astronomical model of 27 concentric spheres"
    ],
    "trivia": [
      "Student of Plato; teacher at the Academy.",
      "Lectured in Athens in his late 20s."
    ],
    "connections": [
      "plato",
      "archimedes",
      "euclid"
    ],
    "tags": [
      "greek",
      "exhaustion",
      "proportion"
    ]
  },
  {
    "id": "plato",
    "name": "Plato",
    "born": "c. 427 BC",
    "died": "c. 347 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "philosophy",
      "foundations"
    ],
    "short": "Founded the Academy; above its door allegedly read 'Let no one ignorant of geometry enter.'",
    "bio": "Though not a mathematician in the technical sense, Plato profoundly shaped the culture of Greek mathematics. The Academy he founded in Athens c. 387 BC was for nearly a millennium the intellectual center of the ancient world. Plato emphasized the abstract nature of mathematical objects and argued that mathematics should be studied with pure reason rather than physical experiment. The five regular convex polyhedra — tetrahedron, cube, octahedron, dodecahedron, icosahedron — are called Platonic solids because of their central role in his cosmology in the Timaeus.",
    "keyWorks": [
      "Republic",
      "Timaeus",
      "Meno"
    ],
    "keyIdeas": [
      "Platonic solids and their cosmic associations",
      "Mathematics as training for the philosopher-king",
      "The existence of abstract mathematical forms"
    ],
    "trivia": [
      "The Academy's entrance allegedly bore the inscription 'ἀγεωμέτρητος μηδεὶς εἰσίτω' — 'let no one ignorant of geometry enter.'",
      "Plato's real name was Aristocles; 'Plato' means 'broad.'",
      "Taught Aristotle for ~20 years."
    ],
    "connections": [
      "eudoxus",
      "aristotle"
    ],
    "tags": [
      "greek",
      "platonic-solids",
      "academy"
    ]
  },
  {
    "id": "euclid",
    "name": "Euclid of Alexandria",
    "born": "c. 325 BC",
    "died": "c. 265 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry",
      "number theory",
      "foundations"
    ],
    "short": "Author of the Elements, the most successful textbook in history.",
    "bio": "Euclid taught at the Library of Alexandria under Ptolemy I Soter. His Elements, in thirteen books, organized essentially all the mathematics known at the time — plane geometry, number theory, incommensurables, and solid geometry — from a small set of definitions, postulates, and common notions. The Elements became the model of deductive mathematical exposition for over 2,000 years; it went through more than 1,000 editions and was second only to the Bible in total print runs until the 19th century. When Ptolemy asked Euclid whether there was a shorter path to geometry than the Elements, Euclid is said to have replied 'there is no royal road to geometry.'",
    "keyWorks": [
      "Elements",
      "Data",
      "Optics",
      "Phaenomena",
      "On Division of Figures"
    ],
    "keyIdeas": [
      "Axiomatic method",
      "Euclid's algorithm for greatest common divisors",
      "Proof of the infinitude of primes",
      "Fifth postulate (parallel postulate)",
      "Construction of the five Platonic solids in Book XIII"
    ],
    "trivia": [
      "Flourished c. 300 BC under Ptolemy I Soter at Alexandria.",
      "Said to have told Ptolemy: 'There is no royal road to geometry.'",
      "The Elements is the most-published secular work in history.",
      "Book 13 culminates in the construction of the Platonic solids."
    ],
    "connections": [
      "eudoxus",
      "archimedes",
      "apollonius"
    ],
    "tags": [
      "greek",
      "elements",
      "axiomatic",
      "alexandria"
    ]
  },
  {
    "id": "archimedes",
    "name": "Archimedes of Syracuse",
    "born": "c. 287 BC",
    "died": "212 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry",
      "mechanics",
      "hydrostatics"
    ],
    "short": "Regarded by many as the greatest mathematician of antiquity; killed by a Roman soldier during the Siege of Syracuse.",
    "bio": "Archimedes lived in the Greek city of Syracuse on Sicily. He calculated π to within 1/50 by inscribing and circumscribing 96-gons around a circle, giving 3 10/71 < π < 3 1/7. He proved that the volume of a sphere is 2/3 that of its circumscribing cylinder, a result he wanted engraved on his tomb. He laid the foundations of hydrostatics (Archimedes' principle — bodies displace their weight in water, discovered in a bath and announced with the cry 'Eureka!'). During the Second Punic War he designed war machines to defend Syracuse; when the city fell in 212 BC he was killed by a Roman soldier despite the general Marcellus' orders to spare him. Cicero later rediscovered his tomb in 75 BC.",
    "keyWorks": [
      "On the Sphere and Cylinder",
      "Measurement of a Circle",
      "On Floating Bodies",
      "The Sand Reckoner",
      "The Method of Mechanical Theorems",
      "Quadrature of the Parabola"
    ],
    "keyIdeas": [
      "Volume of sphere is 2/3 that of circumscribing cylinder",
      "Archimedes' principle of buoyancy",
      "Approximation 3 10/71 < π < 3 1/7",
      "Method of exhaustion applied to the parabola",
      "The 'Archimedes screw' for lifting water",
      "The Sand Reckoner — a system for naming very large numbers"
    ],
    "trivia": [
      "Killed during the Roman Siege of Syracuse in 212 BC.",
      "His last words were reportedly 'do not disturb my circles.'",
      "Cicero rediscovered his neglected tomb in 75 BC.",
      "The Archimedes Palimpsest, rediscovered in 1906, contains The Method — the closest the ancients came to integral calculus.",
      "Ran through Syracuse naked shouting 'Eureka!' after his bath discovery.",
      "He was related to, and served, King Hiero II of Syracuse."
    ],
    "connections": [
      "euclid",
      "eratosthenes",
      "apollonius"
    ],
    "tags": [
      "greek",
      "exhaustion",
      "π",
      "eureka",
      "syracuse"
    ]
  },
  {
    "id": "apollonius",
    "name": "Apollonius of Perga",
    "born": "c. 262 BC",
    "died": "c. 190 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry"
    ],
    "short": "Known as 'The Great Geometer'; systematized the theory of conic sections.",
    "bio": "Apollonius worked in Alexandria during the reigns of Ptolemy III Euergetes and Ptolemy IV Philopator. His Conics, in eight books, is a systematic treatment of ellipses, parabolas, and hyperbolas — names Apollonius himself coined. The first seven books survive (four in Greek, three in Arabic); the eighth is lost. His work was foundational for Kepler's laws of planetary motion 1,800 years later.",
    "keyWorks": [
      "Conics (8 books, 7 surviving)"
    ],
    "keyIdeas": [
      "Systematic theory of conic sections as slices of a double cone",
      "Coined the terms 'ellipse,' 'parabola,' and 'hyperbola'",
      "Apollonius' problem: construct a circle tangent to three given circles"
    ],
    "trivia": [
      "Called 'ho megas geometres' — 'the Great Geometer.'",
      "His terminology for conics is still used today."
    ],
    "connections": [
      "euclid",
      "archimedes",
      "pappus"
    ],
    "tags": [
      "greek",
      "conics",
      "geometry"
    ]
  },
  {
    "id": "eratosthenes",
    "name": "Eratosthenes of Cyrene",
    "born": "c. 276 BC",
    "died": "c. 194 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "number theory",
      "geography",
      "astronomy"
    ],
    "short": "Chief librarian at Alexandria; calculated the circumference of the Earth to impressive accuracy.",
    "bio": "Eratosthenes served as chief librarian of the Library of Alexandria. He devised the Sieve of Eratosthenes for finding prime numbers, and famously estimated the circumference of the Earth by measuring shadow angles at Syene (modern Aswan) and Alexandria at noon on the summer solstice. His result was about 250,000 stadia; depending on which stadion he used, this is within a few percent of the true value. He was nicknamed 'Beta' because he was supposedly second-best in every field; toward the end of his life he went blind and is said to have starved himself to death.",
    "keyWorks": [
      "Measurement of the Earth (lost)",
      "On the Mean (lost)"
    ],
    "keyIdeas": [
      "Sieve of Eratosthenes for finding primes",
      "Measurement of Earth's circumference",
      "Prime number generation method"
    ],
    "trivia": [
      "Nicknamed 'Beta' (second) because he was second-best in every field.",
      "Chief librarian of the Library of Alexandria from c. 236 BC.",
      "Starved himself to death after going blind."
    ],
    "connections": [
      "archimedes"
    ],
    "tags": [
      "greek",
      "sieve",
      "alexandria",
      "π"
    ]
  },
  {
    "id": "hipparchus",
    "name": "Hipparchus of Nicaea",
    "born": "c. 190 BC",
    "died": "c. 120 BC",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "trigonometry",
      "astronomy"
    ],
    "short": "Founder of trigonometry; compiled the first comprehensive table of chords.",
    "bio": "Hipparchus worked on the island of Rhodes. He is considered the founder of trigonometry — his table of chords, effectively a table of sines, was the first comprehensive trigonometric table. He discovered the precession of the equinoxes and compiled the first star catalog in the Western tradition, containing about 850 stars. His writings are almost entirely lost, known mainly through Ptolemy's Almagest.",
    "keyWorks": [
      "On Chords in a Circle (lost)",
      "star catalog (lost)"
    ],
    "keyIdeas": [
      "First systematic table of chords",
      "Discovery of precession of the equinoxes",
      "First star catalog"
    ],
    "trivia": [
      "His work is known mostly through Ptolemy's Almagest.",
      "Considered the greatest ancient astronomical observer."
    ],
    "connections": [
      "ptolemy"
    ],
    "tags": [
      "greek",
      "trigonometry",
      "astronomy"
    ]
  },
  {
    "id": "heron",
    "name": "Heron of Alexandria",
    "born": "c. 10 AD",
    "died": "c. 70 AD",
    "era": "ancient",
    "nationality": "Greek/Roman",
    "fields": [
      "geometry",
      "engineering"
    ],
    "short": "Inventor and mathematician; derived a formula for the area of a triangle from its side lengths.",
    "bio": "Also called Hero, he was a Greek mathematician and engineer working in Roman Egypt. His Metrica contains the formula that bears his name: for a triangle with sides a, b, c and semi-perimeter s, the area equals √(s(s−a)(s−b)(s−c)). He also designed the aeolipile — a steam-powered rotating sphere — and a vending machine for holy water, and gave the first iterative method for computing square roots.",
    "keyWorks": [
      "Metrica",
      "Pneumatica",
      "Automata"
    ],
    "keyIdeas": [
      "Heron's formula for the area of a triangle",
      "Heron's method for square roots (equivalent to Newton's method)",
      "Aeolipile (first steam engine)",
      "Shortest-path property of light reflection"
    ],
    "trivia": [
      "Designed the first vending machine (for holy water in temples).",
      "The aeolipile predated practical steam engines by ~1,800 years."
    ],
    "connections": [],
    "tags": [
      "greek",
      "engineering",
      "heron-formula"
    ]
  },
  {
    "id": "ptolemy",
    "name": "Claudius Ptolemy",
    "born": "c. 100 AD",
    "died": "c. 170 AD",
    "era": "ancient",
    "nationality": "Greco-Roman Egyptian",
    "fields": [
      "astronomy",
      "trigonometry",
      "geography"
    ],
    "short": "Author of the Almagest; his geocentric model dominated for 1,400 years.",
    "bio": "Ptolemy worked in Alexandria during the Roman imperial period. His Mathematike Syntaxis — known to Arab translators as al-Majisti and thence to Latin Europe as the Almagest — set out a geocentric astronomy based on epicycles that remained the standard until Copernicus. He produced the most elaborate ancient table of chords (effectively sines), good to about one part in 10⁶. His Geography set out methods of map projection, and his Tetrabiblos was the classic of ancient astrology.",
    "keyWorks": [
      "Almagest (Mathematike Syntaxis)",
      "Geography",
      "Tetrabiblos",
      "Optics"
    ],
    "keyIdeas": [
      "Geocentric cosmos with epicycles and deferents",
      "Ptolemy's theorem on cyclic quadrilaterals",
      "Stereographic projection in Planisphaerium",
      "Table of chords in half-degree increments"
    ],
    "trivia": [
      "The Almagest remained the astronomical authority in Europe until Copernicus (1543).",
      "Ptolemy's Theorem: for a cyclic quadrilateral, AC·BD = AB·CD + AD·BC.",
      "His name means 'warlike' and was common in Egypt."
    ],
    "connections": [
      "hipparchus",
      "copernicus"
    ],
    "tags": [
      "alexandria",
      "astronomy",
      "trigonometry"
    ]
  },
  {
    "id": "diophantus",
    "name": "Diophantus of Alexandria",
    "born": "c. 201 AD",
    "died": "c. 285 AD",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "number theory",
      "algebra"
    ],
    "short": "'Father of algebra'; author of the Arithmetica, the margin of which Fermat famously scribbled in.",
    "bio": "Diophantus wrote the Arithmetica, a collection of 130 algebraic problems giving specific numerical solutions. He introduced an early form of syncopated algebra using abbreviations for powers and unknowns. His work was largely forgotten in the West until Regiomontanus rediscovered a Greek manuscript in the 15th century. In 1637, Pierre de Fermat wrote in the margin of his copy of Diophantus that he had a proof that xⁿ + yⁿ = zⁿ had no nontrivial integer solutions for n > 2, but that the margin was too small to contain it — launching 358 years of effort culminating in Andrew Wiles' 1994 proof.",
    "keyWorks": [
      "Arithmetica (13 books, 6 surviving in Greek, 4 more in Arabic)"
    ],
    "keyIdeas": [
      "Diophantine equations — polynomial equations seeking integer solutions",
      "Syncopated algebraic notation",
      "Systematic study of indeterminate equations"
    ],
    "trivia": [
      "A riddle from the Greek Anthology gives his lifespan: he lived 84 years; 1/6 a boy, 1/12 a youth, 1/7 further until marriage, a son born 5 years later who died at half his father's final age, etc.",
      "Fermat's famous 'margin too small' note was in the margin of Arithmetica II.8."
    ],
    "connections": [
      "fermat",
      "wiles"
    ],
    "tags": [
      "algebra",
      "diophantine",
      "alexandria"
    ]
  },
  {
    "id": "pappus",
    "name": "Pappus of Alexandria",
    "born": "c. 290 AD",
    "died": "c. 350 AD",
    "era": "ancient",
    "nationality": "Greek",
    "fields": [
      "geometry"
    ],
    "short": "Last of the great Greek geometers; his Synagoge summarized ancient geometry.",
    "bio": "Pappus worked in Alexandria in the 4th century AD and is often considered the last of the great Greek mathematicians. His Synagoge (Collection), in eight books (the first and part of the second are lost), summarized and extended earlier Greek mathematics. Book 7 is especially valuable because it preserves results from lost works of Euclid, Apollonius, Aristaeus, and Eratosthenes. The Pappus Hexagon Theorem and Pappus's Centroid Theorem bear his name; both were later generalized by 17th-century geometers.",
    "keyWorks": [
      "Synagoge (Collection)"
    ],
    "keyIdeas": [
      "Pappus's hexagon theorem (foundational for projective geometry)",
      "Pappus's centroid theorems on surfaces and volumes of revolution",
      "Early problems of analysis and synthesis"
    ],
    "trivia": [
      "Widely regarded as 'the last of the great Greek geometers.'"
    ],
    "connections": [
      "euclid",
      "apollonius"
    ],
    "tags": [
      "greek",
      "alexandria",
      "projective"
    ]
  },
  {
    "id": "hypatia",
    "name": "Hypatia of Alexandria",
    "born": "c. 350–370 AD",
    "died": "March 415 AD",
    "era": "ancient",
    "nationality": "Greek Egyptian",
    "fields": [
      "geometry",
      "algebra",
      "astronomy",
      "philosophy"
    ],
    "short": "The first female mathematician for whom we have substantial records; murdered by a Christian mob in Alexandria.",
    "bio": "Hypatia was the daughter of Theon of Alexandria, who was the last recorded member of the Museum of Alexandria. She became head of the Neoplatonic school in Alexandria and was famous as a teacher of mathematics and philosophy. She edited works by Diophantus, Apollonius, and her father's version of the Almagest. In 415 AD she was brutally murdered by a Christian mob during political conflict between the prefect Orestes and Patriarch Cyril of Alexandria. Her death is often used to mark the symbolic end of classical antiquity.",
    "keyWorks": [
      "Commentary on Diophantus' Arithmetica (lost)",
      "Commentary on Apollonius' Conics (lost)"
    ],
    "keyIdeas": [
      "Editions of and commentaries on Diophantus and Apollonius",
      "Astronomical tables (with Theon)",
      "Construction of astrolabes and hydrometers"
    ],
    "trivia": [
      "Murdered by a Christian mob in March 415 AD.",
      "Daughter of Theon, the last librarian of the Great Library of Alexandria.",
      "The 2009 film Agora portrays her life."
    ],
    "connections": [
      "diophantus",
      "apollonius"
    ],
    "tags": [
      "alexandria",
      "women-in-math",
      "neoplatonism"
    ]
  },
  {
    "id": "liu-hui",
    "name": "Liu Hui",
    "born": "c. 220 AD",
    "died": "c. 280 AD",
    "era": "ancient",
    "nationality": "Chinese",
    "fields": [
      "geometry",
      "numerical methods"
    ],
    "short": "Greatest Chinese mathematician of the Three Kingdoms period; computed π ≈ 3.1416 using a 3072-gon.",
    "bio": "Liu Hui wrote a commentary on the Nine Chapters on the Mathematical Art (Jiuzhang Suanshu), the foundational Chinese mathematical text. He gave systematic proofs of many results and used an inscribed-polygon method to approximate π: starting with a hexagon and repeatedly doubling the number of sides, he reached a 192-gon giving π ≈ 3.14, and suggested continuation to a 3,072-gon yielding 3.14159. He also used a form of Cavalieri's principle and what is now called Gaussian elimination to solve linear systems, more than 1,500 years before Gauss.",
    "keyWorks": [
      "Commentary on Nine Chapters on the Mathematical Art (263 AD)",
      "Haidao Suanjing (Sea Island Mathematical Manual)"
    ],
    "keyIdeas": [
      "Polygon algorithm for π",
      "Cavalieri-style volume arguments",
      "Gaussian elimination (fangcheng) for linear systems",
      "Negative numbers in systematic use"
    ],
    "trivia": [
      "Computed π to 3.1416 using a 3,072-gon.",
      "Chinese mathematics used negative numbers (denoted by black rods) about 1,000 years before Europe."
    ],
    "connections": [
      "zu-chongzhi"
    ],
    "tags": [
      "chinese",
      "π",
      "nine-chapters"
    ]
  },
  {
    "id": "zu-chongzhi",
    "name": "Zu Chongzhi",
    "born": "429 AD",
    "died": "500 AD",
    "era": "ancient",
    "nationality": "Chinese",
    "fields": [
      "geometry",
      "astronomy"
    ],
    "short": "Computed π to seven decimal places using the approximation 355/113 (Milü).",
    "bio": "Zu Chongzhi was a Chinese polymath of the Liu Song and Southern Qi dynasties. He refined Liu Hui's method to give π between 3.1415926 and 3.1415927, an accuracy not surpassed for over 900 years. He gave two rational approximations: the 'rough' 22/7 (Yuelü) and the 'accurate' 355/113 (Milü), which is correct to six decimal places. He also accurately computed the volume of a sphere with his son Zu Geng. A crater on the Moon and an asteroid (1888 Zu Chong-Zhi) are named after him.",
    "keyWorks": [
      "Zhui Shu (Method of Interpolation, lost)"
    ],
    "keyIdeas": [
      "π ≈ 355/113 (Milü), correct to 6 decimal places",
      "Correct volume formula for a sphere (with Zu Geng's principle)",
      "Calendar reform (Daming calendar, 463 AD)"
    ],
    "trivia": [
      "His π approximation was the best in the world for 900+ years.",
      "Lunar crater Tsu Chung-Chi is named for him.",
      "Asteroid 1888 Zu Chong-Zhi is named for him."
    ],
    "connections": [
      "liu-hui",
      "archimedes"
    ],
    "tags": [
      "chinese",
      "π",
      "milü"
    ]
  },
  {
    "id": "aryabhata",
    "name": "Aryabhata",
    "born": "476 AD",
    "died": "c. 550 AD",
    "era": "ancient",
    "nationality": "Indian",
    "fields": [
      "arithmetic",
      "trigonometry",
      "astronomy"
    ],
    "short": "Indian astronomer-mathematician who gave π to four decimal places and introduced sine.",
    "bio": "Aryabhata wrote the Aryabhatiya at the age of 23, in 499 AD. The work introduces the Indian sine function (jya), tabulates sines at intervals of 3°45', and gives π ≈ 3.1416 — accurate to four decimal places. He also described the rotation of Earth on its axis, hundreds of years before Copernicus, and gave a remarkably accurate value for the sidereal year. The first Indian satellite, launched in 1975, was named Aryabhata in his honor.",
    "keyWorks": [
      "Aryabhatiya (499 AD)",
      "Arya-siddhanta (lost)"
    ],
    "keyIdeas": [
      "π ≈ 62832/20000 = 3.1416",
      "Introduction of sine (jya) and versine",
      "Place-value decimal system",
      "Rotation of the Earth on its axis",
      "Method for solving indeterminate linear equations (kuttaka)"
    ],
    "trivia": [
      "Wrote Aryabhatiya at age 23.",
      "First Indian satellite (1975) named in his honor.",
      "Described Earth's rotation long before Copernicus."
    ],
    "connections": [
      "brahmagupta",
      "bhaskara-ii"
    ],
    "tags": [
      "indian",
      "π",
      "sine",
      "aryabhatiya"
    ]
  },
  {
    "id": "brahmagupta",
    "name": "Brahmagupta",
    "born": "598 AD",
    "died": "c. 668 AD",
    "era": "medieval",
    "nationality": "Indian",
    "fields": [
      "arithmetic",
      "algebra",
      "number theory"
    ],
    "short": "First mathematician to treat zero as a number with its own arithmetic rules.",
    "bio": "Brahmagupta worked in Bhillamala (modern Bhinmal, Rajasthan), which was the capital of the Gurjaradesa kingdom. His Brahmasphuṭasiddhanta (628 AD) is the earliest extant text to treat zero as a genuine number with arithmetic rules — including the famously troublesome (and wrong) 0/0 = 0. It also gives rules for arithmetic with negative numbers, Brahmagupta's formula for the area of a cyclic quadrilateral, and the Brahmagupta–Fibonacci identity. Like many Indian mathematical works, it is written entirely in elliptic verse.",
    "keyWorks": [
      "Brahmasphuṭasiddhanta (628 AD)",
      "Khandakhadyaka (665 AD)"
    ],
    "keyIdeas": [
      "Arithmetic rules for zero and negative numbers",
      "Brahmagupta's formula: area = √((s−a)(s−b)(s−c)(s−d)) for cyclic quadrilaterals",
      "Brahmagupta–Fibonacci identity: product of two sums of two squares is a sum of two squares",
      "Brahmagupta's theorem on cyclic quadrilaterals",
      "Integer solutions to Pell's equation nx² + 1 = y²"
    ],
    "trivia": [
      "Wrote his mathematics in elliptic verse, the common practice in India.",
      "First to treat zero as a number in its own right.",
      "Gave the (incorrect) 0/0 = 0 — a rare error."
    ],
    "connections": [
      "aryabhata",
      "fibonacci",
      "bhaskara-ii"
    ],
    "tags": [
      "indian",
      "zero",
      "cyclic-quadrilaterals",
      "pell"
    ]
  },
  {
    "id": "bhaskara-i",
    "name": "Bhaskara I",
    "born": "c. 600 AD",
    "died": "c. 680 AD",
    "era": "medieval",
    "nationality": "Indian",
    "fields": [
      "arithmetic",
      "trigonometry"
    ],
    "short": "Wrote the earliest known commentary on Aryabhata and gave a remarkable rational approximation for sine.",
    "bio": "Not to be confused with the later Bhaskara II, Bhaskara I was a 7th-century Indian mathematician who wrote the earliest surviving commentary on Aryabhata's Aryabhatiya. His Mahabhaskariya contains the remarkable sine approximation: sin x° ≈ 16x(180−x) / (40500 − x(180−x)), which has a maximum error under 0.0016 across [0°, 180°]. He also wrote the Laghubhaskariya, a more elementary summary.",
    "keyWorks": [
      "Mahabhaskariya",
      "Aryabhatiyabhashya",
      "Laghubhaskariya"
    ],
    "keyIdeas": [
      "Bhaskara I's sine approximation formula",
      "Earliest commentary on the Aryabhatiya"
    ],
    "trivia": [
      "Wrote the earliest surviving commentary on Aryabhata."
    ],
    "connections": [
      "aryabhata",
      "bhaskara-ii"
    ],
    "tags": [
      "indian",
      "sine",
      "aryabhatiya"
    ]
  },
  {
    "id": "bhaskara-ii",
    "name": "Bhaskara II (Bhaskaracharya)",
    "born": "1114",
    "died": "1185",
    "era": "medieval",
    "nationality": "Indian",
    "fields": [
      "algebra",
      "calculus",
      "astronomy"
    ],
    "short": "Greatest Indian mathematician of the 12th century; anticipated ideas of differential calculus.",
    "bio": "Bhaskara II was head of the astronomical observatory at Ujjain. His Siddhanta Shiromani is in four parts: Lilavati (arithmetic), Bijaganita (algebra), Grahaganita (planetary mathematics), and Goladhyaya (spheres). The Lilavati is reputedly named for his daughter; a legend claims that her wedding was ruined when a pearl from her headdress fell into the water clock, spoiling the auspicious moment. Bhaskara's work contained an embryonic form of Rolle's theorem and approximated the derivative of sine.",
    "keyWorks": [
      "Siddhanta Shiromani (1150): Lilavati, Bijaganita, Grahaganita, Goladhyaya"
    ],
    "keyIdeas": [
      "Early differential-calculus-like ideas; instantaneous motion of planets",
      "Rolle's theorem in germ form",
      "Chakravala method for solving Pell's equation",
      "Solutions of quadratic, cubic, and quartic equations"
    ],
    "trivia": [
      "Lilavati was reportedly named after his daughter.",
      "Head of the Ujjain observatory.",
      "Anticipated Rolle's theorem by ~500 years."
    ],
    "connections": [
      "aryabhata",
      "bhaskara-i",
      "brahmagupta"
    ],
    "tags": [
      "indian",
      "lilavati",
      "chakravala",
      "calculus"
    ]
  },
  {
    "id": "madhava",
    "name": "Madhava of Sangamagrama",
    "born": "c. 1340",
    "died": "c. 1425",
    "era": "medieval",
    "nationality": "Indian",
    "fields": [
      "analysis",
      "trigonometry"
    ],
    "short": "Founder of the Kerala school; developed infinite series for π, sine, and cosine two centuries before Newton and Leibniz.",
    "bio": "Madhava founded the Kerala school of astronomy and mathematics. He discovered the infinite series expansion of π (now usually called the Leibniz or Gregory–Leibniz series) about 250 years before Europe: π/4 = 1 − 1/3 + 1/5 − 1/7 + ⋯. He also found power series for sine, cosine, and arctangent. These results were preserved by his students and later by Jyeshthadeva in the Yuktibhasa (c. 1530). His direct works are nearly all lost; what survives is attributed to him via his successors.",
    "keyWorks": [
      "Works largely lost; results preserved by disciples and Jyeshthadeva"
    ],
    "keyIdeas": [
      "Madhava–Leibniz series: π/4 = 1 − 1/3 + 1/5 − …",
      "Power series for sine and cosine (Madhava–Newton series)",
      "Series for arctangent (Madhava–Gregory series)"
    ],
    "trivia": [
      "Kerala-school series predate Newton and Leibniz by 250+ years.",
      "Most of his original writings are lost."
    ],
    "connections": [
      "newton",
      "leibniz",
      "gregory-james"
    ],
    "tags": [
      "indian",
      "kerala-school",
      "infinite-series",
      "π"
    ]
  },
  {
    "id": "alkhwarizmi",
    "name": "Muhammad ibn Musa al-Khwarizmi",
    "born": "c. 780",
    "died": "c. 850",
    "era": "medieval",
    "nationality": "Persian",
    "fields": [
      "algebra",
      "arithmetic",
      "astronomy"
    ],
    "short": "Father of algebra; the words 'algebra' and 'algorithm' both derive from his name and book title.",
    "bio": "Al-Khwarizmi worked at the House of Wisdom in Baghdad during the reigns of al-Ma'mun and al-Mu'tasim. His Al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala ('The Compendious Book on Calculation by Completion and Balancing,' c. 820 AD) gives the word 'algebra' (from al-jabr). His name, Latinized as 'Algoritmi,' gave us the word 'algorithm.' He classified quadratic equations into six standard forms and described solution procedures. His On the Hindu Art of Reckoning was the main conduit bringing the Hindu–Arabic numerals to Europe.",
    "keyWorks": [
      "Al-jabr wa'l-Muqabala (c. 820)",
      "On the Hindu Art of Reckoning"
    ],
    "keyIdeas": [
      "Reduction of quadratic equations to six standard forms",
      "Systematic algebraic procedures (al-jabr and al-muqabala)",
      "Introduction of Hindu decimal system to the Islamic world (and thence Europe)"
    ],
    "trivia": [
      "'Algebra' comes from al-jabr in his book's title.",
      "'Algorithm' comes from his Latinized name, Algoritmi.",
      "Worked at Baghdad's House of Wisdom under Caliph al-Ma'mun."
    ],
    "connections": [
      "brahmagupta",
      "fibonacci"
    ],
    "tags": [
      "islamic",
      "algebra",
      "algorithm",
      "baghdad"
    ]
  },
  {
    "id": "alkindi",
    "name": "Al-Kindi",
    "born": "c. 801",
    "died": "c. 873",
    "era": "medieval",
    "nationality": "Arab",
    "fields": [
      "cryptography",
      "arithmetic"
    ],
    "short": "Polymath credited with the first known description of frequency analysis — the foundation of cryptanalysis.",
    "bio": "Abu Yusuf Ya'qub ibn Ishaq al-Sabbah al-Kindi was an Arab philosopher, mathematician, and polymath. His Risala fi Istikhraj al-Mu'amma (Manuscript on Deciphering Cryptographic Messages) contains the earliest known description of frequency analysis — the technique of breaking substitution ciphers by comparing letter frequencies with those in standard text. He also wrote on Indian numerals, popularizing them in Arabic alongside al-Khwarizmi.",
    "keyWorks": [
      "Risala fi Istikhraj al-Mu'amma",
      "On the Use of Indian Numerals"
    ],
    "keyIdeas": [
      "Frequency analysis for breaking ciphers",
      "Adoption and promotion of Indian numerals",
      "Applied mathematics to medicine and astronomy"
    ],
    "trivia": [
      "Wrote ~260 works across philosophy, mathematics, music, and medicine."
    ],
    "connections": [
      "alkhwarizmi"
    ],
    "tags": [
      "islamic",
      "cryptography",
      "baghdad"
    ]
  },
  {
    "id": "albattani",
    "name": "Al-Battani (Albatenius)",
    "born": "c. 858",
    "died": "929",
    "era": "medieval",
    "nationality": "Arab",
    "fields": [
      "trigonometry",
      "astronomy"
    ],
    "short": "Arab astronomer who determined the solar year to within 2 minutes of the modern value.",
    "bio": "Al-Battani, Latinized as Albatenius, refined Ptolemy's Almagest with new observations. He introduced systematic use of sines (rather than Greek chords), and gave the cosine rule for spherical triangles. He measured the length of the solar year at 365 days, 5 hours, 46 minutes, 24 seconds — off by a mere 2 minutes, 22 seconds from the modern value. His Kitab al-Zij was translated into Latin as De motu stellarum and influenced Copernicus and Tycho Brahe.",
    "keyWorks": [
      "Kitab al-Zij (Book of Astronomical Tables)"
    ],
    "keyIdeas": [
      "Length of the solar year accurate to ~2 minutes",
      "Cosine rule for spherical triangles",
      "Systematic use of sines over Greek chords"
    ],
    "trivia": [
      "Copernicus cites him in De revolutionibus.",
      "Lunar crater Albategnius is named for him."
    ],
    "connections": [
      "ptolemy",
      "copernicus"
    ],
    "tags": [
      "islamic",
      "trigonometry",
      "astronomy"
    ]
  },
  {
    "id": "abu-al-wafa",
    "name": "Abu al-Wafa' al-Buzjani",
    "born": "940",
    "died": "998",
    "era": "medieval",
    "nationality": "Persian",
    "fields": [
      "trigonometry",
      "geometry",
      "astronomy"
    ],
    "short": "Persian astronomer who first defined the tangent function and calculated sine tables to 8 decimal places.",
    "bio": "Abu al-Wafa' was the most accomplished trigonometer of the medieval Islamic world. He was the first to use the tangent function, and he computed tables of all six trigonometric functions accurate to within 1 in the eighth decimal place. He introduced the secant and cosecant. He also made the first known use of negative numbers in an Islamic medieval text. A lunar crater is named in his honor.",
    "keyWorks": [
      "Zij al-Wadih",
      "Kitab fi ma yahtaju ilayhi al-kuttab wa'l-'ummal min 'ilm al-hisab"
    ],
    "keyIdeas": [
      "First definition of the tangent function",
      "Introduction of secant and cosecant",
      "Sine tables accurate to 8 decimal places",
      "Spherical law of sines"
    ],
    "trivia": [
      "Lunar crater Abul Wáfa is named for him.",
      "Introduced several new trigonometric identities."
    ],
    "connections": [
      "albattani"
    ],
    "tags": [
      "islamic",
      "trigonometry",
      "tangent"
    ]
  },
  {
    "id": "ibn-al-haytham",
    "name": "Ibn al-Haytham (Alhazen)",
    "born": "c. 965",
    "died": "c. 1040",
    "era": "medieval",
    "nationality": "Arab",
    "fields": [
      "geometry",
      "optics",
      "astronomy"
    ],
    "short": "'Father of modern optics'; pioneered a method resembling mathematical induction.",
    "bio": "Abu Ali al-Hasan ibn al-Haytham worked mostly in Cairo. Caliph al-Hakim had invited him to regulate the flooding of the Nile; realizing this was impossible, he feigned madness until the Caliph's death to save his life. During years of effective house arrest he wrote his seven-volume Book of Optics (Kitab al-Manazir), which founded the modern theory of vision and inspired Kepler. He used a proto-induction proof for the sum of fourth powers, and Alhazen's problem asks: given a spherical mirror, find the point of reflection that sends a ray from A to B — unsolved analytically until 1997.",
    "keyWorks": [
      "Book of Optics (Kitab al-Manazir)",
      "On the Configuration of the World"
    ],
    "keyIdeas": [
      "Alhazen's problem of spherical reflection",
      "Proof techniques resembling mathematical induction",
      "Formula for the sum of fourth powers",
      "Experimental scientific method in optics"
    ],
    "trivia": [
      "Feigned insanity to escape execution by Caliph al-Hakim.",
      "Alhazen's problem remained unsolved algebraically until Peter Neumann's 1997 result.",
      "Lunar crater Alhazen is named for him.",
      "His portrait appears on Iraqi 10,000-dinar notes."
    ],
    "connections": [
      "kepler"
    ],
    "tags": [
      "islamic",
      "optics",
      "induction",
      "alhazen-problem"
    ]
  },
  {
    "id": "alkaraji",
    "name": "Al-Karaji",
    "born": "c. 953",
    "died": "c. 1029",
    "era": "medieval",
    "nationality": "Persian",
    "fields": [
      "algebra"
    ],
    "short": "Freed algebra from geometry and gave what is regarded as a first form of mathematical induction.",
    "bio": "Abu Bakr al-Karaji worked in Baghdad and later in his native Karaj. He is credited with the first systematic program to develop algebra as a separate discipline freed from the geometric underpinnings of the Greeks. He gave proofs by a primitive form of mathematical induction for results such as the sum-of-cubes formula 1³ + 2³ + ⋯ + n³ = (1 + 2 + ⋯ + n)². He is also traditionally credited with the triangular array later called Pascal's Triangle.",
    "keyWorks": [
      "Al-Fakhri",
      "Al-Badi",
      "Al-Kafi fi'l-Hisab"
    ],
    "keyIdeas": [
      "Separation of algebra from geometry",
      "Proto-induction for sum-of-cubes identity",
      "Polynomial arithmetic",
      "Earliest known use of the arithmetical triangle"
    ],
    "trivia": [
      "Named from the city of Karaj, near modern Tehran."
    ],
    "connections": [
      "alkhwarizmi",
      "pascal",
      "omar-khayyam"
    ],
    "tags": [
      "islamic",
      "algebra",
      "induction"
    ]
  },
  {
    "id": "omar-khayyam",
    "name": "Omar Khayyam",
    "born": "1048",
    "died": "1131",
    "era": "medieval",
    "nationality": "Persian",
    "fields": [
      "algebra",
      "geometry",
      "astronomy",
      "poetry"
    ],
    "short": "Persian poet-mathematician who gave geometric solutions for cubic equations.",
    "bio": "Ghiyath al-Din Abu'l-Fath Umar ibn Ibrahim al-Khayyam al-Nishapuri is known in the West primarily as a poet — author of the Rubaiyat — but he was also a superb mathematician and astronomer. His Treatise on Demonstration of Problems of Algebra classifies cubic equations and gives geometric solutions by intersecting conic sections. He reformed the Persian calendar (Jalali calendar, 1079), producing a year length more accurate than the Gregorian calendar would be 500 years later. He was also the first to connect Euclid's parallel postulate to quadrilaterals (now called Saccheri quadrilaterals).",
    "keyWorks": [
      "Treatise on Demonstration of Problems of Algebra",
      "Rubaiyat (poetry)",
      "Explanations of the Difficulties in the Postulates of Euclid"
    ],
    "keyIdeas": [
      "Classification and geometric solution of cubic equations",
      "Jalali calendar (1079) — more accurate than the Gregorian",
      "Early study of the parallel postulate via quadrilaterals",
      "Binomial triangle (independently of China and al-Karaji)"
    ],
    "trivia": [
      "His name 'Khayyam' means 'tent-maker' — his father's trade.",
      "The Rubaiyat became a Victorian phenomenon after FitzGerald's 1859 translation.",
      "His Jalali calendar has an error of ~1 day per 3,770 years.",
      "Lunar crater Omar Khayyam is named for him."
    ],
    "connections": [
      "alkaraji",
      "saccheri"
    ],
    "tags": [
      "islamic",
      "persia",
      "cubic",
      "rubaiyat",
      "calendar"
    ]
  },
  {
    "id": "al-tusi",
    "name": "Nasir al-Din al-Tusi",
    "born": "1201",
    "died": "1274",
    "era": "medieval",
    "nationality": "Persian",
    "fields": [
      "trigonometry",
      "astronomy"
    ],
    "short": "Persian polymath who made trigonometry an independent discipline.",
    "bio": "Al-Tusi lived through the Mongol invasions; after the fall of Alamut in 1256 he joined the court of Hulagu Khan and became director of the Maragheh Observatory. His Treatise on the Quadrilateral (1260) treats trigonometry as an independent mathematical discipline rather than a tool of astronomy. He gave the 'Tusi couple' — a mechanical device generating linear motion from two circular motions — which appears in Copernicus's lunar model three centuries later.",
    "keyWorks": [
      "Treatise on the Quadrilateral",
      "Zij-i Ilkhani"
    ],
    "keyIdeas": [
      "Trigonometry as an independent discipline",
      "Tusi couple (two circles generating linear motion)",
      "Spherical law of sines in full generality"
    ],
    "trivia": [
      "Directed the Maragheh Observatory under Hulagu Khan.",
      "Copernicus uses the Tusi couple without attribution in De revolutionibus."
    ],
    "connections": [
      "copernicus"
    ],
    "tags": [
      "islamic",
      "persia",
      "trigonometry",
      "maragheh"
    ]
  },
  {
    "id": "al-kashi",
    "name": "Jamshid al-Kashi",
    "born": "c. 1380",
    "died": "1429",
    "era": "medieval",
    "nationality": "Persian",
    "fields": [
      "arithmetic",
      "trigonometry"
    ],
    "short": "Computed π to 16 decimal places and sin(1°) to 17, records that stood for over 150 years.",
    "bio": "Al-Kashi worked at Ulugh Beg's observatory in Samarkand. In his Risala al-muhitiya (Treatise on the Circumference, 1424) he computed 2π to 16 decimal places (3×2²⁸-gon), a record unbroken for nearly two centuries. He also calculated sin(1°) to 17 decimal places and gave the law of cosines, which in French is still called the théorème d'Al-Kashi. He explained decimal fractions systematically long before Stevin.",
    "keyWorks": [
      "The Key to Arithmetic (Miftah al-Hisab, 1427)",
      "Risala al-muhitiya"
    ],
    "keyIdeas": [
      "π to 16 decimal places",
      "Law of cosines ('Théorème d'Al-Kashi')",
      "Systematic decimal fractions",
      "Iterative method for solving cubic equations to great accuracy"
    ],
    "trivia": [
      "Worked at Samarkand under Ulugh Beg.",
      "His π value stood as the world record for ~180 years, until Viète.",
      "In France, the law of cosines is called the 'Theorem of Al-Kashi.'"
    ],
    "connections": [
      "viete"
    ],
    "tags": [
      "islamic",
      "persia",
      "π",
      "samarkand",
      "cosines"
    ]
  },
  {
    "id": "fibonacci",
    "name": "Leonardo Pisano (Fibonacci)",
    "born": "c. 1170",
    "died": "c. 1250",
    "era": "medieval",
    "nationality": "Italian",
    "fields": [
      "arithmetic",
      "algebra",
      "number theory"
    ],
    "short": "Brought Hindu–Arabic numerals to Europe; the Fibonacci sequence first appeared in a problem about rabbits.",
    "bio": "Leonardo of Pisa, also called Leonardo Bonacci or Leonardo Bigollo, grew up in Bugia (modern Béjaïa, Algeria), where his father was a Pisan customs official. There he encountered Hindu–Arabic numerals and recognized their superiority to Roman numerals. His Liber Abaci (1202) popularized the new number system in Europe. The famous sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, ... appears in the Liber Abaci as a problem about how a pair of rabbits will multiply. The name 'Fibonacci' ('son of Bonacci') was applied to him only in the 19th century by the historian Guillaume Libri.",
    "keyWorks": [
      "Liber Abaci (1202)",
      "Practica Geometriae (1220)",
      "Liber Quadratorum (1225)",
      "Flos (1225)"
    ],
    "keyIdeas": [
      "Fibonacci sequence (named after him in 19th century)",
      "Popularization of Hindu–Arabic numerals in Europe",
      "Brahmagupta–Fibonacci identity (independently rediscovered)",
      "Congruum problem: x² + c = y², x² − c = z²"
    ],
    "trivia": [
      "First learned Arabic numerals in Bugia, Algeria.",
      "The 'rabbits' problem in Liber Abaci produces the sequence.",
      "The name 'Fibonacci' was coined in the 19th century.",
      "Emperor Frederick II held a mathematical tournament in which Fibonacci solved several problems; they appear in Flos."
    ],
    "connections": [
      "brahmagupta",
      "alkhwarizmi"
    ],
    "tags": [
      "medieval",
      "liber-abaci",
      "rabbits",
      "hindu-arabic"
    ]
  },
  {
    "id": "oresme",
    "name": "Nicole Oresme",
    "born": "c. 1320",
    "died": "1382",
    "era": "medieval",
    "nationality": "French",
    "fields": [
      "analysis",
      "economics",
      "physics"
    ],
    "short": "14th-century French thinker who proved the harmonic series diverges.",
    "bio": "Nicole Oresme was a 14th-century French polymath — theologian, economist, philosopher, physicist, and mathematician — who eventually became Bishop of Lisieux. He gave the first known proof that the harmonic series 1 + 1/2 + 1/3 + 1/4 + ⋯ diverges, grouping terms as 1 + 1/2 + (1/3 + 1/4) + (1/5 + … + 1/8) + … and bounding each group below by 1/2. He wrote extensively on the rationality of exponents, and produced the Treatise on the Configurations of Qualities and Motions which graphed motion in a way that prefigured analytic geometry.",
    "keyWorks": [
      "Treatise on the Configurations of Qualities and Motions",
      "Algorismus proportionum"
    ],
    "keyIdeas": [
      "Divergence of the harmonic series",
      "Graphical representation of functions (prefiguring analytic geometry)",
      "Mean-speed theorem (equivalent to uniformly accelerated motion distance formula)",
      "Fractional exponents"
    ],
    "trivia": [
      "Gave the first known proof of the divergence of the harmonic series.",
      "Bishop of Lisieux from 1377."
    ],
    "connections": [
      "oxford-calculators"
    ],
    "tags": [
      "medieval",
      "harmonic-series",
      "france"
    ]
  },
  {
    "id": "regiomontanus",
    "name": "Johann Müller Regiomontanus",
    "born": "June 6, 1436",
    "died": "July 6, 1476",
    "era": "renaissance",
    "nationality": "German",
    "fields": [
      "trigonometry",
      "astronomy"
    ],
    "short": "German mathematician who revived Greek mathematics in Renaissance Europe; died mysteriously in Rome.",
    "bio": "Johannes Müller, called Regiomontanus after the Latinized form of his native Königsberg, studied under Georg von Peuerbach at Vienna. His De Triangulis omnimodis (1464, published 1533) was the first systematic treatment of trigonometry in Europe independent of astronomy. He rediscovered a Greek manuscript of Diophantus, setting in motion the revival of European number theory. Called to Rome by Pope Sixtus IV in 1475 to reform the calendar, he died there the following year under mysterious circumstances — some said poisoned.",
    "keyWorks": [
      "De Triangulis omnimodis (1464)",
      "Epytoma in almagesti Ptolemei"
    ],
    "keyIdeas": [
      "First systematic European treatment of trigonometry",
      "Rediscovery of Diophantus's Arithmetica",
      "Law of sines for plane triangles"
    ],
    "trivia": [
      "Died in Rome in 1476, possibly poisoned.",
      "Named after his birthplace, Königsberg ('King's Mountain' → Regiomontanus).",
      "Rediscovered Diophantus in Venice, 1463."
    ],
    "connections": [
      "diophantus"
    ],
    "tags": [
      "renaissance",
      "trigonometry",
      "germany"
    ]
  },
  {
    "id": "pacioli",
    "name": "Luca Pacioli",
    "born": "1445",
    "died": "June 19, 1517",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "arithmetic",
      "accounting",
      "geometry"
    ],
    "short": "Franciscan friar who wrote the first printed treatise on double-entry bookkeeping.",
    "bio": "Pacioli was a Franciscan friar and friend of Leonardo da Vinci, who illustrated his De Divina Proportione (1509) on the golden ratio. Pacioli's Summa de arithmetica, geometria, proportioni et proportionalita (1494) is a huge encyclopedic textbook; one section, Particularis de computis et scripturis, is the first printed work on double-entry bookkeeping — earning Pacioli the title 'father of accounting.' He also compiled a manuscript on the game of chess, De Ludo Scachorum, which was rediscovered in 2006.",
    "keyWorks": [
      "Summa de arithmetica (1494)",
      "De Divina Proportione (1509)",
      "De Ludo Scachorum"
    ],
    "keyIdeas": [
      "Double-entry bookkeeping systematized",
      "Popularization of the golden ratio",
      "Early mathematical treatment of games of chance"
    ],
    "trivia": [
      "Friend of and teacher to Leonardo da Vinci.",
      "Called the 'father of accounting.'",
      "His chess book was rediscovered in 2006 in a private Italian library."
    ],
    "connections": [
      "leonardo-da-vinci"
    ],
    "tags": [
      "renaissance",
      "italy",
      "accounting",
      "golden-ratio"
    ]
  },
  {
    "id": "leonardo-da-vinci",
    "name": "Leonardo da Vinci",
    "born": "April 15, 1452",
    "died": "May 2, 1519",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "geometry",
      "engineering",
      "art"
    ],
    "short": "Though primarily known as an artist, Leonardo applied geometry to art, anatomy, and engineering.",
    "bio": "Leonardo collaborated with Luca Pacioli on De Divina Proportione, for which he drew the celebrated plates of the Platonic solids in wireframe form — the first such illustrations. He used geometry extensively in his studies of perspective, anatomy (Vitruvian Man, 1490), and optical mixing. His notebooks contain thousands of mathematical sketches, including attempts to square the circle.",
    "keyWorks": [
      "Illustrations for Pacioli's De Divina Proportione (1509)",
      "Codex Atlanticus",
      "Codex Leicester"
    ],
    "keyIdeas": [
      "Geometrical perspective in painting",
      "Wireframe representations of polyhedra",
      "Mechanical advantage and statics"
    ],
    "trivia": [
      "Drew the wireframe Platonic solids for Pacioli in 1509.",
      "The Vitruvian Man is a geometric study of human proportions."
    ],
    "connections": [
      "pacioli"
    ],
    "tags": [
      "renaissance",
      "italy",
      "art",
      "polyhedra"
    ]
  },
  {
    "id": "copernicus",
    "name": "Nicolaus Copernicus",
    "born": "February 19, 1473",
    "died": "May 24, 1543",
    "era": "renaissance",
    "nationality": "Polish",
    "fields": [
      "astronomy",
      "trigonometry"
    ],
    "short": "Displaced Earth from the center of the cosmos in his De revolutionibus, published on his deathbed.",
    "bio": "Nicolaus Copernicus was born in Toruń in Royal Prussia. His De revolutionibus orbium coelestium (On the Revolutions of the Celestial Spheres, 1543) proposed a heliocentric model, displacing Ptolemy's Earth-centered cosmos. Legend says he received the first printed copy on his deathbed. Copernicus's lunar model uses the 'Tusi couple' of Nasir al-Din al-Tusi without credit. He was also an economist: 'Gresham's Law' (bad money drives out good) was clearly formulated by him, and is sometimes called the Copernicus–Gresham Law.",
    "keyWorks": [
      "De revolutionibus orbium coelestium (1543)",
      "Commentariolus (c. 1514)"
    ],
    "keyIdeas": [
      "Heliocentric cosmology",
      "Copernicus's theorem on special cases of the Tusi couple",
      "Monetary economics (bad money drives out good)"
    ],
    "trivia": [
      "Received the first printed copy of De revolutionibus on his deathbed.",
      "His book was placed on the Catholic Index in 1616.",
      "'Gresham's Law' was anticipated by Copernicus."
    ],
    "connections": [
      "ptolemy",
      "al-tusi",
      "kepler"
    ],
    "tags": [
      "renaissance",
      "heliocentric",
      "poland"
    ]
  },
  {
    "id": "cardano",
    "name": "Gerolamo Cardano",
    "born": "September 24, 1501",
    "died": "September 21, 1576",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "algebra",
      "probability",
      "medicine"
    ],
    "short": "Published the solution to the cubic (obtained from Tartaglia under oath) in his Ars Magna.",
    "bio": "Gerolamo Cardano was a physician, astrologer, gambler, and mathematician. In Ars Magna (1545) he published the formulas for solving cubic and quartic equations — the cubic from Niccolò Tartaglia (obtained under an oath of secrecy Cardano later broke) and the quartic from his own student Lodovico Ferrari. Ars Magna contains the first calculations involving square roots of negative numbers. He also wrote Liber de ludo aleae (on games of chance), the first work on systematic probability. He cast his own horoscope to predict the day of his death, and it is said that he stopped eating to make the prediction come true.",
    "keyWorks": [
      "Ars Magna (1545)",
      "Liber de ludo aleae (pub. 1663)",
      "De Subtilitate"
    ],
    "keyIdeas": [
      "Solutions to cubic and quartic equations",
      "First use of imaginary numbers",
      "Early systematic probability theory",
      "Cardan joint / universal joint"
    ],
    "trivia": [
      "Obtained the cubic formula from Tartaglia under an oath he later broke.",
      "Reportedly starved himself to make his own death prediction come true.",
      "Imprisoned for heresy in 1570 for casting the horoscope of Jesus.",
      "The cardan joint on modern cars is named for him."
    ],
    "connections": [
      "tartaglia",
      "ferrari",
      "bombelli"
    ],
    "tags": [
      "renaissance",
      "italy",
      "cubic",
      "probability"
    ]
  },
  {
    "id": "tartaglia",
    "name": "Niccolò Fontana Tartaglia",
    "born": "1499/1500",
    "died": "December 13, 1557",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "algebra",
      "ballistics"
    ],
    "short": "Discovered a general method for solving depressed cubic equations; betrayed by Cardano.",
    "bio": "As a boy during the French sack of Brescia in 1512, Niccolò's face was slashed by a sabre; the injury left him with a speech impediment, hence 'Tartaglia' — 'the stammerer.' Working mostly in Venice as a teacher, he discovered (independently of Scipione del Ferro) a general solution for cubics of the form x³ + px = q. He bested Antonio Fior in a public mathematical duel in 1535 by solving many cubics. Cardano convinced him to share the method under oath; Cardano later published it in the Ars Magna (1545), precipitating one of the most famous feuds in mathematical history.",
    "keyWorks": [
      "General Trattato (1556–60)",
      "Nova Scientia (1537)"
    ],
    "keyIdeas": [
      "Solution of the depressed cubic",
      "Early treatment of projectile trajectories",
      "First Italian translation of Euclid (1543)"
    ],
    "trivia": [
      "Nicknamed 'Tartaglia' ('stammerer') after a childhood sabre wound.",
      "Won a famous public math duel of cubics in 1535.",
      "Feuded with Cardano for a decade over credit.",
      "First to translate Euclid into Italian."
    ],
    "connections": [
      "cardano",
      "ferrari"
    ],
    "tags": [
      "renaissance",
      "italy",
      "cubic"
    ]
  },
  {
    "id": "ferrari",
    "name": "Lodovico Ferrari",
    "born": "February 2, 1522",
    "died": "October 5, 1565",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "algebra"
    ],
    "short": "Cardano's brilliant student who discovered the general solution to the quartic equation.",
    "bio": "Ferrari became Cardano's servant at age 14 and was soon his student. By 18 he had solved the general quartic equation, reducing it to a resolvent cubic. He defended Cardano against Tartaglia in a public contest in Milan (1548) and won. He later served as a tax assessor for the governor of Milan, accumulated wealth, and died — according to legend — poisoned by his own sister with arsenic for his inheritance.",
    "keyWorks": [
      "Solution published in Cardano's Ars Magna (1545)"
    ],
    "keyIdeas": [
      "Solution of the general quartic equation via resolvent cubic"
    ],
    "trivia": [
      "Entered Cardano's household at 14 as a servant.",
      "Solved the quartic by age 18.",
      "Died at 43, reportedly poisoned by his sister with arsenic."
    ],
    "connections": [
      "cardano",
      "tartaglia"
    ],
    "tags": [
      "renaissance",
      "italy",
      "quartic"
    ]
  },
  {
    "id": "bombelli",
    "name": "Rafael Bombelli",
    "born": "1526",
    "died": "1572",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "algebra"
    ],
    "short": "Gave the first rigorous treatment of complex numbers.",
    "bio": "Bombelli was a hydraulic engineer from Bologna. His Algebra (1572) gave the first systematic set of rules for arithmetic with complex numbers — he called √(−1) 'piu di meno' and gave rules like (piu di meno)(piu di meno) = meno. He applied these rules to show that Cardano's formula, when it produced square roots of negatives (the so-called 'casus irreducibilis'), still gave correct real answers. His work made complex numbers respectable.",
    "keyWorks": [
      "L'Algebra (1572)"
    ],
    "keyIdeas": [
      "First rigorous arithmetic of complex numbers",
      "Resolution of the casus irreducibilis of the cubic"
    ],
    "trivia": [
      "Trained as a hydraulic engineer, not an academic mathematician."
    ],
    "connections": [
      "cardano"
    ],
    "tags": [
      "renaissance",
      "italy",
      "complex-numbers"
    ]
  },
  {
    "id": "viete",
    "name": "François Viète",
    "born": "1540",
    "died": "February 23, 1603",
    "era": "renaissance",
    "nationality": "French",
    "fields": [
      "algebra",
      "trigonometry"
    ],
    "short": "'Father of modern algebra'; introduced systematic symbolic notation and broke Spanish ciphers for Henry IV.",
    "bio": "Viète, also known by his Latin name Vieta, was a French lawyer, cryptographer, and mathematician. His In artem analyticem isagoge (1591) introduced letters for both known constants (consonants) and unknowns (vowels) — a crucial step toward modern symbolic algebra. He gave the first infinite-product formula for π. As cryptographer to Henry IV, he broke a complex cipher the Spanish were using; King Philip II of Spain complained to the Pope that sorcery was being used.",
    "keyWorks": [
      "In artem analyticem isagoge (1591)",
      "De numerosa potestatum resolutione"
    ],
    "keyIdeas": [
      "Symbolic algebra: letters for knowns and unknowns",
      "First infinite-product formula for π",
      "Viète's formulas relating roots and coefficients of polynomials",
      "Solution of a 45-degree equation posed by Adriaan van Roomen"
    ],
    "trivia": [
      "Cryptographer to Henry IV of France.",
      "Philip II of Spain accused him of sorcery for breaking Spanish codes.",
      "Solved a 45-degree equation in minutes, stunning the Dutch mathematical community."
    ],
    "connections": [
      "al-kashi",
      "descartes"
    ],
    "tags": [
      "renaissance",
      "france",
      "algebra",
      "cryptography",
      "π"
    ]
  },
  {
    "id": "stevin",
    "name": "Simon Stevin",
    "born": "1548",
    "died": "February 1620",
    "era": "renaissance",
    "nationality": "Flemish",
    "fields": [
      "arithmetic",
      "physics",
      "engineering"
    ],
    "short": "Flemish mathematician who systematized decimal fractions for Europe.",
    "bio": "Stevin was a Flemish mathematician, engineer, and officer in the Dutch States Army. His De Thiende (The Tenth, 1585) popularized decimal fractions in Europe, though he used a cumbersome notation. He designed land-yachts for Prince Maurice of Orange that famously outran horses on the beach near Scheveningen. He also disproved Aristotle's claim that heavier bodies fall faster by a public experiment from Delft's church tower — decades before Galileo at Pisa.",
    "keyWorks": [
      "De Thiende (1585)",
      "De Beghinselen der Weeghconst",
      "L'Arithmétique"
    ],
    "keyIdeas": [
      "Systematic decimal fractions for practical calculation",
      "Triangle of forces in statics",
      "Hydrostatic paradox (pressure depends only on depth)"
    ],
    "trivia": [
      "Designed a sand-yacht that outran horses on the beach.",
      "Disproved Aristotle's falling-bodies claim before Galileo."
    ],
    "connections": [
      "galileo"
    ],
    "tags": [
      "renaissance",
      "flemish",
      "decimals"
    ]
  },
  {
    "id": "napier",
    "name": "John Napier",
    "born": "1550",
    "died": "April 4, 1617",
    "era": "renaissance",
    "nationality": "Scottish",
    "fields": [
      "arithmetic",
      "logarithms"
    ],
    "short": "Scottish laird who invented logarithms and 'Napier's bones' for multiplication.",
    "bio": "John Napier of Merchiston was a Scottish landowner, mathematician, and theologian. His Mirifici Logarithmorum Canonis Descriptio (1614) introduced logarithms, for which he used the term 'artificial numbers' before coining 'logarithmos' from Greek 'logos' (ratio) and 'arithmos' (number). His tables took 20 years to compute. He also invented 'Napier's bones' — a set of rods engraved with multiplication tables that simplified calculation. He was deeply religious and regarded his anti-Catholic treatise on the Book of Revelation as his most important work.",
    "keyWorks": [
      "Mirifici Logarithmorum Canonis Descriptio (1614)",
      "Rabdologia (1617)"
    ],
    "keyIdeas": [
      "Invention of logarithms",
      "Napier's bones (multiplication rods)",
      "Decimal point notation popularization"
    ],
    "trivia": [
      "Took 20 years to compute his logarithm tables.",
      "Regarded his theological work on Revelation as more important than his math.",
      "Famously paranoid: had a black rooster 'witch-detector.'",
      "His contemporaries thought his math skills came from dealings with the devil."
    ],
    "connections": [
      "briggs"
    ],
    "tags": [
      "renaissance",
      "scotland",
      "logarithms"
    ]
  },
  {
    "id": "briggs",
    "name": "Henry Briggs",
    "born": "February 1561",
    "died": "January 26, 1630",
    "era": "renaissance",
    "nationality": "English",
    "fields": [
      "logarithms"
    ],
    "short": "First Savilian Professor of Geometry at Oxford; converted Napier's logarithms to base 10.",
    "bio": "Briggs was the first Gresham Professor of Geometry in London and later the first Savilian Professor of Geometry at Oxford. After reading Napier's 1614 work he traveled to Edinburgh to meet Napier, and proposed base-10 logarithms (common logarithms). His Arithmetica Logarithmica (1624) tabulated log(1) through log(20,000) and log(90,001) through log(100,000), each to 14 decimal places.",
    "keyWorks": [
      "Arithmetica Logarithmica (1624)",
      "Trigonometria Britannica (1633, posthumous)"
    ],
    "keyIdeas": [
      "Common (base-10) logarithms",
      "14-decimal tables of logarithms"
    ],
    "trivia": [
      "First Savilian Professor of Geometry at Oxford.",
      "Filled the gap 20,000 to 90,000 in logarithm tables by arranging for others to complete it posthumously."
    ],
    "connections": [
      "napier"
    ],
    "tags": [
      "renaissance",
      "england",
      "logarithms"
    ]
  },
  {
    "id": "kepler",
    "name": "Johannes Kepler",
    "born": "December 27, 1571",
    "died": "November 15, 1630",
    "era": "renaissance",
    "nationality": "German",
    "fields": [
      "astronomy",
      "optics",
      "geometry"
    ],
    "short": "Discovered the three laws of planetary motion; first to state the sphere-packing conjecture.",
    "bio": "Kepler succeeded Tycho Brahe as imperial mathematician in Prague. Using Tycho's data on Mars he derived his three laws of planetary motion: (1) planets move in ellipses with the Sun at one focus (1609), (2) equal areas in equal times (1609), and (3) T² ∝ a³ (1619). His Stereometria doliorum vinariorum (1615) on computing the volumes of wine casks is a direct precursor of integral calculus. In 1611 he conjectured that the densest packing of equal spheres is the face-centered cubic (π/√18 ≈ 74%); the Kepler conjecture was only proved in 1998 by Thomas Hales. Kepler's mother was tried as a witch in 1615; Kepler spent six years defending her and she was eventually released.",
    "keyWorks": [
      "Astronomia Nova (1609)",
      "Harmonices Mundi (1619)",
      "Mysterium Cosmographicum (1596)",
      "Stereometria (1615)"
    ],
    "keyIdeas": [
      "Three laws of planetary motion",
      "Kepler conjecture on sphere packing",
      "Kepler's Supernova (1604)",
      "Proto-integration in computing volumes of revolution",
      "Structure of the snowflake — six-sided symmetry"
    ],
    "trivia": [
      "His mother Katharina was tried as a witch; Kepler defended her for 6 years.",
      "Kepler conjecture proved only in 1998 (Hales).",
      "Succeeded Tycho Brahe as imperial mathematician.",
      "Died of fever on a journey to collect money owed to him."
    ],
    "connections": [
      "galileo",
      "copernicus"
    ],
    "tags": [
      "renaissance",
      "germany",
      "planets",
      "sphere-packing"
    ]
  },
  {
    "id": "galileo",
    "name": "Galileo Galilei",
    "born": "February 15, 1564",
    "died": "January 8, 1642",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "physics",
      "astronomy",
      "geometry"
    ],
    "short": "Physicist and astronomer who declared that 'the book of nature is written in the language of mathematics.'",
    "bio": "Galileo was born in Pisa. He turned the newly invented telescope to the heavens in 1609 and discovered the moons of Jupiter (the Galilean moons), the phases of Venus, and sunspots. His Sidereus Nuncius (1610) and Dialogue Concerning the Two Chief World Systems (1632) advocated Copernicanism; he was tried by the Inquisition in 1633 and spent the rest of his life under house arrest. His Discourses (1638) derived the parabolic trajectory of projectiles and gave the first modern law of uniform acceleration for falling bodies: distance ∝ t².",
    "keyWorks": [
      "Sidereus Nuncius (1610)",
      "Dialogue Concerning the Two Chief World Systems (1632)",
      "Discourses on Two New Sciences (1638)"
    ],
    "keyIdeas": [
      "Law of falling bodies: distance proportional to t²",
      "Parabolic trajectory of projectiles",
      "Pendulum isochronism",
      "Galilean relativity (laws of motion unchanged in uniformly moving frames)"
    ],
    "trivia": [
      "Tried by the Inquisition in 1633 for heliocentrism.",
      "Said to have muttered 'eppur si muove' — 'and yet it moves.'",
      "Discovered the moons of Jupiter, now called the Galilean moons.",
      "Vatican formally rehabilitated him in 1992."
    ],
    "connections": [
      "kepler",
      "cavalieri"
    ],
    "tags": [
      "renaissance",
      "italy",
      "astronomy",
      "mechanics"
    ]
  },
  {
    "id": "cavalieri",
    "name": "Bonaventura Cavalieri",
    "born": "1598",
    "died": "November 30, 1647",
    "era": "renaissance",
    "nationality": "Italian",
    "fields": [
      "geometry",
      "analysis"
    ],
    "short": "Student of Galileo whose 'method of indivisibles' was a precursor of integral calculus.",
    "bio": "Cavalieri was a Jesuate (not Jesuit) monk and student of Galileo. His Geometria indivisibilibus continuorum (1635) developed the method of indivisibles: two solids have equal volumes if every plane parallel to some fixed plane cuts them in cross-sections of equal area. This is now known as Cavalieri's principle and is an important stepping-stone between Archimedes' method of exhaustion and Newton/Leibniz calculus.",
    "keyWorks": [
      "Geometria indivisibilibus continuorum (1635)"
    ],
    "keyIdeas": [
      "Cavalieri's principle for areas and volumes",
      "Method of indivisibles",
      "Logarithmic tables"
    ],
    "trivia": [
      "Student of Galileo.",
      "A Jesuate (a now-extinct order), not a Jesuit."
    ],
    "connections": [
      "galileo"
    ],
    "tags": [
      "renaissance",
      "italy",
      "indivisibles"
    ]
  },
  {
    "id": "descartes",
    "name": "René Descartes",
    "born": "March 31, 1596",
    "died": "February 11, 1650",
    "era": "renaissance",
    "nationality": "French",
    "fields": [
      "geometry",
      "philosophy"
    ],
    "short": "'I think, therefore I am'; founder of analytic geometry, where curves meet equations.",
    "bio": "Descartes was a French philosopher-mathematician who spent much of his life in the Dutch Republic. His La Géométrie (1637), published as an appendix to the Discourse on Method, founded analytic geometry by representing geometric curves with algebraic equations in a coordinate system — now called Cartesian coordinates. He introduced the convention of using letters at the beginning of the alphabet for constants (a, b, c) and letters at the end for unknowns (x, y, z). He died of pneumonia in Stockholm in 1650, having been induced by Queen Christina of Sweden to tutor her at 5 a.m. in winter.",
    "keyWorks": [
      "Discours de la méthode + La Géométrie (1637)",
      "Meditations (1641)"
    ],
    "keyIdeas": [
      "Cartesian coordinates",
      "Analytic geometry: curves as equations",
      "Method of tangents (before differential calculus)",
      "Rule of signs for counting positive and negative roots of polynomials",
      "Use of exponent notation x²"
    ],
    "trivia": [
      "Died of pneumonia in Stockholm, 1650.",
      "Tutored Queen Christina of Sweden at 5 a.m. in winter.",
      "Convention: a,b,c for constants, x,y,z for unknowns comes from La Géométrie.",
      "Legend says he thought of coordinate geometry watching a fly on the ceiling."
    ],
    "connections": [
      "fermat",
      "viete"
    ],
    "tags": [
      "renaissance",
      "france",
      "analytic-geometry"
    ]
  },
  {
    "id": "fermat",
    "name": "Pierre de Fermat",
    "born": "August 17, 1601",
    "died": "January 12, 1665",
    "era": "renaissance",
    "nationality": "French",
    "fields": [
      "number theory",
      "analytic geometry",
      "probability"
    ],
    "short": "Toulouse lawyer whose 'Last Theorem' marginal note launched 358 years of number-theoretic adventure.",
    "bio": "Fermat was a French lawyer at the Parlement of Toulouse who pursued mathematics as a hobby but made first-rate contributions. He independently developed analytic geometry before Descartes, pioneered probability theory in correspondence with Pascal (1654), and founded modern number theory. In the margin of his copy of Diophantus he wrote that he had a 'truly marvelous proof' that xⁿ + yⁿ = zⁿ has no nontrivial integer solutions for n > 2, but the margin was too small to contain it. Fermat's Last Theorem was only proved by Andrew Wiles in 1994 (published 1995).",
    "keyWorks": [
      "Observations on Diophantus (published posthumously 1670)",
      "Correspondence"
    ],
    "keyIdeas": [
      "Fermat's Last Theorem (proved 1994 by Wiles)",
      "Fermat's Little Theorem: aᵖ ≡ a (mod p) for p prime",
      "Method of infinite descent",
      "Fermat primes: 2^(2ⁿ) + 1",
      "Fermat's principle in optics: light takes the path of least time",
      "Method of adequality (proto-differentiation)"
    ],
    "trivia": [
      "A lawyer, not a professional mathematician.",
      "Never published a book; his son Samuel edited his works posthumously.",
      "Fermat's Last Theorem took 358 years to prove.",
      "His correspondence with Pascal (1654) founded probability theory.",
      "Fermat primes: F₀=3, F₁=5, F₂=17, F₃=257, F₄=65537 — only known ones."
    ],
    "connections": [
      "pascal",
      "descartes",
      "wiles",
      "euler"
    ],
    "tags": [
      "renaissance",
      "france",
      "number-theory",
      "last-theorem"
    ]
  },
  {
    "id": "pascal",
    "name": "Blaise Pascal",
    "born": "June 19, 1623",
    "died": "August 19, 1662",
    "era": "renaissance",
    "nationality": "French",
    "fields": [
      "probability",
      "geometry",
      "philosophy"
    ],
    "short": "Invented a mechanical calculator at 19; co-founder of probability theory with Fermat.",
    "bio": "A prodigy, Pascal at 16 wrote an essay on conics that Descartes refused to believe was by a 16-year-old. At 19 he built the Pascaline, one of the first mechanical calculators, to help his tax-collector father. His 1654 correspondence with Fermat on the 'problem of points' — how to fairly divide stakes in an unfinished game of chance — founded probability theory. He arranged binomial coefficients in 'Pascal's Triangle' (though Jia Xian, al-Karaji, Omar Khayyam, Yang Hui and others had it earlier) and proved many of its properties by induction. After a religious conversion in 1654 (the 'Night of Fire'), he largely abandoned mathematics for theology. His posthumous Pensées is a classic of French literature. Pascal's Wager argues that it is rational to believe in God because the expected gain dominates the expected loss.",
    "keyWorks": [
      "Traité du triangle arithmétique (1654)",
      "Provincial Letters",
      "Pensées (1670, posthumous)"
    ],
    "keyIdeas": [
      "Pascal's Triangle and binomial coefficients",
      "Founding of probability theory (with Fermat)",
      "Pascal's Theorem on cyclic hexagons (age 16)",
      "Pascal's Wager",
      "Mechanical calculator (Pascaline, 1642)",
      "Pascal's principle in fluid mechanics"
    ],
    "trivia": [
      "Built the Pascaline mechanical calculator at age 19.",
      "Published his hexagon theorem on conics at 16.",
      "'Night of Fire' conversion on November 23, 1654.",
      "Died at 39, his body emaciated.",
      "The SI unit of pressure (pascal, Pa) is named for him.",
      "Pascal programming language (1970) also honors him."
    ],
    "connections": [
      "fermat",
      "desargues",
      "descartes"
    ],
    "tags": [
      "renaissance",
      "france",
      "probability",
      "triangle",
      "wager"
    ]
  },
  {
    "id": "desargues",
    "name": "Girard Desargues",
    "born": "February 21, 1591",
    "died": "September 1661",
    "era": "renaissance",
    "nationality": "French",
    "fields": [
      "projective geometry"
    ],
    "short": "Architect and engineer who founded projective geometry.",
    "bio": "Desargues was an architect and military engineer from Lyon. His 1639 Brouillon project founded projective geometry. Desargues' Theorem states that two triangles are in perspective from a point if and only if they are in perspective from a line. His revolutionary treatment included points at infinity. His work was so obscurely written (and used botanical terminology for mathematical objects) that it was virtually lost until 1822, when Michel Chasles found a manuscript copy made by La Hire. Projective geometry as a discipline was then effectively re-founded by Poncelet.",
    "keyWorks": [
      "Brouillon project d'une atteinte aux événements des rencontres du cône avec un plan (1639)"
    ],
    "keyIdeas": [
      "Desargues's Theorem on perspective triangles",
      "Points at infinity",
      "Systematic use of projective transformations"
    ],
    "trivia": [
      "Used botanical vocabulary for mathematical terms — contributing to the obscurity of his work.",
      "His manuscript was rediscovered by Chasles in 1822."
    ],
    "connections": [
      "pascal",
      "poncelet"
    ],
    "tags": [
      "renaissance",
      "france",
      "projective"
    ]
  },
  {
    "id": "huygens",
    "name": "Christiaan Huygens",
    "born": "April 14, 1629",
    "died": "July 8, 1695",
    "era": "enlightenment",
    "nationality": "Dutch",
    "fields": [
      "probability",
      "astronomy",
      "physics"
    ],
    "short": "Dutch polymath; discovered the rings of Saturn and wrote the first textbook on probability.",
    "bio": "Huygens was a Dutch astronomer, physicist, and mathematician. He discovered Titan (1655), the first moon of Saturn, and was the first to recognize Saturn's rings for what they are. His De Ratiociniis in Ludo Aleae (1657) was the first printed book on probability theory, predating Pascal and Fermat's correspondence being published. He invented the pendulum clock (1656), making accurate timekeeping possible, and worked out the mathematical theory of evolutes (curves formed from centers of curvature).",
    "keyWorks": [
      "De Ratiociniis in Ludo Aleae (1657)",
      "Horologium Oscillatorium (1673)",
      "Systema Saturnium (1659)"
    ],
    "keyIdeas": [
      "First printed textbook on probability",
      "Pendulum clock",
      "Evolutes of plane curves",
      "Wave theory of light (Huygens' principle)",
      "Mathematical theory of isochronous oscillation"
    ],
    "trivia": [
      "Discovered Titan (1655) and Saturn's rings.",
      "Invented the pendulum clock (1656).",
      "His wave theory of light competed with Newton's corpuscular theory.",
      "The Huygens probe landed on Titan in 2005."
    ],
    "connections": [
      "pascal",
      "newton",
      "leibniz"
    ],
    "tags": [
      "enlightenment",
      "netherlands",
      "probability",
      "saturn"
    ]
  },
  {
    "id": "newton",
    "name": "Sir Isaac Newton",
    "born": "December 25, 1642 (O.S.)",
    "died": "March 20, 1727 (O.S.)",
    "era": "enlightenment",
    "nationality": "English",
    "fields": [
      "calculus",
      "physics",
      "optics"
    ],
    "short": "Co-inventor of calculus, formulator of universal gravitation, and often called the greatest scientist of all time.",
    "bio": "Newton was born prematurely on Christmas Day 1642 in Woolsthorpe-by-Colsterworth, Lincolnshire. During the plague years 1665–66, while Cambridge was closed, he invented what he called 'fluxions' (calculus), began to develop his theory of colors, and conceived his universal law of gravitation — his 'annus mirabilis.' As Lucasian Professor he published Philosophiæ Naturalis Principia Mathematica (1687), which formulated his three laws of motion and inverse-square gravitation. He was Master of the Royal Mint (1699) and President of the Royal Society (1703). He engaged in a bitter priority dispute with Leibniz over calculus that poisoned English–Continental mathematical relations for a century. He was the first scientist to be knighted (1705), by Queen Anne.",
    "keyWorks": [
      "Principia Mathematica (1687)",
      "Opticks (1704)",
      "De Analysi per Aequationes Numero Terminorum Infinitas (1669, pub. 1711)",
      "Method of Fluxions (1671, pub. 1736)"
    ],
    "keyIdeas": [
      "Calculus (method of fluxions)",
      "Three laws of motion",
      "Universal gravitation",
      "Newton's method for roots of equations",
      "Binomial theorem for arbitrary exponents",
      "Generalization of the binomial theorem to fractional powers",
      "Color theory of light",
      "Reflecting telescope"
    ],
    "trivia": [
      "Born Christmas Day 1642, so small he could 'fit in a quart mug.'",
      "Never married.",
      "Master of the Royal Mint from 1699.",
      "First scientist knighted (1705).",
      "Famously saw a falling apple in his mother's garden at Woolsthorpe.",
      "Buried in Westminster Abbey.",
      "Had a breakdown after burning manuscripts in 1693.",
      "Fought a priority war with Leibniz over calculus.",
      "Wrote more on alchemy and biblical chronology than on physics."
    ],
    "connections": [
      "leibniz",
      "halley"
    ],
    "tags": [
      "enlightenment",
      "england",
      "calculus",
      "gravity",
      "principia"
    ]
  },
  {
    "id": "leibniz",
    "name": "Gottfried Wilhelm Leibniz",
    "born": "July 1, 1646",
    "died": "November 14, 1716",
    "era": "enlightenment",
    "nationality": "German",
    "fields": [
      "calculus",
      "logic",
      "philosophy"
    ],
    "short": "Co-inventor of calculus; devised the notation we use today (dy/dx, ∫).",
    "bio": "Leibniz was a universal genius — philosopher, mathematician, diplomat, librarian, historian, and inventor. He developed calculus independently of Newton, published it first (1684 for differentials, 1686 for integrals), and gave the notation (dx, dy, ∫) that survives. He invented a mechanical calculator (the Stepped Reckoner) capable of multiplication and division, devised the binary number system (explicitly connecting it to the I Ching), and laid foundations of formal logic that anticipated Boole. He served the Electors of Hanover; when his employer became King George I of Britain, Leibniz was deliberately left behind in Hanover — a casualty of the Newton priority war. He died largely forgotten, with only his secretary at the funeral.",
    "keyWorks": [
      "Nova Methodus (1684)",
      "Acta Eruditorum papers",
      "Monadology (1714)",
      "Dissertatio de arte combinatoria (1666)"
    ],
    "keyIdeas": [
      "Calculus notation: dy/dx, ∫",
      "Binary arithmetic",
      "Pre-established harmony of monads",
      "Law of continuity",
      "Principle of sufficient reason",
      "Characteristica universalis — a dream of a universal logical language",
      "Determinants (ahead of Cramer)",
      "Mechanical calculator (Stepped Reckoner)"
    ],
    "trivia": [
      "Independently invented calculus; Newton feud dominated the later 17th century.",
      "Linked binary arithmetic to the I Ching hexagrams.",
      "Built a mechanical calculator (Stepped Reckoner).",
      "Only his secretary attended his funeral.",
      "'Best of all possible worlds' — satirized by Voltaire in Candide.",
      "Leibniz Association in Germany is named for him."
    ],
    "connections": [
      "newton",
      "bernoulli-jakob",
      "bernoulli-johann"
    ],
    "tags": [
      "enlightenment",
      "germany",
      "calculus",
      "binary"
    ]
  },
  {
    "id": "halley",
    "name": "Edmond Halley",
    "born": "November 8, 1656",
    "died": "January 14, 1742",
    "era": "enlightenment",
    "nationality": "English",
    "fields": [
      "astronomy",
      "statistics"
    ],
    "short": "Paid for Newton's Principia out of pocket; computed the orbit of the comet that bears his name.",
    "bio": "Halley was Newton's great friend, editor, and patron. When Newton refused to publish and the Royal Society would not fund him, Halley paid the printing costs of the Principia (1687) out of his own salary. He applied Newtonian mechanics to a comet he had observed in 1682, predicting it would return in 1758; it did, and is still called Halley's Comet. He also produced an early mortality table (1693) that founded actuarial science, and was appointed Astronomer Royal in 1720.",
    "keyWorks": [
      "Synopsis of the Astronomy of Comets (1705)",
      "Mortality Tables (1693)"
    ],
    "keyIdeas": [
      "Periodicity of Halley's Comet",
      "Mortality tables for life insurance",
      "Transit of Venus method for measuring the astronomical unit"
    ],
    "trivia": [
      "Paid the printing costs of Newton's Principia.",
      "Halley's Comet last appeared in 1986; next in 2061.",
      "Astronomer Royal from 1720."
    ],
    "connections": [
      "newton"
    ],
    "tags": [
      "enlightenment",
      "england",
      "comet",
      "astronomy"
    ]
  },
  {
    "id": "bernoulli-jakob",
    "name": "Jakob Bernoulli",
    "born": "January 6, 1655",
    "died": "August 16, 1705",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "probability",
      "calculus"
    ],
    "short": "Discovered the law of large numbers and the number e; first of the Bernoulli dynasty.",
    "bio": "Jakob Bernoulli was the eldest of the mathematical Bernoulli dynasty. He mastered Leibniz's calculus and became one of its first great practitioners. His Ars Conjectandi (published posthumously in 1713) founded probability as a rigorous discipline, containing the first proof of a law of large numbers (Bernoulli's Theorem) and Bernoulli numbers (later named by Abraham de Moivre). He was the first to evaluate lim (1 + 1/n)ⁿ as n → ∞, discovering the constant e in a compound-interest context. He famously requested that a logarithmic spiral ('Spira mirabilis — eadem mutata resurgo') be engraved on his tombstone; the stonemason accidentally engraved an Archimedean spiral.",
    "keyWorks": [
      "Ars Conjectandi (1713, posthumous)"
    ],
    "keyIdeas": [
      "Bernoulli's theorem / Law of large numbers",
      "Bernoulli numbers",
      "Bernoulli trials and the binomial distribution",
      "The number e via compound interest",
      "Logarithmic spiral ('Spira mirabilis')",
      "Isoperimetric problems"
    ],
    "trivia": [
      "Requested a logarithmic spiral on his tombstone — the mason engraved an Archimedean spiral by mistake.",
      "Bitter rivalry with his own brother Johann.",
      "Bernoulli numbers: B₀=1, B₁=−1/2, B₂=1/6, B₄=−1/30, …"
    ],
    "connections": [
      "bernoulli-johann",
      "leibniz",
      "de-moivre"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "probability",
      "e"
    ]
  },
  {
    "id": "bernoulli-johann",
    "name": "Johann Bernoulli",
    "born": "August 6, 1667",
    "died": "January 1, 1748",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "calculus"
    ],
    "short": "Jakob's younger brother; posed the brachistochrone problem and tutored Euler.",
    "bio": "Johann Bernoulli, younger brother of Jakob, was another master of Leibnizian calculus. He posed the brachistochrone problem in 1696: find the curve between two points down which a bead slides in the least time under gravity. The answer is the cycloid. Newton supposedly solved it in a single evening; when Johann saw the anonymous solution he declared he 'recognized the lion by his claw.' Johann tutored Leonhard Euler and was the father of Daniel Bernoulli. He feuded viciously with Jakob, and also with his own son Daniel — once he won a prize in hydrodynamics by backdating his book.",
    "keyWorks": [
      "Papers in the Acta Eruditorum"
    ],
    "keyIdeas": [
      "Brachistochrone problem",
      "L'Hôpital's Rule (discovered by Johann but published by L'Hôpital)",
      "Catenary and tractrix curves",
      "Early calculus of variations"
    ],
    "trivia": [
      "Tutored Euler as a boy.",
      "Posed the brachistochrone in 1696; Newton solved it overnight.",
      "'I recognize the lion by his claw' on seeing Newton's anonymous solution.",
      "Sold his calculus notes to the Marquis de L'Hôpital, who published them as his own.",
      "Fought with his brother Jakob, his son Daniel, and many others."
    ],
    "connections": [
      "bernoulli-jakob",
      "bernoulli-daniel",
      "euler",
      "l-hopital"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "brachistochrone"
    ]
  },
  {
    "id": "bernoulli-daniel",
    "name": "Daniel Bernoulli",
    "born": "February 8, 1700",
    "died": "March 17, 1782",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "probability",
      "fluid dynamics"
    ],
    "short": "Gave his name to Bernoulli's principle in fluid dynamics; introduced the St. Petersburg paradox.",
    "bio": "Daniel Bernoulli was the son of Johann and nephew of Jakob. His Hydrodynamica (1738) contained Bernoulli's principle: as fluid speed increases, its pressure decreases. His father Johann plagiarized the work and backdated it to claim priority. Daniel introduced the St. Petersburg paradox to illustrate the need for the concept of expected utility. He worked for years at the St. Petersburg Academy alongside Euler.",
    "keyWorks": [
      "Hydrodynamica (1738)",
      "Exposition of a New Theory on the Measurement of Risk (1738)"
    ],
    "keyIdeas": [
      "Bernoulli's principle in fluid dynamics",
      "Expected utility theory (St. Petersburg paradox)",
      "First connection between pressure and velocity"
    ],
    "trivia": [
      "His father plagiarized his Hydrodynamica.",
      "Worked with Euler in St. Petersburg 1725–33.",
      "Won the Paris Academy prize ten times."
    ],
    "connections": [
      "bernoulli-johann",
      "euler"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "fluid-dynamics"
    ]
  },
  {
    "id": "de-moivre",
    "name": "Abraham de Moivre",
    "born": "May 26, 1667",
    "died": "November 27, 1754",
    "era": "enlightenment",
    "nationality": "French–English",
    "fields": [
      "probability",
      "analysis"
    ],
    "short": "French-born Huguenot refugee in London; formulated De Moivre's theorem linking complex numbers and trigonometry.",
    "bio": "De Moivre was a French Protestant who fled to London after the revocation of the Edict of Nantes in 1685. He lived modestly as a mathematics tutor in the coffee houses of London, too poor for a university post despite his election to the Royal Society in 1697. His Doctrine of Chances (1718) extended probability theory and contains the first form of the normal distribution as an approximation to the binomial. De Moivre's theorem states (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ. He is said to have predicted the day of his own death: he noticed he needed 15 minutes more sleep each day, and calculated the day the arithmetic progression would reach 24 hours — and duly died then.",
    "keyWorks": [
      "The Doctrine of Chances (1718)",
      "Miscellanea Analytica (1730)"
    ],
    "keyIdeas": [
      "De Moivre's theorem: (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ",
      "Normal approximation to the binomial distribution",
      "Stirling's formula (early version)",
      "De Moivre's formula for Fibonacci numbers"
    ],
    "trivia": [
      "Huguenot refugee from France, 1685.",
      "Never held a university post; tutored in London coffee shops.",
      "Correctly predicted the day of his own death via an arithmetic progression.",
      "Friend of Newton and Halley."
    ],
    "connections": [
      "newton",
      "halley",
      "laplace"
    ],
    "tags": [
      "enlightenment",
      "england",
      "probability",
      "normal"
    ]
  },
  {
    "id": "l-hopital",
    "name": "Guillaume de l'Hôpital",
    "born": "1661",
    "died": "February 2, 1704",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "calculus"
    ],
    "short": "French marquis who published the first calculus textbook, containing Johann Bernoulli's work.",
    "bio": "Guillaume François Antoine, Marquis de l'Hôpital, paid Johann Bernoulli to tutor him in the new calculus and had a contract giving him rights to Bernoulli's discoveries. L'Hôpital's Analyse des infiniment petits (1696), the first calculus textbook, contained 'L'Hôpital's rule' for 0/0 limits. L'Hôpital acknowledged Bernoulli's help, but not its extent; the full story only emerged when the correspondence was published in the 1920s.",
    "keyWorks": [
      "Analyse des infiniment petits pour l'intelligence des lignes courbes (1696)"
    ],
    "keyIdeas": [
      "L'Hôpital's Rule for 0/0 limits (due to Johann Bernoulli)",
      "First calculus textbook"
    ],
    "trivia": [
      "Paid Johann Bernoulli to share his discoveries.",
      "His book was the first calculus textbook.",
      "The truth about L'Hôpital's rule surfaced in the 1920s."
    ],
    "connections": [
      "bernoulli-johann"
    ],
    "tags": [
      "enlightenment",
      "france",
      "calculus"
    ]
  },
  {
    "id": "goldbach",
    "name": "Christian Goldbach",
    "born": "March 18, 1690",
    "died": "November 20, 1764",
    "era": "enlightenment",
    "nationality": "Prussian/Russian",
    "fields": [
      "number theory"
    ],
    "short": "Prussian mathematician famous for Goldbach's conjecture, stated in a 1742 letter to Euler.",
    "bio": "Christian Goldbach was born in Königsberg and traveled through Europe meeting Leibniz, Moivre, and the Bernoullis before settling in Russia, where he tutored the future Tsar Peter II. In a letter to Leonhard Euler dated June 7, 1742, he stated (in a marginal comment) what is now called Goldbach's Conjecture: every even integer greater than 2 is the sum of two primes. The conjecture remains unproven in 2026, though it has been verified by computer for every even number up to 4×10^18.",
    "keyWorks": [
      "Correspondence with Euler (1729-1764)"
    ],
    "keyIdeas": [
      "Goldbach's Conjecture (1742): every even n > 2 is the sum of two primes",
      "Weak Goldbach Conjecture: every odd n > 5 is the sum of three primes (proved by Helfgott, 2013)"
    ],
    "trivia": [
      "Tutor to Tsar Peter II of Russia.",
      "Corresponded with Euler for 35 years.",
      "The $1 million Clay prize does NOT cover Goldbach's conjecture — but a 2000 publisher's prize of $1,000,000 for it expired unclaimed in 2002."
    ],
    "connections": [
      "euler",
      "bernoulli-daniel"
    ],
    "tags": [
      "enlightenment",
      "primes",
      "conjectures"
    ]
  },
  {
    "id": "euler",
    "name": "Leonhard Euler",
    "born": "April 15, 1707",
    "died": "September 18, 1783",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "analysis",
      "number theory",
      "graph theory",
      "mechanics",
      "topology",
      "notation"
    ],
    "short": "The most prolific mathematician in history; introduced much of modern notation including e, i, π as symbols, f(x), Σ, and sin/cos.",
    "bio": "Leonhard Euler was born in Basel and tutored by Johann Bernoulli, who persuaded Euler's father to let him pursue mathematics. At 19 he won his first Paris Academy Prize (for a paper on the masting of ships). He spent his career between the St. Petersburg Academy (1727-41, 1766-83) and Frederick the Great's Berlin Academy (1741-66). Though he lost sight in his right eye in 1738 and went totally blind in 1771 after a cataract operation, his productivity only increased — he dictated results to his sons and scribes. His collected works, Opera Omnia, run to more than 80 large volumes. He published on average 800 pages per year. He died suddenly on September 18, 1783, after an afternoon of calculating the orbit of the newly discovered Uranus; in Condorcet's famous phrase, 'he ceased to calculate and to live.'",
    "keyWorks": [
      "Introductio in analysin infinitorum (1748)",
      "Institutiones calculi differentialis (1755)",
      "Institutiones calculi integralis (1768-70)",
      "Letters to a German Princess (1760-62)",
      "Mechanica (1736)"
    ],
    "keyIdeas": [
      "Euler's Identity: e^(iπ) + 1 = 0",
      "Euler's Formula: e^(iθ) = cos θ + i sin θ",
      "Euler's polyhedral formula: V − E + F = 2",
      "Solved the Basel Problem (1735): Σ 1/n² = π²/6",
      "Seven Bridges of Königsberg (1736) — founded graph theory",
      "Totient function φ(n) and Euler's theorem: a^φ(n) ≡ 1 (mod n)",
      "Introduced notation e, i, Σ, f(x), π (popularized)",
      "Euler-Lagrange equation",
      "Euler line of a triangle"
    ],
    "trivia": [
      "Had 13 children; only 5 survived childhood.",
      "Memorized the first six powers of all integers up to 100, and the Aeneid.",
      "Blind for the last 17 years of his life yet produced half his total output in that time.",
      "A poll of mathematicians in Mathematical Intelligencer ranked Euler's Identity the most beautiful formula in mathematics."
    ],
    "connections": [
      "bernoulli-johann",
      "bernoulli-daniel",
      "goldbach",
      "lagrange",
      "d-alembert"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "russia",
      "prussia",
      "analysis",
      "topology",
      "π",
      "e"
    ]
  },
  {
    "id": "cramer",
    "name": "Gabriel Cramer",
    "born": "July 31, 1704",
    "died": "January 4, 1752",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "algebra",
      "geometry"
    ],
    "short": "Genevan mathematician known for Cramer's Rule for solving systems of linear equations via determinants.",
    "bio": "Gabriel Cramer was a professor in Geneva who edited the works of the Bernoullis and corresponded with most leading mathematicians of his time. His Introduction à l'analyse des lignes courbes algébriques (1750) studied algebraic curves and contained, in an appendix, Cramer's Rule for solving n×n linear systems. The rule had actually been known to Leibniz around 1693 and published by Colin Maclaurin in 1748, but Cramer's clear notation made it standard. The paradox called Cramer's Paradox — that two cubic curves can meet in 9 points but a cubic is determined by 9 points — also appears in this book.",
    "keyWorks": [
      "Introduction à l'analyse des lignes courbes algébriques (1750)"
    ],
    "keyIdeas": [
      "Cramer's Rule for linear systems via determinants",
      "Cramer's Paradox on algebraic curves"
    ],
    "trivia": [
      "Edited the works of Johann Bernoulli and his nephews.",
      "Cramer's Rule was actually first discovered by Leibniz.",
      "Died in southern France where he had gone to recover his health."
    ],
    "connections": [
      "bernoulli-johann",
      "maclaurin"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "linear-algebra",
      "determinants"
    ]
  },
  {
    "id": "maclaurin",
    "name": "Colin Maclaurin",
    "born": "February 1698",
    "died": "June 14, 1746",
    "era": "enlightenment",
    "nationality": "Scottish",
    "fields": [
      "calculus",
      "algebra"
    ],
    "short": "Scottish mathematician, child prodigy, and staunch Newtonian who gave the rigorous defense of fluxions.",
    "bio": "Colin Maclaurin entered the University of Glasgow at 11 and became professor at Aberdeen at 19. On Newton's personal recommendation he was appointed to Edinburgh in 1725. His Treatise of Fluxions (1742) was the first systematic exposition of Newton's calculus, written partly to answer Bishop Berkeley's 1734 attack on the foundations of calculus in The Analyst. The 'Maclaurin series' is the special case of the Taylor series about 0. He organized the defense of Edinburgh against the Jacobite army in 1745, a strain which contributed to his death the next year.",
    "keyWorks": [
      "Geometrica Organica (1720)",
      "Treatise of Fluxions (1742)",
      "Treatise of Algebra (posthumous, 1748)"
    ],
    "keyIdeas": [
      "Maclaurin series (Taylor series about 0)",
      "Euler-Maclaurin summation formula (co-discovered)",
      "Cramer's Rule (published before Cramer)",
      "First rigorous defense of the foundations of calculus"
    ],
    "trivia": [
      "Became a professor at age 19.",
      "Helped fortify Edinburgh against Bonnie Prince Charlie in 1745.",
      "Newton personally wrote to recommend him and offered to pay part of his salary."
    ],
    "connections": [
      "newton",
      "taylor",
      "euler"
    ],
    "tags": [
      "enlightenment",
      "scotland",
      "calculus",
      "series"
    ]
  },
  {
    "id": "taylor",
    "name": "Brook Taylor",
    "born": "August 18, 1685",
    "died": "December 29, 1731",
    "era": "enlightenment",
    "nationality": "English",
    "fields": [
      "calculus"
    ],
    "short": "English mathematician who formulated the Taylor series expansion and founded the calculus of finite differences.",
    "bio": "Brook Taylor was a lawyer and gentleman scientist who became secretary of the Royal Society. His Methodus incrementorum directa et inversa (1715) contained what Lagrange later called 'the main foundation of differential calculus' — Taylor's theorem expressing a function as a power series. Taylor did not fully realize the significance of his result, and it only became central to analysis after Lagrange emphasized it decades later. Taylor also wrote on linear perspective and on the problem of the vibrating string.",
    "keyWorks": [
      "Methodus incrementorum directa et inversa (1715)",
      "Linear Perspective (1715)"
    ],
    "keyIdeas": [
      "Taylor's Theorem and Taylor series",
      "Calculus of finite differences",
      "Integration by parts (early form)"
    ],
    "trivia": [
      "Elected to the Royal Society at age 27.",
      "His major result was ignored for 57 years until Lagrange made it central.",
      "Two of his children died in infancy, contributing to his own decline."
    ],
    "connections": [
      "newton",
      "maclaurin",
      "lagrange"
    ],
    "tags": [
      "enlightenment",
      "england",
      "calculus",
      "series"
    ]
  },
  {
    "id": "d-alembert",
    "name": "Jean le Rond d'Alembert",
    "born": "November 16, 1717",
    "died": "October 29, 1783",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "analysis",
      "mechanics",
      "differential equations"
    ],
    "short": "French mathematician, co-editor of Diderot's Encyclopédie, and author of d'Alembert's principle in mechanics.",
    "bio": "Abandoned as a baby on the steps of the church of Saint-Jean-le-Rond in Paris, d'Alembert took his name from it. Raised by a glazier's wife but secretly supported by his aristocratic biological father, he became one of the leading figures of the French Enlightenment. With Diderot he edited the 28-volume Encyclopédie. His Traité de dynamique (1743) stated d'Alembert's principle, reducing dynamics to statics. He gave the first published proof of the fundamental theorem of algebra (though flawed) and the wave equation for the vibrating string (1747).",
    "keyWorks": [
      "Traité de dynamique (1743)",
      "Encyclopédie (co-editor, 1751-72)"
    ],
    "keyIdeas": [
      "D'Alembert's principle in mechanics",
      "Wave equation for the vibrating string",
      "Ratio test for series convergence",
      "Attempted proof of the fundamental theorem of algebra"
    ],
    "trivia": [
      "Abandoned as a baby on the steps of a Paris church.",
      "Declined Frederick the Great's invitation to be president of the Berlin Academy.",
      "Famous rival of Euler and Clairaut."
    ],
    "connections": [
      "euler",
      "lagrange",
      "clairaut"
    ],
    "tags": [
      "enlightenment",
      "france",
      "mechanics",
      "encyclopedie"
    ]
  },
  {
    "id": "clairaut",
    "name": "Alexis Clairaut",
    "born": "May 13, 1713",
    "died": "May 17, 1765",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "analysis",
      "geodesy",
      "mechanics"
    ],
    "short": "Child prodigy who, at 18, was the youngest person ever elected to the Académie des sciences.",
    "bio": "Alexis Clairaut read l'Hôpital's calculus text at age 10 and presented a paper on four geometric curves to the Académie at 13. A special exemption allowed his election at 18 (the usual minimum was 20). He joined Maupertuis's 1736 expedition to Lapland to measure the length of a degree of meridian, confirming Newton's prediction that Earth is an oblate spheroid. His computation (with help from the astronomer Lalande and Nicole-Reine Lepaute) of the return date of Halley's comet in 1759, corrected for perturbations by Jupiter and Saturn, was accurate to within a month.",
    "keyWorks": [
      "Théorie de la figure de la terre (1743)",
      "Théorie de la lune (1752)"
    ],
    "keyIdeas": [
      "Clairaut's theorem on differential forms (equality of mixed partials)",
      "Clairaut's equation: y = xy' + f(y')",
      "Theory of the shape of the Earth",
      "Computed return of Halley's comet (1759)"
    ],
    "trivia": [
      "Elected to the Académie at 18 — a record.",
      "Predicted Halley's comet would return April 13, 1759 (it came March 13).",
      "Died at 52 of a fever after 'a night of dissipation'."
    ],
    "connections": [
      "newton",
      "halley",
      "d-alembert",
      "lagrange"
    ],
    "tags": [
      "enlightenment",
      "france",
      "mechanics",
      "geodesy"
    ]
  },
  {
    "id": "lambert",
    "name": "Johann Heinrich Lambert",
    "born": "August 26, 1728",
    "died": "September 25, 1777",
    "era": "enlightenment",
    "nationality": "Swiss/German",
    "fields": [
      "number theory",
      "geometry",
      "analysis"
    ],
    "short": "Swiss polymath who first proved π is irrational (1761) and anticipated non-Euclidean geometry.",
    "bio": "A self-taught tailor's son, Lambert became one of the most versatile scholars of the 18th century — mathematician, physicist, astronomer, philosopher, and cartographer. In 1761 he proved that π is irrational by giving a continued fraction expansion of tan x and showing it is irrational for nonzero rational x. His Theorie der Parallellinien (1766, published 1786) investigated the consequences of denying the parallel postulate, anticipating hyperbolic geometry by 60 years. The Lambert projection is still standard in cartography, and the lambert is a unit of luminance.",
    "keyWorks": [
      "Photometria (1760)",
      "Theorie der Parallellinien (written 1766, published 1786)",
      "Cosmologische Briefe (1761)"
    ],
    "keyIdeas": [
      "First proof that π is irrational (1761)",
      "Conjectured π is transcendental",
      "Hyperbolic functions sinh, cosh, tanh (named and studied)",
      "Lambert conformal conic projection",
      "Early investigation of non-Euclidean geometry"
    ],
    "trivia": [
      "Started life as a tailor's apprentice.",
      "Named hyperbolic functions.",
      "The unit 'lambert' of luminance is named after him."
    ],
    "connections": [
      "euler",
      "lagrange"
    ],
    "tags": [
      "enlightenment",
      "germany",
      "π",
      "non-euclidean"
    ]
  },
  {
    "id": "lagrange",
    "name": "Joseph-Louis Lagrange",
    "born": "January 25, 1736",
    "died": "April 10, 1813",
    "era": "enlightenment",
    "nationality": "Italian/French",
    "fields": [
      "analysis",
      "mechanics",
      "number theory",
      "algebra"
    ],
    "short": "Born Giuseppe Lodovico Lagrangia in Turin; author of Mécanique analytique, which recast mechanics in purely analytical form.",
    "bio": "Lagrange was born to a family of French descent in Turin. At 19 he sent Euler a letter containing the calculus of variations, which Euler had been struggling with; Euler generously waited to publish his own work until Lagrange's appeared. Frederick the Great summoned him to Berlin in 1766 to succeed Euler, writing that 'the greatest king in Europe' wished to have 'the greatest mathematician in Europe' at his court. After Frederick's death he moved to Paris, where he was spared by the Terror (Lavoisier, who tried to help him, was not — prompting Lagrange's remark: 'It took them only an instant to cut off that head, and a hundred years may not produce another like it'). Napoleon made him a count and senator. His Mécanique analytique (1788) contains the famous boast that it has no figures, 'only algebraic operations.'",
    "keyWorks": [
      "Mécanique analytique (1788)",
      "Théorie des fonctions analytiques (1797)",
      "Leçons sur le calcul des fonctions (1801)"
    ],
    "keyIdeas": [
      "Lagrangian mechanics (generalized coordinates, Lagrangian L = T − V)",
      "Euler-Lagrange equation for the calculus of variations",
      "Lagrange's theorem in group theory: |H| divides |G|",
      "Lagrange's four-square theorem (1770): every natural number is a sum of four squares",
      "Lagrange interpolation polynomial",
      "Method of Lagrange multipliers",
      "Lagrangian points (L1-L5) in the three-body problem"
    ],
    "trivia": [
      "Named by Frederick the Great as 'the greatest mathematician in Europe'.",
      "Boasted his Mécanique analytique had no diagrams.",
      "Napoleon called him 'the lofty pyramid of the mathematical sciences'.",
      "Buried in the Panthéon."
    ],
    "connections": [
      "euler",
      "d-alembert",
      "laplace",
      "legendre",
      "fourier"
    ],
    "tags": [
      "enlightenment",
      "france",
      "italy",
      "mechanics",
      "variations"
    ]
  },
  {
    "id": "monge",
    "name": "Gaspard Monge",
    "born": "May 9, 1746",
    "died": "July 28, 1818",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "geometry"
    ],
    "short": "Founder of descriptive geometry and personal friend of Napoleon.",
    "bio": "Monge, the son of a knife-sharpener, invented descriptive geometry — the systematic representation of 3D objects by their projections onto two planes — and used it to solve a fortification problem so quickly that it was classified as a military secret for fifteen years. He was a founder of the École Polytechnique in 1794. A devoted revolutionary, he served as Minister of the Navy and accompanied Napoleon on the Egyptian campaign. After Napoleon's fall he was stripped of all honors by the Bourbons and died in disgrace.",
    "keyWorks": [
      "Géométrie descriptive (1799)",
      "Application de l'analyse à la géométrie (1807)"
    ],
    "keyIdeas": [
      "Descriptive geometry",
      "Monge's theorem on three coplanar circles",
      "Differential geometry of surfaces (early work)"
    ],
    "trivia": [
      "His fortification method was a French military secret for 15 years.",
      "Co-founded the École Polytechnique (1794).",
      "Sailed with Napoleon to Egypt in 1798.",
      "Died in disgrace after the fall of Napoleon."
    ],
    "connections": [
      "lagrange",
      "laplace",
      "fourier",
      "carnot-lazare"
    ],
    "tags": [
      "enlightenment",
      "france",
      "geometry",
      "polytechnique"
    ]
  },
  {
    "id": "laplace",
    "name": "Pierre-Simon Laplace",
    "born": "March 23, 1749",
    "died": "March 5, 1827",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "probability",
      "celestial mechanics",
      "analysis"
    ],
    "short": "'The French Newton' — author of Mécanique céleste and Théorie analytique des probabilités.",
    "bio": "Laplace's five-volume Mécanique céleste (1799-1825) was the culmination of 18th-century celestial mechanics, demonstrating the long-term stability of the solar system and formalizing Newtonian gravity. When Napoleon asked why God did not appear in the book, Laplace reportedly replied, 'Sire, I had no need of that hypothesis.' Napoleon made him a count; Louis XVIII made him a marquis. A notorious political chameleon, he endorsed every regime from Louis XVI to the Bourbon Restoration. His Théorie analytique des probabilités (1812) founded modern probability theory.",
    "keyWorks": [
      "Mécanique céleste (1799-1825)",
      "Théorie analytique des probabilités (1812)",
      "Exposition du système du monde (1796)"
    ],
    "keyIdeas": [
      "Laplace transform",
      "Laplace's equation ∇²φ = 0 and the Laplacian",
      "Laplace expansion of a determinant",
      "Bayesian statistics (independently of Bayes)",
      "Central limit theorem (early form)",
      "Nebular hypothesis for the origin of the solar system",
      "Demon of Laplace: classical determinism"
    ],
    "trivia": [
      "'Sire, I had no need of that hypothesis.' (to Napoleon)",
      "Napoleon, as a lieutenant, had been examined by Laplace.",
      "Dismissed as Minister of the Interior by Napoleon after only six weeks — Napoleon said he 'brought the spirit of the infinitely small into the government'.",
      "His brain was preserved after his death and found to be unusually small."
    ],
    "connections": [
      "lagrange",
      "legendre",
      "poisson",
      "napoleon"
    ],
    "tags": [
      "enlightenment",
      "france",
      "probability",
      "astronomy",
      "napoleon"
    ]
  },
  {
    "id": "legendre",
    "name": "Adrien-Marie Legendre",
    "born": "September 18, 1752",
    "died": "January 10, 1833",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "number theory",
      "analysis",
      "statistics"
    ],
    "short": "French mathematician whose textbooks dominated European teaching for a century; co-discoverer of least squares.",
    "bio": "Legendre's Éléments de géométrie (1794) replaced Euclid as the standard geometry text in France and much of Europe for a century. He published the method of least squares in 1805, three years before Gauss (who claimed priority, starting a bitter feud). His three-volume Traité des fonctions elliptiques (1825-28) was the last word on elliptic integrals before Abel and Jacobi made it obsolete almost immediately. His conjectures on the prime number distribution (π(n) ≈ n/ln n) and on quadratic reciprocity inspired Gauss and Dirichlet. Because of a portrait mix-up, until 2009 every image labeled 'Legendre' on the internet was actually the caricaturist Louis Legendre.",
    "keyWorks": [
      "Éléments de géométrie (1794)",
      "Théorie des nombres (1798)",
      "Traité des fonctions elliptiques (1825-28)"
    ],
    "keyIdeas": [
      "Method of least squares (1805)",
      "Legendre polynomials",
      "Legendre symbol in number theory",
      "Prime number theorem conjectured: π(n) ~ n/ln n",
      "Legendre transformation (used in thermodynamics)",
      "Law of quadratic reciprocity (first complete statement)"
    ],
    "trivia": [
      "Locked in a priority dispute with Gauss over least squares.",
      "Had no income at the end of his life after refusing to vote for a government candidate.",
      "The only surviving image of him is a caricature by Julien-Léopold Boilly.",
      "For years his portrait was confused with an unrelated French politician."
    ],
    "connections": [
      "lagrange",
      "laplace",
      "gauss",
      "abel",
      "jacobi"
    ],
    "tags": [
      "enlightenment",
      "france",
      "number-theory",
      "statistics"
    ]
  },
  {
    "id": "carnot-lazare",
    "name": "Lazare Carnot",
    "born": "May 13, 1753",
    "died": "August 2, 1823",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "geometry",
      "mechanics"
    ],
    "short": "'The Organizer of Victory' — mathematician, general, and father of thermodynamicist Sadi Carnot.",
    "bio": "Lazare Carnot was a member of the Committee of Public Safety during the French Revolution, where he was known as the Organizer of Victory for raising fourteen armies to defend the Republic. His mathematical work included Réflexions sur la métaphysique du calcul infinitésimal (1797), an attempt to explain how calculus can give correct answers despite its foundations being shaky (he called this 'compensation of errors'). He is the father of Sadi Carnot, founder of thermodynamics, and grandfather of a French president.",
    "keyWorks": [
      "Réflexions sur la métaphysique du calcul infinitésimal (1797)",
      "Géométrie de position (1803)"
    ],
    "keyIdeas": [
      "Carnot's theorem (on perpendiculars from a point to the sides of a triangle)",
      "Projective geometry",
      "Early attempts to rigorize calculus"
    ],
    "trivia": [
      "Organized 14 armies as war minister.",
      "Father of Sadi Carnot (thermodynamics).",
      "Grandfather of Sadi Carnot, 4th president of France."
    ],
    "connections": [
      "monge",
      "legendre"
    ],
    "tags": [
      "enlightenment",
      "france",
      "revolution",
      "geometry"
    ]
  },
  {
    "id": "fourier",
    "name": "Joseph Fourier",
    "born": "March 21, 1768",
    "died": "May 16, 1830",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "analysis",
      "physics"
    ],
    "short": "Founder of Fourier analysis; discovered the greenhouse effect; orphaned son of a tailor who became a baron.",
    "bio": "Fourier was orphaned by age nine and only barely escaped the guillotine during the Terror. He accompanied Napoleon to Egypt, where he became governor of Lower Egypt, and returned to be prefect of Isère. His Théorie analytique de la chaleur (1822) studied heat conduction using what he called 'Fourier series,' expressing arbitrary functions as infinite sums of sines and cosines. The work caused a sensation: his claim that virtually any function could be so represented was astonishing, and the rigorous investigation of when it is true drove much of 19th-century analysis. Fourier also made the first calculation (1824) suggesting that Earth's atmosphere traps heat — the first account of the greenhouse effect.",
    "keyWorks": [
      "Théorie analytique de la chaleur (1822)",
      "Description de l'Égypte (co-editor)"
    ],
    "keyIdeas": [
      "Fourier series: f(x) = a₀/2 + Σ(aₙ cos nx + bₙ sin nx)",
      "Fourier transform",
      "Heat equation ∂u/∂t = α∇²u",
      "First calculation of the greenhouse effect (1824)",
      "Dimensional analysis"
    ],
    "trivia": [
      "Orphaned at age 9.",
      "Accompanied Napoleon to Egypt as scientific advisor.",
      "First person to calculate the greenhouse effect.",
      "Liked to wear heavy clothes and overheated rooms; died after falling down stairs."
    ],
    "connections": [
      "lagrange",
      "laplace",
      "legendre",
      "cauchy",
      "dirichlet"
    ],
    "tags": [
      "19th",
      "france",
      "analysis",
      "egypt",
      "physics"
    ]
  },
  {
    "id": "gauss",
    "name": "Carl Friedrich Gauss",
    "born": "April 30, 1777",
    "died": "February 23, 1855",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "number theory",
      "analysis",
      "statistics",
      "geometry",
      "astronomy",
      "geodesy"
    ],
    "short": "'The Prince of Mathematicians.' Disquisitiones Arithmeticae (1801) founded modern number theory; rediscovered Ceres; invented the fast Fourier transform.",
    "bio": "Carl Friedrich Gauss was born into a laborer's family in Brunswick. At age 3 he corrected his father's payroll arithmetic. At age 7 his teacher, hoping to keep the class busy, asked them to sum 1 through 100; Gauss returned the answer (5050) almost immediately, having paired 1+100, 2+99, etc. The Duke of Brunswick financed his education. In his diary he recorded his mathematical discoveries in cryptic Latin: 'EUREKA! num = Δ + Δ + Δ' (July 10, 1796: every positive integer is a sum of at most three triangular numbers). He completed his doctoral dissertation (a proof of the fundamental theorem of algebra) at 22. His Disquisitiones Arithmeticae (1801) introduced modular arithmetic notation and proved quadratic reciprocity — which he called 'the fundamental theorem' and eventually gave eight proofs of. In 1801 he computed the orbit of the newly discovered asteroid Ceres from only 41 days of observations, launching his fame. He became director of the Göttingen Observatory for 48 years. He disliked controversy and left many discoveries — including non-Euclidean geometry, the method of least squares, and the fast Fourier transform — unpublished.",
    "keyWorks": [
      "Disquisitiones Arithmeticae (1801)",
      "Theoria motus corporum coelestium (1809)",
      "Disquisitiones generales circa superficies curvas (1828)",
      "Allgemeine Theorie des Erdmagnetismus (1839)"
    ],
    "keyIdeas": [
      "Fundamental theorem of algebra — first rigorous proof (1799)",
      "Modular arithmetic notation a ≡ b (mod n)",
      "Law of quadratic reciprocity (8 different proofs)",
      "Construction of the regular 17-gon (1796), first new constructible polygon since Euclid",
      "Gaussian (normal) distribution",
      "Gauss's law of electrostatics",
      "Theorema Egregium of differential geometry",
      "Gaussian integers Z[i]",
      "Fast Fourier transform (1805, unpublished; rediscovered 1965)",
      "Non-Euclidean geometry (unpublished)",
      "Method of least squares (disputed with Legendre)"
    ],
    "trivia": [
      "Summed 1+2+...+100 as a schoolboy.",
      "Asked for a regular 17-gon on his tombstone (the stonemason refused, saying it would look like a circle).",
      "Motto: 'Pauca sed matura' (few, but ripe) — he refused to publish anything not perfect.",
      "His diary contained 146 discoveries, many left unpublished.",
      "Appears on the old German 10-mark banknote."
    ],
    "connections": [
      "legendre",
      "sophie-germain",
      "dirichlet",
      "riemann",
      "dedekind",
      "bolyai",
      "lobachevsky"
    ],
    "tags": [
      "19th",
      "germany",
      "number-theory",
      "geometry",
      "astronomy",
      "göttingen"
    ]
  },
  {
    "id": "poisson",
    "name": "Siméon Denis Poisson",
    "born": "June 21, 1781",
    "died": "April 25, 1840",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "probability",
      "analysis",
      "mechanics"
    ],
    "short": "French mathematician; said 'Life is good for only two things: discovering mathematics and teaching mathematics.'",
    "bio": "Poisson was a favorite student of Laplace and Lagrange at the École Polytechnique, where he was appointed professor without having to take the entrance examination. He published around 400 papers. His Traité de mécanique (1811, 1833) was the standard work on the subject, and his Recherches sur la probabilité (1837) introduced the Poisson distribution, derived as the limit of binomial distributions. Poisson's bracket in mechanics became central to Hamilton's formulation and later to quantum mechanics.",
    "keyWorks": [
      "Traité de mécanique (1811, 1833)",
      "Recherches sur la probabilité des jugements (1837)"
    ],
    "keyIdeas": [
      "Poisson distribution",
      "Poisson's equation ∇²φ = −ρ",
      "Poisson brackets in classical mechanics",
      "Poisson process",
      "Law of large numbers (named)"
    ],
    "trivia": [
      "Famous quote: 'Life is good for only two things: discovering mathematics and teaching mathematics.'",
      "As a child, was hung from the ceiling in a sack by a nurse to keep him away from floor vermin.",
      "Published around 400 papers."
    ],
    "connections": [
      "laplace",
      "lagrange",
      "fourier",
      "cauchy"
    ],
    "tags": [
      "19th",
      "france",
      "probability",
      "mechanics"
    ]
  },
  {
    "id": "bolzano",
    "name": "Bernard Bolzano",
    "born": "October 5, 1781",
    "died": "December 18, 1848",
    "era": "19th",
    "nationality": "Bohemian",
    "fields": [
      "analysis",
      "logic"
    ],
    "short": "Czech priest-philosopher who anticipated Cauchy and Weierstrass in making analysis rigorous.",
    "bio": "Bernard Bolzano was a Roman Catholic priest and professor in Prague who, in 1817, gave the first purely analytic proof of the intermediate value theorem, avoiding geometric intuition. He defined continuity in essentially modern epsilon-delta terms before Cauchy. He constructed a continuous everywhere-non-differentiable function around 1830 (the Bolzano function), decades before Weierstrass's famous example. Because his theological views were unorthodox, he was dismissed from his chair in 1819 and forbidden to publish. Much of his work was only published posthumously — Paradoxien des Unendlichen (1851) anticipated Cantor's theory of infinite sets by recognizing that a set can be in one-to-one correspondence with a proper subset.",
    "keyWorks": [
      "Rein analytischer Beweis (1817)",
      "Paradoxien des Unendlichen (posthumous, 1851)",
      "Wissenschaftslehre (1837)"
    ],
    "keyIdeas": [
      "Intermediate value theorem (first purely analytic proof)",
      "Bolzano-Weierstrass theorem",
      "Early epsilon-delta definition of continuity",
      "A continuous everywhere-non-differentiable function (c. 1830)",
      "One-to-one correspondence between infinite sets"
    ],
    "trivia": [
      "Dismissed from his university chair for unorthodox theology.",
      "Forbidden from publishing in Austria after 1819.",
      "Constructed a fractal-like curve 30 years before Weierstrass."
    ],
    "connections": [
      "cauchy",
      "weierstrass",
      "cantor"
    ],
    "tags": [
      "19th",
      "bohemia",
      "analysis",
      "foundations"
    ]
  },
  {
    "id": "cauchy",
    "name": "Augustin-Louis Cauchy",
    "born": "August 21, 1789",
    "died": "May 23, 1857",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "analysis",
      "complex analysis",
      "algebra"
    ],
    "short": "Founder of rigorous analysis and complex analysis; published over 800 papers — a volume equaled only by Euler.",
    "bio": "Cauchy was born three weeks after the storming of the Bastille and, being the son of a royalist official, hid with his family in the countryside. Tutored by Lagrange, he entered the École Polytechnique at 16. His Cours d'analyse (1821) gave rigorous definitions of limit, continuity, convergence, and derivative, finally placing calculus on a firm foundation. He is the father of complex analysis: Cauchy's integral theorem, Cauchy's integral formula, and the residue theorem are all his. A devout Catholic and royalist, he refused to swear loyalty to Louis-Philippe in 1830 and went into self-imposed exile in Turin and Prague, returning only after the 1848 revolution. His collected works fill 27 volumes — second only to Euler.",
    "keyWorks": [
      "Cours d'analyse (1821)",
      "Résumé des leçons... sur le calcul infinitésimal (1823)"
    ],
    "keyIdeas": [
      "Rigorous epsilon-delta definitions of limit, continuity, derivative",
      "Cauchy sequence and the Cauchy criterion for convergence",
      "Cauchy's integral theorem and integral formula",
      "Residue theorem",
      "Cauchy-Riemann equations",
      "Cauchy-Schwarz inequality",
      "Permutation groups (co-founder)",
      "Cauchy distribution"
    ],
    "trivia": [
      "Published 789 papers (only Euler wrote more).",
      "Went into exile rather than take an oath of loyalty to Louis-Philippe.",
      "Refused to return Abel's and Galois's papers, delaying their recognition.",
      "Devout Catholic; Galois considered him a 'bigoted Jesuit.'"
    ],
    "connections": [
      "lagrange",
      "galois",
      "abel",
      "riemann",
      "weierstrass"
    ],
    "tags": [
      "19th",
      "france",
      "analysis",
      "complex",
      "rigor"
    ]
  },
  {
    "id": "mobius",
    "name": "August Ferdinand Möbius",
    "born": "November 17, 1790",
    "died": "September 26, 1868",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "topology",
      "geometry",
      "number theory"
    ],
    "short": "German mathematician best known for the Möbius strip; founder of topology.",
    "bio": "A student of Gauss's, Möbius spent his career as an astronomer at Leipzig. His 1837 Lehrbuch der Statik and 1827 Barycentrische Calcul developed projective and affine geometry using 'barycentric coordinates.' He introduced the Möbius function in number theory in 1832 and, in a paper discovered among his possessions after his death, described the one-sided surface now called the Möbius strip (Johann Listing had independently found it a few months earlier, in 1858). The Möbius transformations (fractional linear transformations of the complex plane) are fundamental in complex analysis.",
    "keyWorks": [
      "Der barycentrische Calcul (1827)",
      "Lehrbuch der Statik (1837)"
    ],
    "keyIdeas": [
      "Möbius strip (one-sided surface)",
      "Möbius function μ(n) in number theory",
      "Möbius transformations (z ↦ (az+b)/(cz+d))",
      "Barycentric coordinates"
    ],
    "trivia": [
      "Student of Gauss at Göttingen.",
      "Möbius strip was independently discovered by Listing a few months earlier.",
      "Spent most of his career as an astronomer, not a mathematician."
    ],
    "connections": [
      "gauss",
      "listing"
    ],
    "tags": [
      "19th",
      "germany",
      "topology",
      "one-sided"
    ]
  },
  {
    "id": "listing",
    "name": "Johann Benedict Listing",
    "born": "July 25, 1808",
    "died": "December 24, 1882",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "topology"
    ],
    "short": "Student of Gauss who coined the term 'topology' (1836) and described the Möbius strip independently.",
    "bio": "Johann Listing was Gauss's student and assistant at Göttingen, where he eventually became professor of mathematical physics. His Vorstudien zur Topologie (1847) coined the German word 'Topologie' — the modern term 'topology.' He described the Möbius strip in July 1858, a few months before Möbius did. A chronic spendthrift who was perpetually in debt, he was saved from ruin only by Gauss's support.",
    "keyWorks": [
      "Vorstudien zur Topologie (1847)",
      "Der Census räumlicher Complexe (1862)"
    ],
    "keyIdeas": [
      "Coined the term 'topology'",
      "Möbius strip (independent discovery)",
      "Listing number (a topological invariant)"
    ],
    "trivia": [
      "Coined the word 'topology'.",
      "Discovered the Möbius strip before Möbius did.",
      "Perpetually in debt."
    ],
    "connections": [
      "gauss",
      "mobius"
    ],
    "tags": [
      "19th",
      "germany",
      "topology"
    ]
  },
  {
    "id": "sophie-germain",
    "name": "Sophie Germain",
    "born": "April 1, 1776",
    "died": "June 27, 1831",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "number theory",
      "elasticity"
    ],
    "short": "French mathematician who, barred from universities as a woman, corresponded with Gauss under the name 'M. LeBlanc.'",
    "bio": "Denied entry to the École Polytechnique because she was a woman, Sophie Germain obtained lecture notes from friends and submitted papers under the pseudonym 'Antoine-August LeBlanc.' When Lagrange praised 'LeBlanc's' work and demanded to meet him, her identity was revealed; Lagrange became her mentor. She corresponded with Gauss for three years before he learned she was a woman; he wrote that 'she must have the noblest courage, quite extraordinary talents and superior genius.' When Napoleon's armies invaded Germany in 1807, she feared for Gauss's safety (remembering Archimedes) and had a French general check on him. Her work on Fermat's Last Theorem (Sophie Germain's Theorem) proved it for the first case when the exponent is a Sophie Germain prime. She was the first woman to win the Paris Academy's grand prize (1816), for her work on vibrating elastic plates. She died of breast cancer shortly before Gauss could persuade Göttingen to award her an honorary doctorate.",
    "keyWorks": [
      "Mémoire sur la théorie des surfaces élastiques (1821)",
      "Correspondence with Gauss"
    ],
    "keyIdeas": [
      "Sophie Germain's theorem on Fermat's Last Theorem",
      "Sophie Germain primes (p such that 2p+1 is also prime)",
      "Theory of elasticity of vibrating plates"
    ],
    "trivia": [
      "Published under the name 'M. LeBlanc' to avoid discrimination.",
      "Her identity was revealed when Lagrange demanded to meet the talented student.",
      "Asked a French general to ensure Gauss's safety during the invasion of Germany.",
      "Died before receiving her honorary doctorate from Göttingen."
    ],
    "connections": [
      "gauss",
      "lagrange",
      "legendre"
    ],
    "tags": [
      "19th",
      "france",
      "number-theory",
      "women"
    ]
  },
  {
    "id": "bolyai",
    "name": "János Bolyai",
    "born": "December 15, 1802",
    "died": "January 27, 1860",
    "era": "19th",
    "nationality": "Hungarian",
    "fields": [
      "geometry"
    ],
    "short": "Hungarian co-discoverer of non-Euclidean geometry; 'I have created a new, another world out of nothing.'",
    "bio": "János Bolyai was the son of mathematician Farkas (Wolfgang) Bolyai, a friend of Gauss's. Farkas had spent his life unsuccessfully trying to prove Euclid's parallel postulate and warned his son: 'For God's sake, I beseech you, give it up. Fear it no less than sensual passions because it, too, may take all your time and deprive you of your health.' János disobeyed, and on November 3, 1823, wrote to his father: 'I have created a new, another world out of nothing.' His 26-page Appendix scientiam spatii absolute veram exhibens, published as an appendix to his father's 1832 textbook, developed hyperbolic (non-Euclidean) geometry. When Farkas sent it to Gauss, Gauss replied that he could not praise it 'for to praise it would amount to praising myself' — he had had the same ideas for decades. Crushed, Bolyai published almost nothing more, and later learned Lobachevsky had also published the discovery in 1829. A skilled duelist, he reportedly once fought 13 officers in a row, playing violin between bouts.",
    "keyWorks": [
      "Appendix scientiam spatii absolute veram exhibens (1832)"
    ],
    "keyIdeas": [
      "Hyperbolic (non-Euclidean) geometry",
      "'Absolute geometry' — results independent of the parallel postulate"
    ],
    "trivia": [
      "Defeated 13 officers in duels on one day, playing the violin between bouts.",
      "'I have created a new, another world out of nothing.'",
      "Gauss's lukewarm reception crushed him into near-silence for the rest of his life.",
      "Died without knowing Lobachevsky had a priority claim."
    ],
    "connections": [
      "gauss",
      "lobachevsky",
      "bolyai-farkas"
    ],
    "tags": [
      "19th",
      "hungary",
      "geometry",
      "non-euclidean"
    ]
  },
  {
    "id": "lobachevsky",
    "name": "Nikolai Lobachevsky",
    "born": "December 1, 1792",
    "died": "February 24, 1856",
    "era": "19th",
    "nationality": "Russian",
    "fields": [
      "geometry"
    ],
    "short": "Russian mathematician; 'the Copernicus of geometry' — independent founder of hyperbolic geometry.",
    "bio": "Lobachevsky was born in Nizhny Novgorod and spent his entire career at Kazan University, serving as rector for nineteen years. In a lecture of 1826 and a publication of 1829 (Kazan Messenger), he presented a geometry in which multiple parallels to a given line pass through a point not on the line. His ideas were met with ridicule in Russia — Ostrogradsky called them 'barbarism' — but Gauss learned of them around 1840 and praised them privately. Abandoned by his university in old age, Lobachevsky dictated his last book, Pangeometry (1855-56), while blind.",
    "keyWorks": [
      "On the Principles of Geometry (1829)",
      "Pangeometry (1855)"
    ],
    "keyIdeas": [
      "Hyperbolic geometry (multiple parallels through a point)",
      "First publication of a complete non-Euclidean geometry (1829)"
    ],
    "trivia": [
      "Called 'the Copernicus of geometry' by W.K. Clifford.",
      "Blind in old age; dictated his last book.",
      "Published three years before Bolyai, but neither knew of the other until later."
    ],
    "connections": [
      "gauss",
      "bolyai"
    ],
    "tags": [
      "19th",
      "russia",
      "geometry",
      "non-euclidean"
    ]
  },
  {
    "id": "abel",
    "name": "Niels Henrik Abel",
    "born": "August 5, 1802",
    "died": "April 6, 1829",
    "era": "19th",
    "nationality": "Norwegian",
    "fields": [
      "algebra",
      "analysis",
      "elliptic functions"
    ],
    "short": "Norwegian mathematician who proved the quintic equation is unsolvable by radicals; died of tuberculosis at 26.",
    "bio": "Abel grew up in desperate poverty in a Norwegian village. At 19 he believed he had found a formula solving the quintic equation by radicals; discovering his error, he became the first to prove (1824) that no such formula can exist — what is now called the Abel-Ruffini theorem. His work on elliptic functions (independently of Jacobi) revolutionized analysis. During a European tour, he submitted his masterpiece (the 'Paris Memoir') to the French Academy, where Cauchy set it aside and forgot about it. Returning home in debt and ill with tuberculosis, Abel learned that, shortly before his death, Crelle had secured him a professorship at Berlin — the letter arrived too late. He was 26. Two days later, Jacobi read the lost Paris Memoir and wrote that it was 'the greatest mathematical discovery of the century.' The Abel Prize, established in 2002, is mathematics' Nobel equivalent.",
    "keyWorks": [
      "Proof of the impossibility of the algebraic solution of the quintic (1824)",
      "Recherches sur les fonctions elliptiques (1827)",
      "Paris Memoir on transcendental functions (1826, published 1841)"
    ],
    "keyIdeas": [
      "Abel-Ruffini theorem: no general algebraic solution for degree ≥ 5",
      "Abelian groups (commutative groups)",
      "Abel summation",
      "Theory of elliptic functions (with Jacobi)",
      "Abelian integrals and abelian functions"
    ],
    "trivia": [
      "His masterpiece was lost by Cauchy for years.",
      "Died two days before an appointment letter arrived.",
      "The Abel Prize (2002) is the 'Nobel of mathematics'.",
      "'Abelian' has become a lowercase adjective — a rare honor."
    ],
    "connections": [
      "cauchy",
      "jacobi",
      "legendre",
      "galois"
    ],
    "tags": [
      "19th",
      "norway",
      "algebra",
      "tragic",
      "elliptic"
    ]
  },
  {
    "id": "jacobi",
    "name": "Carl Gustav Jacob Jacobi",
    "born": "December 10, 1804",
    "died": "February 18, 1851",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "analysis",
      "algebra",
      "mechanics"
    ],
    "short": "German mathematician who, with Abel, founded the theory of elliptic functions.",
    "bio": "Jacobi was the first Jewish full professor of mathematics at a German university. His Fundamenta nova theoriae functionum ellipticarum (1829) developed elliptic functions in parallel with Abel — when the Paris Academy awarded them the Grand Prix jointly in 1830, Abel was already dead. Jacobi also made fundamental contributions to number theory (Jacobi triple product), mechanics (Hamilton-Jacobi equation), and determinants (Jacobian). When asked why he worked so obsessively on pure mathematics, he replied: 'Man muss immer umkehren' ('one must always invert') — and 'for the honor of the human spirit.' Despite his German nationalism, he spoke admiringly of Galois and Abel when their work was discovered.",
    "keyWorks": [
      "Fundamenta nova theoriae functionum ellipticarum (1829)",
      "Vorlesungen über Dynamik (1866)"
    ],
    "keyIdeas": [
      "Jacobi elliptic functions (sn, cn, dn)",
      "Jacobian matrix and Jacobian determinant",
      "Hamilton-Jacobi equation in mechanics",
      "Jacobi symbol in number theory",
      "Jacobi triple product identity"
    ],
    "trivia": [
      "'For the honor of the human spirit' (answer to why do pure mathematics).",
      "'Man muss immer umkehren' — 'one must always invert'.",
      "First Jewish full math professor at a German university (Königsberg).",
      "His elliptic-function rivalry with Abel was resolved by the 1830 Grand Prix."
    ],
    "connections": [
      "abel",
      "legendre",
      "gauss",
      "dirichlet"
    ],
    "tags": [
      "19th",
      "germany",
      "elliptic",
      "analysis"
    ]
  },
  {
    "id": "galois",
    "name": "Évariste Galois",
    "born": "October 25, 1811",
    "died": "May 31, 1832",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "algebra",
      "group theory"
    ],
    "short": "French founder of group theory; killed in a duel at 20.",
    "bio": "Evariste Galois twice failed the entrance exam for the École Polytechnique — the second time, legend has it, he threw an eraser at the examiner. At 17 he submitted his first memoir on the solvability of equations to the Académie; Cauchy lost it. A second memoir, submitted to the Fourier-directed 1830 Grand Prix, was lost when Fourier died. His republican father committed suicide after being slandered by the parish priest; Galois himself was arrested twice for radical political activity. On the eve of what proved to be a fatal duel over 'an infamous coquette,' he spent the night writing out his discoveries, scrawling 'je n'ai pas le temps' ('I have no time') in the margins. He was shot in the abdomen at dawn and died the next day. He was 20. It took 14 years for Liouville to publish his papers and many more for the mathematical world to understand them. Galois theory is now the foundation of modern algebra.",
    "keyWorks": [
      "Mémoire sur les conditions de résolubilité des équations par radicaux (1830, published 1846)",
      "Lettre à Auguste Chevalier (May 29, 1832)"
    ],
    "keyIdeas": [
      "Galois theory: correspondence between field extensions and subgroup structure",
      "Group theory (introduced the word 'group')",
      "Normal subgroups",
      "Finite fields (Galois fields) GF(p^n)",
      "Solvability of polynomial equations by radicals ↔ solvable Galois group"
    ],
    "trivia": [
      "Killed in a duel at age 20.",
      "Spent his last night writing out his mathematics.",
      "Wrote 'je n'ai pas le temps' ('I have no time') in the margins.",
      "Threw an eraser at an examiner at the École Polytechnique.",
      "His father committed suicide after a political attack by the local priest."
    ],
    "connections": [
      "cauchy",
      "fourier",
      "abel",
      "liouville"
    ],
    "tags": [
      "19th",
      "france",
      "algebra",
      "groups",
      "tragic"
    ]
  },
  {
    "id": "dirichlet",
    "name": "Peter Gustav Lejeune Dirichlet",
    "born": "February 13, 1805",
    "died": "May 5, 1859",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "number theory",
      "analysis"
    ],
    "short": "German mathematician; the first to give a modern definition of a function and to prove infinitely many primes in every arithmetic progression.",
    "bio": "Dirichlet was so devoted to the Disquisitiones Arithmeticae that he was said to sleep with it under his pillow. He married Rebecka Mendelssohn (sister of the composer Felix Mendelssohn) and hosted famous musical gatherings. He proved (1837) that every arithmetic progression a + nd with gcd(a,d)=1 contains infinitely many primes — a landmark in analytic number theory. He succeeded Gauss at Göttingen in 1855 and died only four years later. His definition of a function as 'any correspondence between sets' is the one still used today.",
    "keyWorks": [
      "Vorlesungen über Zahlentheorie (published posthumously, 1863, edited by Dedekind)"
    ],
    "keyIdeas": [
      "Modern definition of function (1837)",
      "Dirichlet's theorem on primes in arithmetic progressions",
      "Dirichlet series Σ aₙ/n^s",
      "Dirichlet's pigeonhole principle",
      "Dirichlet's boundary value problem",
      "Dirichlet unit theorem"
    ],
    "trivia": [
      "Slept with Gauss's Disquisitiones under his pillow.",
      "Brother-in-law of composer Felix Mendelssohn.",
      "Succeeded Gauss at Göttingen.",
      "Gave the modern definition of 'function'."
    ],
    "connections": [
      "gauss",
      "jacobi",
      "dedekind",
      "riemann",
      "kummer"
    ],
    "tags": [
      "19th",
      "germany",
      "number-theory",
      "analysis"
    ]
  },
  {
    "id": "hamilton",
    "name": "William Rowan Hamilton",
    "born": "August 4, 1805",
    "died": "September 2, 1865",
    "era": "19th",
    "nationality": "Irish",
    "fields": [
      "algebra",
      "mechanics",
      "optics"
    ],
    "short": "Irish mathematician who invented quaternions on a walk across Broome Bridge, October 16, 1843.",
    "bio": "A child prodigy, Hamilton could read Greek, Latin, and Hebrew by age 5 and knew 13 languages by 13. He was appointed Royal Astronomer of Ireland and director of Dunsink Observatory at age 22, while still an undergraduate. His reformulation of classical mechanics (1833-35) — now called Hamiltonian mechanics — is fundamental to modern physics. On October 16, 1843, walking with his wife to a meeting of the Royal Irish Academy, he suddenly saw how to extend complex numbers to four dimensions: i² = j² = k² = ijk = −1. He carved this into the stone of Broome Bridge, Dublin, with his penknife. Noncommutative! Hamilton spent the rest of his life promoting quaternions, with diminishing returns. An alcoholic in his later years, he lived amid chaos — after his death, plates of dried food with intermixed manuscripts were found throughout his office.",
    "keyWorks": [
      "Lectures on Quaternions (1853)",
      "Elements of Quaternions (posthumous, 1866)"
    ],
    "keyIdeas": [
      "Quaternions: i² = j² = k² = ijk = −1",
      "Hamiltonian mechanics and Hamilton's equations",
      "Hamilton-Jacobi equation",
      "Hamiltonian path/cycle (in a graph)",
      "Cayley-Hamilton theorem"
    ],
    "trivia": [
      "Knew 13 languages by age 13.",
      "Carved i²=j²=k²=ijk=−1 into Broome Bridge, Dublin, October 16, 1843.",
      "Became Royal Astronomer of Ireland while still a student.",
      "Died an alcoholic; his rooms were found full of plates of dried food mixed with manuscripts."
    ],
    "connections": [
      "grassmann",
      "cayley",
      "graves"
    ],
    "tags": [
      "19th",
      "ireland",
      "algebra",
      "quaternions",
      "mechanics"
    ]
  },
  {
    "id": "kummer",
    "name": "Ernst Kummer",
    "born": "January 29, 1810",
    "died": "May 14, 1893",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "number theory",
      "algebra"
    ],
    "short": "German mathematician who invented ideal numbers to rescue unique factorization and prove Fermat's Last Theorem for many cases.",
    "bio": "Kummer was originally a gymnasium teacher for ten years before becoming a professor. In the 1840s, attempting to prove Fermat's Last Theorem, he discovered that the cyclotomic integers Z[ζₚ] need not have unique factorization. He invented 'ideal numbers' (the predecessor to Dedekind's ideals) to restore it. For primes for which 'ideal numbers = actual numbers' (which he called 'regular primes'), he proved Fermat's Last Theorem. He was father-in-law to Hermann Schwarz and the great-great-grandfather of a chief of the German Army.",
    "keyWorks": [
      "Papers on ideal numbers (1847+)",
      "Papers on Fermat's Last Theorem"
    ],
    "keyIdeas": [
      "Ideal numbers (precursor to Dedekind ideals)",
      "Regular primes",
      "Kummer surface",
      "Proof of FLT for regular primes",
      "Kummer's theorem in number theory"
    ],
    "trivia": [
      "Spent 10 years as a high school teacher.",
      "Father-in-law of H.A. Schwarz.",
      "His ideal numbers were the birthplace of modern ring theory."
    ],
    "connections": [
      "dirichlet",
      "dedekind",
      "kronecker"
    ],
    "tags": [
      "19th",
      "germany",
      "number-theory",
      "fermat"
    ]
  },
  {
    "id": "weierstrass",
    "name": "Karl Weierstrass",
    "born": "October 31, 1815",
    "died": "February 19, 1897",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "analysis",
      "complex analysis"
    ],
    "short": "'Father of modern analysis'; made calculus rigorous via epsilon-delta proofs; spent 15 years as a high-school teacher before being recognized.",
    "bio": "Weierstrass studied law at Bonn but neglected it for fencing and beer (his dueling scars were famous). He turned to mathematics, took a high school teaching qualification, and taught at obscure gymnasia from 1842 to 1856, publishing nothing. In 1854 a paper on abelian functions in Crelle's Journal caused an immediate sensation; within two years he was a professor in Berlin. His lectures (1857-90) — never published by him, only transcribed by students — set the standard for rigor in analysis: the modern ε-δ definition of limit; the Bolzano-Weierstrass theorem; construction of a function continuous everywhere and differentiable nowhere (1872). His adored pupil Sofia Kovalevskaya was 'the only scientific satisfaction' of his old age; after her early death in 1891 he burned their correspondence and declined rapidly.",
    "keyWorks": [
      "Berliner Vorlesungen (1857-90, various transcriptions)"
    ],
    "keyIdeas": [
      "Rigorous ε-δ definition of limit",
      "Bolzano-Weierstrass theorem",
      "Weierstrass function — continuous everywhere, differentiable nowhere (1872)",
      "Weierstrass M-test for uniform convergence",
      "Weierstrass approximation theorem",
      "Weierstrass elliptic function ℘",
      "Weierstrass preparation theorem"
    ],
    "trivia": [
      "Spent 15 years as an obscure gymnasium teacher.",
      "Had dueling scars from his student days.",
      "Burned his correspondence with Kovalevskaya after her death.",
      "Never published his famous lectures — only his students' notes survive."
    ],
    "connections": [
      "kovalevskaya",
      "cantor",
      "schwarz",
      "mittag-leffler",
      "bolzano"
    ],
    "tags": [
      "19th",
      "germany",
      "analysis",
      "rigor",
      "berlin"
    ]
  },
  {
    "id": "boole",
    "name": "George Boole",
    "born": "November 2, 1815",
    "died": "December 8, 1864",
    "era": "19th",
    "nationality": "English",
    "fields": [
      "logic",
      "algebra"
    ],
    "short": "Self-taught English mathematician; inventor of Boolean algebra, the foundation of digital circuits.",
    "bio": "George Boole was the son of a Lincoln shoemaker and largely self-taught. He opened his own elementary school at 19 and taught in Lincoln until he won the first Royal Medal of the Royal Society in 1844 for a paper on differential equations. In 1849 he became professor at the newly founded Queen's College, Cork. His Mathematical Analysis of Logic (1847) and Investigation of the Laws of Thought (1854) reduced logic to algebraic manipulation: the 'Boolean algebra' of 0s and 1s with AND, OR, NOT operators. He died of pneumonia at 49 after walking three miles to a lecture in heavy rain — his wife believed the cure was to mirror the illness, so she poured buckets of cold water on him as he lay in bed. Ninety years later, Claude Shannon applied Boolean algebra to electrical circuits, inaugurating the digital age.",
    "keyWorks": [
      "The Mathematical Analysis of Logic (1847)",
      "An Investigation of the Laws of Thought (1854)"
    ],
    "keyIdeas": [
      "Boolean algebra: AND (∧), OR (∨), NOT (¬)",
      "Algebraic formulation of logic",
      "Indicator functions (0/1 variables)"
    ],
    "trivia": [
      "Opened his own school at age 19.",
      "Died of pneumonia after his wife poured cold water on him to 'mirror' his illness (cold caught in rain).",
      "Great-great-grandfather of mathematician Geoffrey Hinton.",
      "His daughter Alicia Boole Stott coined the term 'polytope'."
    ],
    "connections": [
      "de-morgan",
      "shannon"
    ],
    "tags": [
      "19th",
      "england",
      "logic",
      "algebra"
    ]
  },
  {
    "id": "de-morgan",
    "name": "Augustus De Morgan",
    "born": "June 27, 1806",
    "died": "March 18, 1871",
    "era": "19th",
    "nationality": "British",
    "fields": [
      "logic",
      "algebra"
    ],
    "short": "British logician and mathematician; formulated De Morgan's laws and coined 'mathematical induction.'",
    "bio": "Born in India (where his father was stationed) and blind in one eye, De Morgan was the first professor of mathematics at the new University College London (1828). He resigned twice on principle — he opposed religious tests and any compromise of academic freedom. He coined the phrase 'mathematical induction' (1838), formalized its logical structure, and gave the laws now bearing his name: ¬(A ∧ B) ≡ ¬A ∨ ¬B. He was a prolific writer of mathematical puzzles, popularizations, and book reviews — more than 700 articles for the Penny Cyclopaedia alone. He loved the oddity that he would be x years old in the year x² (he turned 43 in 1849 = 43²).",
    "keyWorks": [
      "Formal Logic (1847)",
      "A Budget of Paradoxes (posthumous, 1872)"
    ],
    "keyIdeas": [
      "De Morgan's laws: ¬(A ∧ B) ≡ ¬A ∨ ¬B and ¬(A ∨ B) ≡ ¬A ∧ ¬B",
      "Coined 'mathematical induction'",
      "Relation algebra"
    ],
    "trivia": [
      "Loved that he was x years old in the year x² (43 in 1849).",
      "Refused honorary degrees and membership in the Royal Society on principle.",
      "Coined the term 'mathematical induction'.",
      "First mathematics professor at University College London."
    ],
    "connections": [
      "boole",
      "hamilton",
      "cayley"
    ],
    "tags": [
      "19th",
      "britain",
      "logic",
      "induction"
    ]
  },
  {
    "id": "cayley",
    "name": "Arthur Cayley",
    "born": "August 16, 1821",
    "died": "January 26, 1895",
    "era": "19th",
    "nationality": "English",
    "fields": [
      "algebra",
      "geometry"
    ],
    "short": "English mathematician; founder of matrix theory and group theory; practiced law for 14 years while publishing 250 papers.",
    "bio": "Cayley was a prodigy who entered Trinity College, Cambridge at 17 and graduated Senior Wrangler. He trained as a barrister and practiced law for 14 years, publishing some 250 mathematical papers in his spare time. In 1863 the new Sadleirian Chair at Cambridge was created and he accepted it at half his lawyer's income. His 'A Memoir on the Theory of Matrices' (1858) founded matrix theory and proved the Cayley-Hamilton theorem. He defined an abstract group (1854) in essentially the modern way. His collected works fill 13 massive quarto volumes and contain 966 papers.",
    "keyWorks": [
      "A Memoir on the Theory of Matrices (1858)",
      "Collected Mathematical Papers (13 vols.)"
    ],
    "keyIdeas": [
      "Matrix algebra",
      "Cayley-Hamilton theorem",
      "Abstract definition of a group (1854)",
      "Cayley's theorem: every group is a subgroup of a symmetric group",
      "Cayley numbers (octonions) — co-discovered with Graves",
      "Cayley graph"
    ],
    "trivia": [
      "Practiced law for 14 years while publishing 250 papers.",
      "Named the 'octonions' (Cayley numbers).",
      "Published 966 papers in total.",
      "Accepted a Cambridge chair at half his lawyer's income."
    ],
    "connections": [
      "sylvester",
      "hamilton",
      "klein"
    ],
    "tags": [
      "19th",
      "england",
      "algebra",
      "matrices",
      "groups"
    ]
  },
  {
    "id": "sylvester",
    "name": "James Joseph Sylvester",
    "born": "September 3, 1814",
    "died": "March 15, 1897",
    "era": "19th",
    "nationality": "English",
    "fields": [
      "algebra",
      "number theory"
    ],
    "short": "English-Jewish mathematician barred from a Cambridge degree; coined 'matrix,' 'graph,' and 'discriminant.'",
    "bio": "Sylvester, a Jew, could not take his Cambridge BA because he refused to swear the Thirty-Nine Articles, and was forbidden academic posts in Britain. He became a fencing teacher, an actuary, read for the Bar, and was briefly a professor at the University of Virginia — resigning after striking a student with a sword-cane. In 1855 Cambridge finally gave him his degree. He became professor at Johns Hopkins (1876-83), where he founded America's first research-oriented mathematics department and the American Journal of Mathematics. At 69 he succeeded H.J.S. Smith as Savilian Professor at Oxford. Prolific and poetic, he coined more mathematical terms than any other mathematician: matrix, graph, discriminant, invariant, totient, Jacobian, and many more.",
    "keyWorks": [
      "Papers on invariant theory",
      "The Laws of Verse (poetry, 1870)"
    ],
    "keyIdeas": [
      "Coined the terms 'matrix', 'graph', 'discriminant', 'invariant', 'totient'",
      "Sylvester's law of inertia (quadratic forms)",
      "Theory of invariants (with Cayley)",
      "Sylvester-Gallai theorem"
    ],
    "trivia": [
      "Struck a student with a sword-cane at the University of Virginia.",
      "Denied his Cambridge degree for 45 years because he was Jewish.",
      "Founded the American Journal of Mathematics.",
      "Wrote a book of poetry — The Laws of Verse."
    ],
    "connections": [
      "cayley",
      "hardy"
    ],
    "tags": [
      "19th",
      "england",
      "america",
      "algebra",
      "terminology"
    ]
  },
  {
    "id": "chebyshev",
    "name": "Pafnuty Chebyshev",
    "born": "May 16, 1821",
    "died": "December 8, 1894",
    "era": "19th",
    "nationality": "Russian",
    "fields": [
      "number theory",
      "probability",
      "analysis"
    ],
    "short": "Founder of the St. Petersburg mathematical school; proved Bertrand's postulate at age 29.",
    "bio": "Chebyshev was born with two left feet (congenital deformity) that kept him from playing with other children and, he later said, made him turn to mathematics. In 1850 he proved Bertrand's postulate: for any n > 1, there is always a prime between n and 2n. He showed that π(n) satisfies A·n/ln n < π(n) < B·n/ln n for specific constants — a major step toward the prime number theorem. His work on probability introduced Chebyshev's inequality, and his orthogonal polynomials are still widely used in approximation theory. His students Markov, Lyapunov, and Voronoy founded the modern Russian mathematical tradition.",
    "keyWorks": [
      "Théorie des nombres (lectures)",
      "Papers in Crelle's Journal and Liouville's Journal"
    ],
    "keyIdeas": [
      "Bertrand's postulate: there is always a prime between n and 2n",
      "Chebyshev's inequality in probability",
      "Chebyshev polynomials",
      "Chebyshev distance (L∞ metric)",
      "Chebyshev functions θ(x), ψ(x) in analytic number theory"
    ],
    "trivia": [
      "Learned mathematics from his cousin, who tutored him for free.",
      "Had a congenital foot deformity.",
      "Invented a walking mechanism (the Chebyshev linkage) and a computing machine.",
      "Teacher of Markov and Lyapunov."
    ],
    "connections": [
      "markov",
      "lyapunov",
      "hadamard"
    ],
    "tags": [
      "19th",
      "russia",
      "number-theory",
      "probability"
    ]
  },
  {
    "id": "liouville",
    "name": "Joseph Liouville",
    "born": "March 24, 1809",
    "died": "September 8, 1882",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "analysis",
      "number theory",
      "mechanics"
    ],
    "short": "French mathematician who constructed the first provably transcendental numbers (1844) and edited Galois's posthumous papers.",
    "bio": "Liouville founded the Journal de mathématiques pures et appliquées ('Liouville's Journal') in 1836 and edited it for 39 years, publishing the first generation of French analysts. In 1843, fourteen years after Galois's death, Liouville realized what Galois had done and in 1846 edited his papers for publication — rescuing Galois theory from oblivion. In 1844 he constructed the first numbers provably transcendental (Liouville numbers such as Σ 10^(−n!)), decades before Hermite proved e transcendental. Liouville also discovered, in 1836, that the range of an analytic function bounded on all of ℂ must be a single point (Liouville's theorem in complex analysis).",
    "keyWorks": [
      "Founding of Journal de mathématiques pures et appliquées (1836)",
      "Numerous papers, 1830-80"
    ],
    "keyIdeas": [
      "First proof that transcendental numbers exist (1844)",
      "Liouville's theorem in complex analysis (bounded entire ⇒ constant)",
      "Liouville's theorem in Hamiltonian mechanics (phase-space volume is preserved)",
      "Sturm-Liouville theory"
    ],
    "trivia": [
      "Edited Galois's papers 14 years after his death.",
      "Founded 'Liouville's Journal' — still in publication.",
      "Constructed the first transcendental number."
    ],
    "connections": [
      "galois",
      "sturm",
      "hermite",
      "cauchy"
    ],
    "tags": [
      "19th",
      "france",
      "analysis",
      "transcendental"
    ]
  },
  {
    "id": "hermite",
    "name": "Charles Hermite",
    "born": "December 24, 1822",
    "died": "January 14, 1901",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "analysis",
      "number theory",
      "algebra"
    ],
    "short": "French mathematician who proved e is transcendental (1873); teacher of Poincaré.",
    "bio": "Hermite was born with a congenital leg deformity and limped all his life. He wrote his first paper at 20 proving the Jacobi conjecture on abelian functions. In 1873 he proved that e is transcendental — the first transcendental number known to be a 'natural' constant. His techniques inspired Lindemann's 1882 proof that π is transcendental. Hermite detested modern rigorism and once wrote: 'I turn aside with a shudder of horror from this lamentable plague of functions which have no derivatives.' Teacher of Poincaré, Appell, and Borel, he dominated French mathematics for a generation.",
    "keyWorks": [
      "Cours d'analyse (Hermite's lectures at École Polytechnique)",
      "Sur la fonction exponentielle (1873)"
    ],
    "keyIdeas": [
      "Proof that e is transcendental (1873)",
      "Hermite polynomials",
      "Hermitian matrices (self-adjoint)",
      "Hermite's interpolation formula",
      "Solved the general quintic using elliptic modular functions"
    ],
    "trivia": [
      "Had a congenital leg deformity.",
      "'I turn aside with a shudder of horror from this lamentable plague of functions which have no derivatives.'",
      "Failed the École Polytechnique entrance exam the first time.",
      "Teacher of Poincaré."
    ],
    "connections": [
      "liouville",
      "lindemann",
      "poincare",
      "jacobi"
    ],
    "tags": [
      "19th",
      "france",
      "transcendental",
      "analysis"
    ]
  },
  {
    "id": "riemann",
    "name": "Bernhard Riemann",
    "born": "September 17, 1826",
    "died": "July 20, 1866",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "analysis",
      "geometry",
      "number theory"
    ],
    "short": "German mathematician whose work reshaped analysis, geometry, and number theory; proposed the Riemann Hypothesis.",
    "bio": "The son of a poor Lutheran pastor, Riemann was painfully shy all his life. His 1851 doctoral thesis (supervised by Gauss) founded complex analysis in its modern form (Riemann surfaces). His 1854 habilitation lecture 'Über die Hypothesen welche der Geometrie zu Grunde liegen,' delivered before the aged Gauss, founded Riemannian geometry — the mathematical framework Einstein would use 60 years later for general relativity. His eight-page paper on primes (1859), his only work on number theory, defined the Riemann zeta function ζ(s), conjectured that all its nontrivial zeros have real part 1/2 (the Riemann Hypothesis, #1 on Hilbert's 1900 list and #1 of the Clay Millennium Problems, still open in 2026), and outlined the proof of the Prime Number Theorem. Riemann died of tuberculosis in Italy at 39. His housekeeper, 'tidying up,' destroyed many of his papers.",
    "keyWorks": [
      "Grundlagen für eine allgemeine Theorie der Functionen (1851 thesis)",
      "Über die Hypothesen welche der Geometrie zu Grunde liegen (1854)",
      "Ueber die Anzahl der Primzahlen unter einer gegebenen Größe (1859)"
    ],
    "keyIdeas": [
      "Riemann Hypothesis — nontrivial zeros of ζ(s) have Re(s) = 1/2",
      "Riemann surfaces",
      "Riemannian geometry — generalized curved spaces",
      "Riemann integral",
      "Riemann zeta function and its functional equation",
      "Cauchy-Riemann equations (co-namer)",
      "Riemann mapping theorem (stated)"
    ],
    "trivia": [
      "Painfully shy; suffered several nervous breakdowns.",
      "Gauss called his habilitation lecture 'of the most elevated nature'.",
      "His housekeeper destroyed many of his unpublished papers after his death.",
      "Died at 39 of tuberculosis."
    ],
    "connections": [
      "gauss",
      "dirichlet",
      "dedekind",
      "klein",
      "hilbert"
    ],
    "tags": [
      "19th",
      "germany",
      "number-theory",
      "geometry",
      "zeta"
    ]
  },
  {
    "id": "dedekind",
    "name": "Richard Dedekind",
    "born": "October 6, 1831",
    "died": "February 12, 1916",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "algebra",
      "number theory",
      "foundations"
    ],
    "short": "German mathematician who defined the real numbers via Dedekind cuts and founded modern algebra.",
    "bio": "Dedekind was the last student of Gauss (doctoral 1852). Close friend of Riemann, he edited Riemann's and Dirichlet's collected works. His Stetigkeit und irrationale Zahlen (1872) defined irrationals rigorously via 'Dedekind cuts' — partitions of the rationals into two sets. His Was sind und was sollen die Zahlen? (1888) gave a set-theoretic definition of the natural numbers. In algebra, he replaced Kummer's 'ideal numbers' with actual ideals — subsets of a ring — founding the theory of ideals and the concept of the ring itself. He never married, lived with his sister, and held a professorship at the technical college in Brunswick (never a major university). He was for a time erroneously listed as deceased in an 1886 calendar, and he playfully corrected it.",
    "keyWorks": [
      "Stetigkeit und irrationale Zahlen (1872)",
      "Was sind und was sollen die Zahlen? (1888)",
      "Vorlesungen über Zahlentheorie (edited from Dirichlet, 1863+)"
    ],
    "keyIdeas": [
      "Dedekind cuts — rigorous construction of the reals",
      "Ideals in a ring",
      "Dedekind domain",
      "Dedekind-infinite set (bijection with a proper subset)",
      "Axiomatic definition of the natural numbers"
    ],
    "trivia": [
      "Last doctoral student of Gauss.",
      "Erroneously listed as dead in an 1886 calendar; he wrote to say it was news to him.",
      "Close friend of Cantor; defended set theory against Kronecker.",
      "Never held a major university chair."
    ],
    "connections": [
      "gauss",
      "dirichlet",
      "riemann",
      "cantor",
      "kronecker"
    ],
    "tags": [
      "19th",
      "germany",
      "algebra",
      "foundations"
    ]
  },
  {
    "id": "kronecker",
    "name": "Leopold Kronecker",
    "born": "December 7, 1823",
    "died": "December 29, 1891",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "algebra",
      "number theory"
    ],
    "short": "German mathematician; 'God made the integers; all else is the work of man.' Fierce opponent of Cantor's infinities.",
    "bio": "Kronecker was independently wealthy, made a fortune in banking and farming in his twenties, and retired at 30 to do mathematics. A finitist in philosophy, he rejected any mathematics that could not be reduced to a finite construction from the integers — 'Die ganzen Zahlen hat der liebe Gott gemacht, alles andere ist Menschenwerk' (God made the integers, all else is the work of man). He ferociously opposed Weierstrass's irrationals, Dedekind's cuts, and above all Cantor's transfinite sets, calling Cantor a 'corrupter of youth' and a 'scientific charlatan.' His Kronecker-Weber theorem (1853) characterizes abelian extensions of ℚ, and his Jugendtraum (Hilbert's 12th problem) remains partly open. Despite his destructive criticism, his constructive algebra was decades ahead of its time.",
    "keyWorks": [
      "Vorlesungen über Zahlentheorie (lectures)",
      "Grundzüge einer arithmetischen Theorie der algebraischen Grössen (1882)"
    ],
    "keyIdeas": [
      "Kronecker-Weber theorem",
      "Kronecker delta δᵢⱼ",
      "Kronecker product of matrices",
      "Kronecker's Jugendtraum (Hilbert's 12th problem)",
      "Constructive mathematics (founder)"
    ],
    "trivia": [
      "'God made the integers; all else is the work of man.'",
      "Called Cantor a 'scientific charlatan' and a 'corrupter of youth'.",
      "Independently wealthy; retired at 30 to do mathematics full-time.",
      "Blocked Cantor from getting a professorship at Berlin."
    ],
    "connections": [
      "kummer",
      "cantor",
      "dedekind",
      "weierstrass"
    ],
    "tags": [
      "19th",
      "germany",
      "algebra",
      "finitism"
    ]
  },
  {
    "id": "cantor",
    "name": "Georg Cantor",
    "born": "March 3, 1845",
    "died": "January 6, 1918",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "set theory",
      "foundations"
    ],
    "short": "Founder of set theory; proved different infinities exist; spent the last decades of his life in a mental asylum.",
    "bio": "Cantor was born in St. Petersburg and settled in Halle, a backwater where he spent his entire career. In 1874 he proved that the reals cannot be put in bijection with the naturals — showing that there are different sizes of infinity. His diagonal argument (1891) generalized this. He introduced the concept of cardinality, ℵ₀, ℵ₁, 2^ℵ₀ = ℵ (the continuum), and formulated the Continuum Hypothesis. Kronecker's violent opposition, plus Cantor's own confrontation with the paradoxes of set theory, triggered severe mental breakdowns from 1884 on. He was repeatedly hospitalized and became obsessed with proving Bacon wrote Shakespeare and that Joseph of Arimathea was the biological father of Jesus. He died in a sanatorium during the hunger of World War I. Hilbert famously declared, 'No one will expel us from the paradise which Cantor has created.'",
    "keyWorks": [
      "On a Property of the Collection of All Real Algebraic Numbers (1874)",
      "Über eine elementare Frage der Mannigfaltigkeitslehre (1891 — diagonal argument)",
      "Beiträge zur Begründung der transfiniten Mengenlehre (1895, 1897)"
    ],
    "keyIdeas": [
      "Set theory",
      "Cardinality and different sizes of infinity",
      "Cantor's diagonal argument",
      "Transfinite numbers ℵ₀, ℵ₁, ..., ω",
      "Continuum Hypothesis: |ℝ| = ℵ₁",
      "Cantor set (first fractal studied)",
      "Cantor-Bernstein-Schröder theorem"
    ],
    "trivia": [
      "Spent his last decades in and out of mental asylums.",
      "Became obsessed with proving Bacon wrote Shakespeare.",
      "Kronecker called him 'a corrupter of youth'.",
      "Hilbert: 'No one will expel us from the paradise Cantor created.'",
      "Died during WWI of starvation in a sanatorium."
    ],
    "connections": [
      "dedekind",
      "kronecker",
      "hilbert",
      "weierstrass"
    ],
    "tags": [
      "19th",
      "germany",
      "set-theory",
      "infinity",
      "foundations"
    ]
  },
  {
    "id": "klein",
    "name": "Felix Klein",
    "born": "April 25, 1849",
    "died": "June 22, 1925",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "geometry",
      "algebra",
      "analysis"
    ],
    "short": "German mathematician whose 'Erlangen Program' unified geometry by classifying it via transformation groups.",
    "bio": "Klein was born on 4·3²·5·7² (25 April 1849) — he loved that his birth date factored this way. His 1872 Erlangen Program classified geometries by their groups of transformations (Euclidean = rigid motions; projective = projective transformations; etc.), unifying the various 19th-century geometries. He transformed Göttingen into the world's leading mathematical center, recruiting David Hilbert in 1895. His Klein bottle (1882) is a non-orientable surface with no boundary — a kind of closed Möbius strip in 4D. Klein was the first to prove that the modular group acts discontinuously on the upper half-plane. He suffered a breakdown in 1882 from overwork and trying to compete with Poincaré, after which he shifted to teaching, writing, and mathematical politics rather than research.",
    "keyWorks": [
      "Vergleichende Betrachtungen über neuere geometrische Forschungen (1872 — the Erlangen Program)",
      "Vorlesungen über das Ikosaeder (1884)",
      "Elementarmathematik vom höheren Standpunkte (1908)"
    ],
    "keyIdeas": [
      "Erlangen Program (1872) — geometry = study of invariants of a transformation group",
      "Klein bottle",
      "Klein four-group V",
      "Klein's encyclopedia project",
      "Solution of the quintic using the icosahedron"
    ],
    "trivia": [
      "Proud his birthdate 25 April 1849 factors as 5² · (4·3²) · 7².",
      "Had a nervous breakdown in 1882 after losing a race with Poincaré.",
      "Recruited Hilbert to Göttingen.",
      "First to admit women (Grace Chisholm Young, 1895) to German math PhD programs."
    ],
    "connections": [
      "hilbert",
      "lie",
      "poincare"
    ],
    "tags": [
      "19th",
      "germany",
      "geometry",
      "göttingen",
      "groups"
    ]
  },
  {
    "id": "lie",
    "name": "Sophus Lie",
    "born": "December 17, 1842",
    "died": "February 18, 1899",
    "era": "19th",
    "nationality": "Norwegian",
    "fields": [
      "geometry",
      "groups",
      "differential equations"
    ],
    "short": "Norwegian founder of Lie groups and Lie algebras; friends with Felix Klein.",
    "bio": "Lie was a Norwegian giant (198 cm tall) and an enthusiastic hiker. He and Felix Klein traveled and worked together in Paris in 1870 until Lie was arrested by the French as a German spy (they thought his math notes were code) during the Franco-Prussian War. He spent a month in Fontainebleau prison. His theory of continuous transformation groups (now Lie groups) grew from his effort to do for differential equations what Galois had done for algebraic equations. Though he became mentally ill in 1889, he recovered and continued work. His Theorie der Transformationsgruppen (three volumes, 1888-93) was written with Friedrich Engel. Lie died of pernicious anemia back in Norway, where a Lie Prize (worth more than the Abel Prize at the time) had been established.",
    "keyWorks": [
      "Theorie der Transformationsgruppen (1888-93, with Engel)"
    ],
    "keyIdeas": [
      "Lie groups (continuous transformation groups)",
      "Lie algebras (infinitesimal generators)",
      "Lie's third theorem (correspondence between Lie groups and Lie algebras)",
      "Contact geometry"
    ],
    "trivia": [
      "198 cm (6'6\") tall.",
      "Arrested as a German spy during the Franco-Prussian War.",
      "Wrote his math in the margins of his prison Bible.",
      "Norway established a Lie Prize to bring him home."
    ],
    "connections": [
      "klein",
      "engel",
      "cartan-elie"
    ],
    "tags": [
      "19th",
      "norway",
      "groups",
      "differential"
    ]
  },
  {
    "id": "poincare",
    "name": "Henri Poincaré",
    "born": "April 29, 1854",
    "died": "July 17, 1912",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "topology",
      "mechanics",
      "analysis",
      "philosophy"
    ],
    "short": "'The Last Universalist.' Founder of algebraic topology; discovered chaos in the three-body problem; stated the Poincaré conjecture.",
    "bio": "Poincaré was the last mathematician to master essentially all fields of his day. His cousin Raymond was President of France during WWI. A myopic child, he compensated by developing remarkable visual imagination and mental calculation. He was educated at the École Polytechnique and the École des Mines. His 1889 submission for the birthday prize of King Oscar II of Sweden on the three-body problem contained an error — he had assumed stability where there was none. After printing, he had to recall and repay for the entire print run, and rewrote the memoir, discovering what we now call chaos and sensitive dependence on initial conditions. His Analysis Situs (1895) founded algebraic topology; the Poincaré conjecture (every simply-connected closed 3-manifold is homeomorphic to S³) became the first Millennium Prize Problem to be solved, by Perelman in 2002-3. Poincaré was the only person ever elected to all five sections of the Académie française.",
    "keyWorks": [
      "Les méthodes nouvelles de la mécanique céleste (1892-99)",
      "Analysis Situs (1895)",
      "La science et l'hypothèse (1902)",
      "Mémoire on the three-body problem (King Oscar prize, 1889)"
    ],
    "keyIdeas": [
      "Poincaré conjecture (solved by Perelman, 2003)",
      "Founded algebraic topology",
      "Homology and fundamental group π₁",
      "Chaos theory — sensitive dependence on initial conditions (1889)",
      "Poincaré recurrence theorem",
      "Poincaré disk model of hyperbolic geometry",
      "Special relativity — anticipated parts before Einstein",
      "Poincaré-Bendixson theorem"
    ],
    "trivia": [
      "Had to pay for a reprint of his King Oscar prize paper after finding an error.",
      "Cousin Raymond was President of France 1913-1920.",
      "Only person elected to all five sections of the Académie française.",
      "His description of mathematical discovery — working while 'putting my foot on the bus step' — is a classic in psychology of creativity."
    ],
    "connections": [
      "hermite",
      "klein",
      "hilbert",
      "einstein",
      "perelman"
    ],
    "tags": [
      "19th",
      "france",
      "topology",
      "chaos",
      "universalist"
    ]
  },
  {
    "id": "kovalevskaya",
    "name": "Sofia Kovalevskaya",
    "born": "January 15, 1850",
    "died": "February 10, 1891",
    "era": "19th",
    "nationality": "Russian",
    "fields": [
      "analysis",
      "mechanics"
    ],
    "short": "First woman professor of mathematics in modern Europe; the 'Cauchy-Kovalevskaya theorem.'",
    "bio": "Sofia Kovalevskaya's nursery walls were papered with lecture notes on differential and integral calculus, giving her an early fascination. Denied higher education in Russia as a woman, she contracted a 'fictitious marriage' with Vladimir Kovalevsky in 1868 to travel abroad (the marriage later became real). In Berlin, Weierstrass was forbidden by university rules from accepting her as a student and tutored her privately for four years. She received her PhD in absentia from Göttingen in 1874 — the first Russian woman, and one of the first women in Europe, to earn a doctorate in mathematics. After her husband's suicide in 1883, she accepted a professorship at Stockholm (Mittag-Leffler's arrangement), becoming the first woman professor of mathematics in modern Europe. In 1888 she won the Bordin Prize of the French Academy for her solution of the problem of a solid body's rotation about a fixed point (the 'Kovalevskaya top,' one of only three integrable cases). She died of influenza at 41.",
    "keyWorks": [
      "Zur Theorie der partiellen Differentialgleichungen (1874)",
      "Sur le problème de la rotation d'un corps solide autour d'un point fixe (1889)"
    ],
    "keyIdeas": [
      "Cauchy-Kovalevskaya theorem for analytic PDE systems",
      "Kovalevskaya top — third integrable case of rigid body rotation",
      "Abelian integrals reductions"
    ],
    "trivia": [
      "First woman professor of mathematics in modern Europe.",
      "Fictitious marriage to escape Russian restrictions on women — later became real.",
      "Tutored privately by Weierstrass for four years.",
      "Also a novelist and playwright; her novel Nihilist Girl is autobiographical."
    ],
    "connections": [
      "weierstrass",
      "mittag-leffler"
    ],
    "tags": [
      "19th",
      "russia",
      "women",
      "analysis"
    ]
  },
  {
    "id": "markov",
    "name": "Andrey Markov",
    "born": "June 14, 1856",
    "died": "July 20, 1922",
    "era": "19th",
    "nationality": "Russian",
    "fields": [
      "probability",
      "number theory"
    ],
    "short": "Russian mathematician who founded the theory of Markov chains; applied probability to the vowels of Pushkin's Eugene Onegin.",
    "bio": "A student of Chebyshev, Markov extended his teacher's work on the law of large numbers to sequences of dependent random variables — what we now call Markov chains. To popularize his theory, in 1913 he analyzed the sequence of vowels and consonants in the first 20,000 letters of Pushkin's Eugene Onegin, showing they follow a Markov process. Politically, he was a radical — he demanded to be excommunicated from the Russian Orthodox Church in 1912 in solidarity with Leo Tolstoy and named his son after a saint of the opposite political faction.",
    "keyWorks": [
      "Исчисление вероятностей (1900)",
      "Paper on Pushkin's Eugene Onegin (1913)"
    ],
    "keyIdeas": [
      "Markov chains",
      "Markov property (memorylessness)",
      "Markov's inequality in probability",
      "Hidden Markov models (descendants)",
      "MCMC (Markov Chain Monte Carlo) — modern descendant"
    ],
    "trivia": [
      "Applied Markov chains to vowels in Pushkin's Eugene Onegin.",
      "Demanded excommunication from the Russian Orthodox Church.",
      "His son, Andrey Jr., was also a prominent mathematician (constructivist logic)."
    ],
    "connections": [
      "chebyshev",
      "lyapunov",
      "kolmogorov"
    ],
    "tags": [
      "19th",
      "russia",
      "probability",
      "chains"
    ]
  },
  {
    "id": "peano",
    "name": "Giuseppe Peano",
    "born": "August 27, 1858",
    "died": "April 20, 1932",
    "era": "19th",
    "nationality": "Italian",
    "fields": [
      "logic",
      "foundations"
    ],
    "short": "Italian mathematician who axiomatized the natural numbers (Peano axioms) and constructed the space-filling Peano curve.",
    "bio": "Peano taught at the University of Turin for 50 years. His Arithmetices principia, nova methodo exposita (1889) presented the Peano axioms for the natural numbers — using symbolic notation he had largely invented. In 1890 he shocked the mathematical world by constructing a continuous curve that passes through every point of the unit square — the first space-filling curve. Convinced that mathematics should be entirely formalizable, he developed an artificial language, 'Latino sine flexione' (Latin without inflections), and wrote his Formulario Mathematico (1895-1908) entirely in symbols and this simplified Latin. His student Cesare Burali-Forti discovered the first paradox of set theory (1897).",
    "keyWorks": [
      "Arithmetices principia, nova methodo exposita (1889)",
      "Formulario Mathematico (1895-1908)"
    ],
    "keyIdeas": [
      "Peano axioms for natural numbers (1889)",
      "Peano curve — first space-filling continuous curve (1890)",
      "Peano existence theorem for ODEs",
      "Early symbolic notation: ∈, ∪, ∩, ∃, ..."
    ],
    "trivia": [
      "Invented a universal language, 'Latino sine flexione'.",
      "His Formulario is entirely in symbols and Latin-without-grammar.",
      "Constructed the first space-filling curve.",
      "His student Burali-Forti discovered the first set-theory paradox."
    ],
    "connections": [
      "frege",
      "russell",
      "hilbert"
    ],
    "tags": [
      "19th",
      "italy",
      "logic",
      "foundations"
    ]
  },
  {
    "id": "frege",
    "name": "Gottlob Frege",
    "born": "November 8, 1848",
    "died": "July 26, 1925",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "logic",
      "philosophy"
    ],
    "short": "German logician; founder of modern analytic philosophy and predicate logic. Bertrand Russell's 1902 paradox destroyed his life's work.",
    "bio": "Frege spent his career at the University of Jena, largely in obscurity. His Begriffsschrift (1879) introduced predicate logic with quantifiers — the first major advance in formal logic since Aristotle. His Grundgesetze der Arithmetik (Volume I, 1893; Volume II, 1903) aimed to derive all arithmetic from logic. In June 1902, just as Volume II was at the printers, he received a letter from Bertrand Russell pointing out that his Axiom V led to a contradiction (Russell's Paradox: the set of all sets not containing themselves). Frege's acknowledgment in an appendix is among the most poignant in science: 'A scientist can hardly encounter anything more undesirable than to have the foundation give way just as the work is finished.' He never recovered. In old age he turned to anti-Semitic and monarchist politics. Only after his death did Wittgenstein and Russell ensure his ideas became central to philosophy.",
    "keyWorks": [
      "Begriffsschrift (1879)",
      "Die Grundlagen der Arithmetik (1884)",
      "Grundgesetze der Arithmetik, Vols. I-II (1893, 1903)"
    ],
    "keyIdeas": [
      "Predicate logic with quantifiers (∀, ∃)",
      "Logicism — reduction of mathematics to logic",
      "Sense (Sinn) and reference (Bedeutung)",
      "Frege-Russell definition of number"
    ],
    "trivia": [
      "Russell's 1902 letter destroyed his life's work.",
      "His appendix to Vol. II is a famous piece of intellectual honesty.",
      "Largely unknown in his lifetime.",
      "Became anti-Semitic and pro-monarchist in old age."
    ],
    "connections": [
      "russell",
      "peano",
      "wittgenstein",
      "husserl"
    ],
    "tags": [
      "19th",
      "germany",
      "logic",
      "foundations"
    ]
  },
  {
    "id": "hilbert",
    "name": "David Hilbert",
    "born": "January 23, 1862",
    "died": "February 14, 1943",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "algebra",
      "analysis",
      "geometry",
      "foundations",
      "physics"
    ],
    "short": "Leader of early 20th-century mathematics; his 23 problems (1900) set the agenda for the century.",
    "bio": "Hilbert was born in Königsberg (home of Kant and Euler's bridges) and was brought to Göttingen by Klein in 1895. From that year until his retirement in 1930, Göttingen was the center of the mathematical world. On August 8, 1900, at the Second International Congress of Mathematicians in Paris, he delivered the lecture 'Mathematical Problems,' listing 23 unsolved problems that would dominate 20th-century mathematics. His Grundlagen der Geometrie (1899) replaced Euclid's flawed axioms with a complete, consistent system. He advocated a formalist program — that all of mathematics could be reduced to manipulation of symbols with no appeal to meaning — and famously declared: 'We must know. We will know.' (engraved on his tombstone). His program was blown apart by Gödel's Incompleteness Theorems in 1931. When a Nazi minister asked in 1934 how mathematics was doing in Göttingen 'now that it has been freed of Jewish influence,' Hilbert replied: 'Mathematics in Göttingen? There is really none any more.' He died in wartime obscurity; ten people attended his funeral.",
    "keyWorks": [
      "Grundlagen der Geometrie (1899)",
      "Mathematical Problems (1900 ICM address — 23 problems)",
      "Grundzüge der theoretischen Logik (1928, with Ackermann)"
    ],
    "keyIdeas": [
      "The 23 Hilbert problems (1900)",
      "Hilbert space (functional analysis)",
      "Hilbert's Nullstellensatz",
      "Hilbert basis theorem",
      "Hilbert's formalist program",
      "Hilbert's hotel (illustration of infinity)",
      "Axiomatic method"
    ],
    "trivia": [
      "'Wir müssen wissen. Wir werden wissen.' (We must know. We will know.) — on his tombstone.",
      "When asked about the decline of math education, he blamed it on 'girls, automobiles, and books'.",
      "Saved the career of Emmy Noether against anti-woman prejudice: 'This is a university, not a bath-house.'",
      "Gödel's 1931 theorems refuted his formalist program.",
      "Ten people attended his 1943 funeral."
    ],
    "connections": [
      "klein",
      "cantor",
      "minkowski",
      "noether",
      "godel",
      "weyl",
      "einstein"
    ],
    "tags": [
      "19th",
      "20th",
      "germany",
      "göttingen",
      "problems",
      "foundations"
    ]
  },
  {
    "id": "minkowski",
    "name": "Hermann Minkowski",
    "born": "June 22, 1864",
    "died": "January 12, 1909",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "number theory",
      "geometry",
      "relativity"
    ],
    "short": "German mathematician, friend of Hilbert and teacher of Einstein; created the 4D spacetime of special relativity.",
    "bio": "Minkowski shared (with Henry Smith) the 1883 Grand Prix of the Paris Academy for a paper on sums of squares — written when he was 18. He was Einstein's teacher at ETH Zurich (1896-1902); Einstein had skipped his classes and Minkowski later called him a 'lazy dog.' In 1907-8 Minkowski realized that Einstein's 1905 special relativity could be described by a four-dimensional geometry with metric ds² = dx² + dy² + dz² − c²dt². His 1908 lecture 'Raum und Zeit' opens: 'Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows, and only a kind of union of the two will preserve an independent reality.' He died of a ruptured appendix a few months later at age 44.",
    "keyWorks": [
      "Geometrie der Zahlen (1896)",
      "Raum und Zeit (1909)"
    ],
    "keyIdeas": [
      "Minkowski spacetime — 4D geometry of special relativity",
      "Minkowski inequality",
      "Geometry of numbers",
      "Minkowski's theorem (on lattice points in convex bodies)"
    ],
    "trivia": [
      "Called Einstein a 'lazy dog' as a student.",
      "Died at 44 of a ruptured appendix.",
      "Won the Paris Academy Grand Prix at 18.",
      "Close friend of Hilbert since their student days in Königsberg."
    ],
    "connections": [
      "hilbert",
      "einstein",
      "hurwitz"
    ],
    "tags": [
      "19th",
      "germany",
      "geometry",
      "relativity"
    ]
  },
  {
    "id": "hadamard",
    "name": "Jacques Hadamard",
    "born": "December 8, 1865",
    "died": "October 17, 1963",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "number theory",
      "analysis",
      "psychology"
    ],
    "short": "French mathematician who proved the Prime Number Theorem (1896) and wrote a classic study on mathematical invention.",
    "bio": "Hadamard was a slow starter in mathematics — he placed last in arithmetic as a child. He made up for it by living to 97 and doing important work at every age. Independently of de la Vallée Poussin, in 1896 he proved the Prime Number Theorem: π(n) ~ n/ln n. His 1945 Psychology of Invention in the Mathematical Field reported on his survey of famous mathematicians' creative methods (including Einstein's description of 'signs and more or less clear images' that came before words). A Dreyfusard and outspoken anti-fascist, he lost his son-in-law in WWI and two of his sons in WWII. He lived to see his mathematical legacy celebrated at his 75th, 85th, and 95th birthdays.",
    "keyWorks": [
      "Sur la distribution des zéros de la fonction ζ(s) (1896)",
      "Lectures on Cauchy's Problem (1922)",
      "The Psychology of Invention in the Mathematical Field (1945)"
    ],
    "keyIdeas": [
      "Prime Number Theorem (1896)",
      "Hadamard matrices",
      "Hadamard's inequality for determinants",
      "Hadamard three-circles theorem",
      "Well-posed problem (Hadamard's conditions)"
    ],
    "trivia": [
      "Placed last in arithmetic in elementary school.",
      "Lived to 97.",
      "Lost two sons in WWII and a son-in-law in WWI.",
      "Wrote the classic text on mathematical creativity."
    ],
    "connections": [
      "de-la-vallee-poussin",
      "poincare",
      "einstein"
    ],
    "tags": [
      "19th",
      "20th",
      "france",
      "primes",
      "analysis"
    ]
  },
  {
    "id": "perelman",
    "name": "Grigori Perelman",
    "born": "June 13, 1966",
    "died": "",
    "era": "20th",
    "nationality": "Russian",
    "fields": [
      "geometry",
      "topology"
    ],
    "short": "Russian mathematician who proved the Poincaré conjecture (2002-3); refused the Fields Medal and the $1 million Clay prize.",
    "bio": "Grigori 'Grisha' Perelman won a gold medal at the 1982 IMO with a perfect score. After a PhD at Leningrad State and postdocs in the US (1992-95), he returned to the Steklov Institute in St. Petersburg. In November 2002 he posted the first of three preprints on arXiv sketching a proof, using Hamilton's Ricci flow with surgery, of the Geometrization Conjecture (Poincaré being a special case). Experts spent years verifying the proof; it was accepted. In 2006 he was awarded the Fields Medal — he refused it, becoming the first mathematician ever to do so. In 2010 the Clay Mathematics Institute awarded him the $1 million Millennium Prize — he refused that too. 'I'm not interested in money or fame,' he said. 'I don't want to be on display like an animal in a zoo. I'm not a hero of mathematics. I'm not even that successful; that is why I don't want to have everybody looking at me.' He lives reclusively with his mother in St. Petersburg. Reports that he has left mathematics entirely are unverified.",
    "keyWorks": [
      "The entropy formula for the Ricci flow and its geometric applications (2002)",
      "Ricci flow with surgery on three-manifolds (2003)",
      "Finite extinction time for the solutions to the Ricci flow on certain three-manifolds (2003)"
    ],
    "keyIdeas": [
      "Proof of the Poincaré conjecture",
      "Proof of the Geometrization conjecture",
      "Ricci flow with surgery",
      "Perelman's W-functional (entropy for Ricci flow)"
    ],
    "trivia": [
      "Perfect score at the 1982 IMO (gold medal).",
      "First person ever to refuse the Fields Medal (2006).",
      "Refused the $1 million Clay prize (2010).",
      "Lives reclusively with his mother in St. Petersburg.",
      "Last published paper was his 2003 Ricci flow paper."
    ],
    "connections": [
      "hamilton-r",
      "thurston"
    ],
    "tags": [
      "20th",
      "21st",
      "russia",
      "topology",
      "recluse"
    ]
  },
  {
    "id": "tao",
    "name": "Terence Tao",
    "born": "July 17, 1975",
    "died": "",
    "era": "21st",
    "nationality": "Australian-American",
    "fields": [
      "harmonic analysis",
      "number theory",
      "combinatorics"
    ],
    "short": "Australian-American mathematician; Fields Medal 2006; 'Mozart of mathematics.'",
    "bio": "Terence 'Terry' Tao was a child prodigy, scoring 760 on the math SAT at age 8. He earned a bronze IMO medal at 10 (youngest ever), silver at 11, and gold at 13 (still the youngest gold medalist). PhD from Princeton at 21 under Elias Stein. Professor at UCLA since 1996. His work spans harmonic analysis, partial differential equations, combinatorics, and analytic number theory. The Green-Tao theorem (with Ben Green, 2004) shows the primes contain arithmetic progressions of every length — a breakthrough combining additive combinatorics with analytic number theory. Fields Medal 2006. He writes a widely-read math blog and has co-authored papers with hundreds of collaborators. In 2023 he became the first mathematician to win Templeton's Breakthrough Prize in Mathematics and the Abel-like Crafoord Prize.",
    "keyWorks": [
      "The primes contain arbitrarily long arithmetic progressions (with Green, 2004)",
      "Nonlinear dispersive equations: local and global analysis (2006)",
      "Analysis I & II (textbooks, 2006)"
    ],
    "keyIdeas": [
      "Green-Tao theorem",
      "Compressed sensing (with Candès)",
      "Work on the Kakeya conjecture",
      "Bounds in the Erdős discrepancy problem (2015)"
    ],
    "trivia": [
      "Youngest IMO gold medalist ever (age 13).",
      "PhD from Princeton at 21.",
      "Fields Medal 2006.",
      "MacArthur 'genius grant' 2006.",
      "Blog: 'What's New'."
    ],
    "connections": [
      "green-ben",
      "stein-elias",
      "erdos",
      "bourgain"
    ],
    "tags": [
      "21st",
      "australia",
      "america",
      "number-theory",
      "living",
      "fields"
    ]
  },
  {
    "id": "shannon",
    "name": "Claude Shannon",
    "born": "April 30, 1916",
    "died": "February 24, 2001",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "information theory",
      "cryptography"
    ],
    "short": "American 'father of information theory'; applied Boolean algebra to electrical circuits in his 1937 master's thesis.",
    "bio": "Claude Shannon's 1937 MIT master's thesis, 'A Symbolic Analysis of Relay and Switching Circuits,' has been called 'possibly the most important, and also the most famous, master's thesis of the century' — he showed that Boolean algebra could model electrical switching circuits, founding digital design. His 1948 paper 'A Mathematical Theory of Communication' founded information theory: defining the 'bit,' measuring information with the formula H = −Σ pᵢ log pᵢ, and proving the channel coding theorem (noisy channels can transmit information reliably below a capacity threshold). At Bell Labs he cracked cryptography's theoretical foundations in a classified WWII report (declassified 1949). A lifelong juggler and tinkerer, he built a mechanical mouse (Theseus, 1950) that could solve a maze, and a gadget he called 'The Ultimate Machine' — when turned on, a hand emerged from a box and turned it off.",
    "keyWorks": [
      "A Symbolic Analysis of Relay and Switching Circuits (1937 master's thesis)",
      "A Mathematical Theory of Communication (1948)",
      "Communication Theory of Secrecy Systems (1949)"
    ],
    "keyIdeas": [
      "Information theory",
      "Shannon entropy H(X) = −Σ p log p",
      "Channel capacity and the noisy-channel coding theorem",
      "Source coding theorem (data compression limit)",
      "Shannon-Hartley theorem",
      "Boolean logic for circuit design (1937)"
    ],
    "trivia": [
      "Built a mechanical 'Ultimate Machine' that turned itself off.",
      "Taught himself to juggle while riding a unicycle.",
      "Spent his last years with Alzheimer's disease.",
      "Invented the first wearable computer (1961, with Thorp) to beat roulette in Las Vegas."
    ],
    "connections": [
      "boole",
      "turing",
      "von-neumann",
      "nyquist"
    ],
    "tags": [
      "20th",
      "america",
      "information",
      "computation"
    ]
  },
  {
    "id": "nash",
    "name": "John Nash",
    "born": "June 13, 1928",
    "died": "May 23, 2015",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "game theory",
      "geometry",
      "differential equations"
    ],
    "short": "American mathematician; Nobel Prize in Economics 1994; Abel Prize 2015; subject of A Beautiful Mind.",
    "bio": "John Forbes Nash Jr. published four papers that made him famous in mathematics, any one of which would have sufficed: (1) his 28-page PhD thesis (1950) introducing Nash equilibrium in game theory; (2) the Nash embedding theorem (1954, 1956) that every Riemannian manifold can be isometrically embedded in Euclidean space; (3) work on parabolic and elliptic PDEs, including the Nash-Moser theorem; (4) continuity of solutions of elliptic equations, for which he shared credit with Ennio De Giorgi. In 1959, at age 30, he suffered a catastrophic schizophrenic breakdown and spent much of the next 25 years in and out of mental hospitals. He gradually recovered in the 1980s and 1990s. In 1994 he shared the Nobel Memorial Prize in Economics for his game-theory work. Sylvia Nasar's biography A Beautiful Mind (1998) and the 2001 film made him world-famous. He was killed in a taxi accident in New Jersey in 2015, along with his wife Alicia, returning from receiving the Abel Prize.",
    "keyWorks": [
      "Non-Cooperative Games (1950 thesis)",
      "The Imbedding Problem for Riemannian Manifolds (1956)",
      "Continuity of Solutions of Parabolic and Elliptic Equations (1958)"
    ],
    "keyIdeas": [
      "Nash equilibrium (game theory)",
      "Nash embedding theorem",
      "Nash-Moser implicit function theorem",
      "Nash-De Giorgi theorem on PDE regularity"
    ],
    "trivia": [
      "Nobel Prize in Economics 1994.",
      "Abel Prize 2015 — died in a taxi on the way home from receiving it.",
      "Spent 25 years struggling with schizophrenia.",
      "A Beautiful Mind film won 4 Academy Awards in 2001.",
      "Never won a Fields Medal."
    ],
    "connections": [
      "von-neumann",
      "morgenstern",
      "nirenberg",
      "de-giorgi"
    ],
    "tags": [
      "20th",
      "america",
      "games",
      "geometry",
      "nobel"
    ]
  },
  {
    "id": "hamilton-r",
    "name": "Richard Hamilton",
    "born": "January 10, 1943",
    "died": "September 29, 2024",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "geometry",
      "topology"
    ],
    "short": "American mathematician who introduced the Ricci flow (1982), which Perelman later used to prove the Poincaré Conjecture.",
    "bio": "Hamilton developed the Ricci flow in 1982 as a geometric evolution equation that deforms a Riemannian metric in the direction of its Ricci curvature. He showed that the Ricci flow on a closed 3-manifold with positive Ricci curvature evolves to a round sphere. He proposed the Ricci flow as a path to the Poincaré and Geometrization conjectures, but encountered 'singularities' he couldn't fully control. Perelman completed the program in 2002-3 with 'surgery' on singularities. Hamilton shared the 2011 Shaw Prize and 2009 Clay Research Award with Perelman, and received the Leroy P. Steele Prize for Seminal Contribution.",
    "keyWorks": [
      "Three-manifolds with positive Ricci curvature (1982)"
    ],
    "keyIdeas": [
      "Ricci flow",
      "Hamilton's compactness theorem",
      "Program for proving the Poincaré/Geometrization conjectures"
    ],
    "trivia": [
      "Shared the Shaw Prize with Perelman (2011).",
      "His Ricci flow was the core tool Perelman used.",
      "Died in 2024 at 81."
    ],
    "connections": [
      "perelman",
      "thurston",
      "yau"
    ],
    "tags": [
      "20th",
      "america",
      "geometry",
      "ricci"
    ]
  },
  {
    "id": "thurston",
    "name": "William Thurston",
    "born": "October 30, 1946",
    "died": "August 21, 2012",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "geometry",
      "topology"
    ],
    "short": "American mathematician; Fields Medal 1982; formulated the Geometrization Conjecture for 3-manifolds.",
    "bio": "Thurston revolutionized low-dimensional topology with his geometric approach. His Geometrization Conjecture (1982) states that every 3-manifold can be cut into pieces each admitting one of eight canonical geometric structures — Poincaré's conjecture is a consequence. He proved major cases himself but the full proof came from Perelman in 2003. A deeply intuitive geometer, Thurston emphasized visual understanding and hands-on exploration — his course notes at Princeton (informal, mimeographed) circulated worldwide as a cult classic. His essay 'On Proof and Progress in Mathematics' (1994) is a beloved reflection on what mathematical understanding really is. He died of melanoma at 65.",
    "keyWorks": [
      "Geometry and Topology of Three-Manifolds (Princeton notes, 1978-81)",
      "On Proof and Progress in Mathematics (1994)"
    ],
    "keyIdeas": [
      "Geometrization Conjecture (1982)",
      "Thurston's eight model geometries for 3-manifolds",
      "Hyperbolic Dehn surgery theorem",
      "Thurston norm"
    ],
    "trivia": [
      "Fields Medal 1982.",
      "His Princeton notes became a cult classic though never officially published.",
      "Emphasized hands-on, visual understanding in mathematics.",
      "Died of melanoma at 65."
    ],
    "connections": [
      "perelman",
      "hamilton-r",
      "milnor"
    ],
    "tags": [
      "20th",
      "america",
      "topology",
      "geometry",
      "fields"
    ]
  },
  {
    "id": "milnor",
    "name": "John Milnor",
    "born": "February 20, 1931",
    "died": "",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "topology",
      "geometry"
    ],
    "short": "American mathematician; discovered exotic 7-spheres (1956); Fields Medal 1962, Abel Prize 2011.",
    "bio": "Milnor is one of only five mathematicians to win the Fields Medal, Wolf Prize, and Abel Prize. His 1956 discovery of exotic smooth structures on the 7-sphere — topological 7-spheres that are not diffeomorphic to the standard S⁷ — was one of the great surprises of 20th-century topology. His books (Morse Theory, Topology from the Differentiable Viewpoint, Characteristic Classes with Stasheff) are models of mathematical exposition, widely regarded as the best introductions to their subjects. At the IAS and then Stony Brook, he has continued to work well into his 90s, recently on dynamical systems.",
    "keyWorks": [
      "On manifolds homeomorphic to the 7-sphere (1956)",
      "Morse Theory (1963)",
      "Topology from the Differentiable Viewpoint (1965)",
      "Characteristic Classes (with Stasheff, 1974)"
    ],
    "keyIdeas": [
      "Exotic 7-spheres — 28 different smooth structures on the topological 7-sphere",
      "Milnor fibration",
      "Milnor conjecture on Hermitian K-theory (proved by Voevodsky)"
    ],
    "trivia": [
      "Discovered exotic spheres while trying to prove no exotic smooth structures exist.",
      "Fields Medal 1962; Wolf Prize 1989; Abel Prize 2011.",
      "One of his undergraduate problems became his later Milnor conjecture.",
      "His PhD advisor Ralph Fox's problem list was famously influential."
    ],
    "connections": [
      "kervaire",
      "thurston",
      "stasheff"
    ],
    "tags": [
      "20th",
      "21st",
      "america",
      "topology",
      "living",
      "fields"
    ]
  },
  {
    "id": "mandelbrot",
    "name": "Benoit Mandelbrot",
    "born": "November 20, 1924",
    "died": "October 14, 2010",
    "era": "20th",
    "nationality": "Polish-French-American",
    "fields": [
      "fractals"
    ],
    "short": "Polish-born mathematician who coined 'fractal' (1975) and discovered the Mandelbrot set (1980).",
    "bio": "Mandelbrot's family fled Poland for France in 1936. During WWII he hid in the countryside, educating himself and 'learning to read' mathematics without textbooks. He attended the École Polytechnique after the war, then moved to IBM Research in 1958, where he worked for 35 years — outside academia, giving him freedom to pursue his own unconventional program. His 1975 Les objets fractals introduced 'fractal.' His 1980 computer plots of z ↦ z² + c revealed the extraordinary structure now called the Mandelbrot set. His 1982 The Fractal Geometry of Nature argued that clouds, mountains, coastlines, and stock prices are all fractal — challenging the smooth Euclidean models of classical science.",
    "keyWorks": [
      "Les objets fractals (1975)",
      "The Fractal Geometry of Nature (1982)"
    ],
    "keyIdeas": [
      "Fractal geometry (coined 'fractal')",
      "Mandelbrot set — the iterations of z ↦ z² + c",
      "Fractal dimension for natural objects",
      "Self-similarity as a universal principle"
    ],
    "trivia": [
      "Largely self-taught during WWII in occupied France.",
      "Worked at IBM for 35 years outside mainstream academia.",
      "Coined the word 'fractal' from Latin 'fractus' (broken).",
      "His TED talks introduced fractals to the public."
    ],
    "connections": [
      "julia",
      "fatou",
      "hausdorff"
    ],
    "tags": [
      "20th",
      "france",
      "america",
      "fractals"
    ]
  },
  {
    "id": "conway",
    "name": "John Horton Conway",
    "born": "December 26, 1937",
    "died": "April 11, 2020",
    "era": "20th",
    "nationality": "English",
    "fields": [
      "group theory",
      "combinatorics",
      "games"
    ],
    "short": "English mathematician; invented the Game of Life (1970); discovered surreal numbers; solved the Monster group mysteries.",
    "bio": "Conway invented the cellular automaton Game of Life in 1970 (first popularized in Martin Gardner's Scientific American column) — it became one of the most famous mathematical objects of the century. His work on finite groups led to the 'Atlas of Finite Groups' (1985) and major discoveries including the Conway groups Co₁, Co₂, Co₃ among the sporadic simple groups. He invented the surreal numbers (1974) — a vast number system containing all reals, all ordinals, and infinitesimals, built from games. He proved (with Simon Kochen) the Free Will Theorem: if experimenters have free will, so do elementary particles. A flamboyant personality at Cambridge and later Princeton, he carried a rope in his pocket and was legendary for solving doomsday calendar problems in seconds. He died of COVID-19 at 82.",
    "keyWorks": [
      "On Numbers and Games (1976)",
      "The Atlas of Finite Groups (1985, with others)",
      "The Sensual (Quadratic) Form (1997)"
    ],
    "keyIdeas": [
      "Conway's Game of Life (1970)",
      "Surreal numbers",
      "Conway groups Co₁, Co₂, Co₃ (sporadic simple groups)",
      "Conway's Look-and-Say sequence",
      "Monstrous Moonshine conjecture",
      "Free Will Theorem",
      "Doomsday algorithm for weekdays"
    ],
    "trivia": [
      "Invented the Game of Life.",
      "Could mentally compute the day of the week for any date.",
      "Carried a rope in his pocket.",
      "Died of COVID-19 in April 2020.",
      "His '15 theorem' on quadratic forms (with Schneeberger) is a gem."
    ],
    "connections": [
      "norton",
      "gardner",
      "knuth"
    ],
    "tags": [
      "20th",
      "britain",
      "games",
      "groups"
    ]
  },
  {
    "id": "knuth",
    "name": "Donald Knuth",
    "born": "January 10, 1938",
    "died": "",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "computer science",
      "combinatorics"
    ],
    "short": "American computer scientist; author of The Art of Computer Programming; creator of TeX.",
    "bio": "Knuth's monumental The Art of Computer Programming began in 1962 and is still in progress — he had intended seven volumes, of which five are fully or partly published by 2026. Disgusted with the typesetting of the second edition of Volume 2 in the 1970s, he took a break of a decade to design TeX and METAFONT, giving the world the standard tools for typesetting mathematics. He offers a reward check of one hexadecimal dollar ($2.56) for any error found in his books (famously framed rather than cashed). A lifelong Lutheran, he has also written 3:16 Bible Texts Illuminated (1990). Knuth retired as a Stanford professor in 1990 to concentrate on TAOCP.",
    "keyWorks": [
      "The Art of Computer Programming (1968-)",
      "The TeXbook (1984)",
      "Concrete Mathematics (with Graham and Patashnik, 1989)"
    ],
    "keyIdeas": [
      "Analysis of algorithms (founded as a field)",
      "TeX and METAFONT typesetting systems",
      "Knuth-Morris-Pratt string search",
      "Knuth's up-arrow notation for huge numbers",
      "LR parsing"
    ],
    "trivia": [
      "Pays $2.56 ('hexadecimal dollar') for each error found in his books.",
      "Stopped using email in 1990 to concentrate on his books.",
      "Plays the organ and has published music.",
      "Still working on Volume 4 of TAOCP in 2026."
    ],
    "connections": [
      "dijkstra",
      "knuth"
    ],
    "tags": [
      "20th",
      "america",
      "computation",
      "living"
    ]
  },
  {
    "id": "dijkstra",
    "name": "Edsger Dijkstra",
    "born": "May 11, 1930",
    "died": "August 6, 2002",
    "era": "20th",
    "nationality": "Dutch",
    "fields": [
      "computer science"
    ],
    "short": "Dutch pioneer of structured programming; inventor of Dijkstra's shortest-path algorithm (1956).",
    "bio": "Dijkstra conceived of his famous shortest-path algorithm in about 20 minutes in 1956, sitting in a café with his fiancée — he invented it to test the logic of the ARMAC computer at Amsterdam's Mathematical Centre. His 1968 letter 'Go To Statement Considered Harmful' started the structured-programming revolution. Famously opinionated and quotable ('The question of whether machines can think is about as relevant as the question of whether submarines can swim'), he deliberately eschewed typewriters and word processors: all his famous 'EWDs' — over 1,300 essays and notes — were written by hand, photocopied, and mailed. Turing Award 1972.",
    "keyWorks": [
      "A Note on Two Problems in Connexion with Graphs (1959)",
      "Go To Statement Considered Harmful (1968)",
      "A Discipline of Programming (1976)",
      "The EWD Manuscripts (1960s-2002, over 1,300)"
    ],
    "keyIdeas": [
      "Dijkstra's shortest-path algorithm",
      "Semaphores and mutual exclusion",
      "Structured programming",
      "Weakest precondition calculus",
      "Self-stabilizing systems"
    ],
    "trivia": [
      "Designed his shortest-path algorithm in about 20 minutes in a café.",
      "Wrote his 1,300+ EWD essays by hand.",
      "Turing Award 1972.",
      "'Computer science is no more about computers than astronomy is about telescopes.' — Dijkstra."
    ],
    "connections": [
      "knuth",
      "hoare",
      "turing"
    ],
    "tags": [
      "20th",
      "netherlands",
      "computation"
    ]
  },
  {
    "id": "bayes",
    "name": "Thomas Bayes",
    "born": "c. 1701",
    "died": "April 7, 1761",
    "era": "enlightenment",
    "nationality": "English",
    "fields": [
      "probability"
    ],
    "short": "English Presbyterian minister; his posthumously published theorem founded Bayesian statistics.",
    "bio": "Thomas Bayes was a Presbyterian minister in Tunbridge Wells. He published only two works in his lifetime — one theological, one defending Newton's calculus against Berkeley. His famous theorem was published posthumously in 1763 by his friend Richard Price: 'An Essay towards solving a Problem in the Doctrine of Chances.' Bayes' Theorem — P(A|B) = P(B|A) P(A) / P(B) — gives the rule for updating probability in light of new evidence. For a century his work was largely forgotten; Laplace independently discovered and greatly extended it. The Bayesian approach to statistics became central only in the 20th century, and is now used in everything from spam filters to machine learning.",
    "keyWorks": [
      "An Essay towards solving a Problem in the Doctrine of Chances (posthumous, 1763)"
    ],
    "keyIdeas": [
      "Bayes' theorem: P(A|B) = P(B|A) P(A) / P(B)",
      "Bayesian inference (updating belief with evidence)"
    ],
    "trivia": [
      "Presbyterian minister.",
      "Only two of his works were published in his lifetime.",
      "His famous theorem was published posthumously in 1763.",
      "No authenticated portrait of him exists."
    ],
    "connections": [
      "laplace"
    ],
    "tags": [
      "enlightenment",
      "england",
      "probability"
    ]
  },
  {
    "id": "mersenne",
    "name": "Marin Mersenne",
    "born": "September 8, 1588",
    "died": "September 1, 1648",
    "era": "renaissance",
    "nationality": "French",
    "fields": [
      "number theory"
    ],
    "short": "French friar; the 'post office of Europe'; namesake of Mersenne primes of the form 2^p − 1.",
    "bio": "Father Marin Mersenne, a monk of the Minim order, served as the communication hub of 17th-century European science before the invention of scientific journals. He corresponded with Descartes, Fermat, Pascal, Galileo, Huygens, and dozens of others, forwarding their results and opinions to one another. His rooms in Paris hosted a 'Mersenne Academy' that evolved into the Académie des Sciences. In his Cogitata physico-mathematica (1644) he listed 11 primes p for which he believed 2^p − 1 is also prime — he got 5 right, 2 wrong, and missed 3. These numbers are called Mersenne primes; as of 2026, 52 are known, the largest having more than 41 million digits.",
    "keyWorks": [
      "Harmonie universelle (1636)",
      "Cogitata physico-mathematica (1644)"
    ],
    "keyIdeas": [
      "Mersenne primes: primes of the form 2^p − 1",
      "Mersenne's laws of vibrating strings",
      "Intermediary of 17th-century European science"
    ],
    "trivia": [
      "Monk of the Minim Order.",
      "His cell was the meeting place for Parisian scientists.",
      "Proposed 11 Mersenne primes; 5 correct, 2 wrong.",
      "GIMPS (Great Internet Mersenne Prime Search) continues his project."
    ],
    "connections": [
      "descartes",
      "fermat",
      "pascal",
      "galileo"
    ],
    "tags": [
      "renaissance",
      "france",
      "primes",
      "correspondence"
    ]
  },
  {
    "id": "wallis",
    "name": "John Wallis",
    "born": "November 23, 1616",
    "died": "October 28, 1703",
    "era": "enlightenment",
    "nationality": "English",
    "fields": [
      "analysis",
      "cryptography"
    ],
    "short": "English mathematician; Savilian Professor at Oxford for 54 years; introduced the ∞ symbol.",
    "bio": "John Wallis was a Cambridge-trained minister who made his name first as a cryptographer, breaking Royalist ciphers for Parliament during the English Civil War. Appointed Savilian Professor of Geometry at Oxford in 1649 (replacing a Royalist), he held the chair until his death 54 years later. His Arithmetica Infinitorum (1656) introduced infinite products and the Wallis product for π/2, anticipated key ideas of the integral calculus, and directly inspired the young Newton. He introduced the symbol ∞ for infinity. A brilliant mental calculator, he once computed the square root of a 53-digit number to 27 digits in his head.",
    "keyWorks": [
      "Arithmetica Infinitorum (1656)",
      "Treatise of Algebra (1685)"
    ],
    "keyIdeas": [
      "Wallis product: π/2 = Π(2n)²/((2n−1)(2n+1)) — i.e. (2/1)(2/3)(4/3)(4/5)...",
      "Introduced ∞ for infinity (1655)",
      "Anticipated integral calculus"
    ],
    "trivia": [
      "Savilian Professor at Oxford for 54 years.",
      "Broke Royalist ciphers for Parliament.",
      "Computed √(53-digit number) to 27 digits in his head — while in bed.",
      "Introduced ∞ in 1655."
    ],
    "connections": [
      "newton",
      "fermat"
    ],
    "tags": [
      "enlightenment",
      "england",
      "analysis",
      "infinity"
    ]
  },
  {
    "id": "carnot-sadi",
    "name": "Sadi Carnot",
    "born": "June 1, 1796",
    "died": "August 24, 1832",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "thermodynamics"
    ],
    "short": "French engineer and physicist; founded thermodynamics with his 1824 Reflections on the Motive Power of Fire.",
    "bio": "Son of mathematician Lazare Carnot, Sadi Carnot published only one scientific work, the 118-page Réflexions sur la puissance motrice du feu (1824), founding thermodynamics. He introduced the Carnot cycle and proved that the efficiency of an ideal heat engine depends only on the temperatures of its hot and cold reservoirs — a result that later, in Clausius's and Kelvin's hands, led to the second law of thermodynamics and the concept of entropy. He died of cholera at age 36 during the Paris epidemic. His personal effects, including any unpublished manuscripts, were burned as a precaution against infection.",
    "keyWorks": [
      "Réflexions sur la puissance motrice du feu (1824)"
    ],
    "keyIdeas": [
      "Carnot cycle (ideal heat engine)",
      "Efficiency of a heat engine depends only on reservoir temperatures",
      "Germinal form of the second law of thermodynamics"
    ],
    "trivia": [
      "Son of Lazare Carnot.",
      "Published only one work in his lifetime.",
      "Died of cholera at 36.",
      "His papers were burned as a precaution against cholera."
    ],
    "connections": [
      "carnot-lazare",
      "clausius",
      "kelvin"
    ],
    "tags": [
      "19th",
      "france",
      "thermodynamics"
    ]
  },
  {
    "id": "abel-ruffini",
    "name": "Paolo Ruffini",
    "born": "September 22, 1765",
    "died": "May 10, 1822",
    "era": "enlightenment",
    "nationality": "Italian",
    "fields": [
      "algebra"
    ],
    "short": "Italian mathematician, physician, and philosopher; gave an incomplete proof (1799) that the quintic cannot be solved by radicals.",
    "bio": "Ruffini was a rare example of a man trained in both mathematics and medicine at the University of Modena. He published his first proof of the insolvability of the quintic in 1799 — a 500-page argument that was largely ignored because of its length and because it contained a small but subtle gap. He improved the proof several times, but the acceptance of a correct proof had to wait for Abel in 1824. He also refused to swear the civic oath after Napoleon's conquest of Italy, losing his professorship until 1799.",
    "keyWorks": [
      "Teoria generale delle equazioni (1799)"
    ],
    "keyIdeas": [
      "Abel-Ruffini theorem — no general algebraic solution to degree ≥ 5",
      "Ruffini's rule (synthetic division)",
      "Implicit use of permutation groups"
    ],
    "trivia": [
      "Lost his professorship for refusing Napoleon's civic oath.",
      "His 500-page proof of the Abel-Ruffini theorem was largely ignored.",
      "Trained as a physician as well as a mathematician.",
      "Treated cholera patients in the 1817 epidemic and caught it himself."
    ],
    "connections": [
      "abel",
      "galois",
      "lagrange"
    ],
    "tags": [
      "enlightenment",
      "italy",
      "algebra"
    ]
  },
  {
    "id": "picard",
    "name": "Émile Picard",
    "born": "July 24, 1856",
    "died": "December 11, 1941",
    "era": "19th",
    "nationality": "French",
    "fields": [
      "analysis",
      "complex analysis"
    ],
    "short": "French mathematician; son-in-law of Hermite; author of two fundamental theorems in complex analysis.",
    "bio": "Picard was the son-in-law of Charles Hermite and effectively Hermite's successor as the leading French analyst. His Little Picard Theorem (1879, at age 22) states that any non-constant entire function takes every complex value with at most one exception. His Great Picard Theorem strengthens this for essential singularities. His Picard iteration is the basis of the standard existence proof for ODE solutions. He was permanent secretary of the Académie des Sciences for decades and a towering figure in French mathematical administration. His son died in WWI; his son-in-law was killed on the same day; his grandchildren were raised in a gas attack.",
    "keyWorks": [
      "Traité d'analyse (3 vols., 1891-96)"
    ],
    "keyIdeas": [
      "Little Picard theorem — non-constant entire function misses at most one value",
      "Great Picard theorem",
      "Picard iteration (method of successive approximations)",
      "Picard-Fuchs equation",
      "Picard variety"
    ],
    "trivia": [
      "Son-in-law of Hermite.",
      "His son died in WWI.",
      "Permanent Secretary of the Académie des Sciences."
    ],
    "connections": [
      "hermite",
      "borel",
      "hadamard"
    ],
    "tags": [
      "19th",
      "20th",
      "france",
      "complex"
    ]
  },
  {
    "id": "hurwitz",
    "name": "Adolf Hurwitz",
    "born": "March 26, 1859",
    "died": "November 18, 1919",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "analysis",
      "number theory"
    ],
    "short": "German mathematician; teacher of Hilbert; proved there are exactly 4 normed division algebras over ℝ.",
    "bio": "Hurwitz was a close friend and teacher of David Hilbert at Königsberg, and moved with him when Hilbert went to Göttingen. Jewish, he was denied a Göttingen chair for antisemitic reasons and took Frobenius's position at ETH Zurich in 1892, where his student was Hermann Minkowski's brother Oskar, and later Albert Einstein. His 1898 theorem classifies normed division algebras over ℝ: they are ℝ, ℂ, ℍ (quaternions), and 𝕆 (octonions) — dimensions 1, 2, 4, 8 only. He also proved the Hurwitz automorphisms theorem bounding the number of automorphisms of a Riemann surface.",
    "keyWorks": [
      "Über die Composition der quadratischen Formen (1898)"
    ],
    "keyIdeas": [
      "Hurwitz's theorem: only 4 normed division algebras over ℝ",
      "Hurwitz's automorphisms theorem (84(g-1) bound)",
      "Hurwitz zeta function ζ(s,a)",
      "Hurwitz quaternions"
    ],
    "trivia": [
      "Close friend and teacher of Hilbert.",
      "Denied a chair in Germany for antisemitic reasons.",
      "Einstein's teacher at ETH.",
      "His daughter Lisa was a feminist pioneer."
    ],
    "connections": [
      "hilbert",
      "klein",
      "einstein"
    ],
    "tags": [
      "19th",
      "germany",
      "switzerland",
      "algebra"
    ]
  },
  {
    "id": "frobenius",
    "name": "Ferdinand Frobenius",
    "born": "October 26, 1849",
    "died": "August 3, 1917",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "algebra",
      "group theory"
    ],
    "short": "German mathematician; father of group representation theory.",
    "bio": "Frobenius succeeded Kronecker at Berlin and dominated German algebra for a generation. His theory of group characters and representations (1896-1900), developed in correspondence with Dedekind and motivated by a question from Dedekind, founded the representation theory of finite groups. The Frobenius endomorphism x ↦ x^p in characteristic p is fundamental in algebraic geometry. His students included Issai Schur and Edmund Landau.",
    "keyWorks": [
      "Papers on group characters (1896-1900)"
    ],
    "keyIdeas": [
      "Theory of group characters",
      "Frobenius reciprocity",
      "Frobenius endomorphism in characteristic p",
      "Frobenius's theorem on real division algebras (ℝ, ℂ, ℍ only, not requiring norm)",
      "Frobenius groups"
    ],
    "trivia": [
      "Successor to Kronecker at Berlin.",
      "Teacher of Schur and Landau.",
      "Motivated group character theory by a question from Dedekind."
    ],
    "connections": [
      "kronecker",
      "dedekind",
      "schur"
    ],
    "tags": [
      "19th",
      "germany",
      "algebra",
      "groups"
    ]
  },
  {
    "id": "schur",
    "name": "Issai Schur",
    "born": "January 10, 1875",
    "died": "January 10, 1941",
    "era": "20th",
    "nationality": "German",
    "fields": [
      "algebra",
      "representation theory"
    ],
    "short": "German mathematician; student of Frobenius; died in exile on his 66th birthday.",
    "bio": "Issai Schur was the most prominent student of Frobenius and succeeded him at Berlin in 1919. His work on the representation theory of the symmetric and general linear groups — Schur functions, Schur-Weyl duality — became fundamental. Dismissed by the Nazis in 1935, he was subjected to increasingly cruel treatment. In 1939 he emigrated to Palestine, arriving broken in health. He died on his 66th birthday — January 10, 1941. Schur polynomials are now a central tool in combinatorics and algebraic geometry.",
    "keyWorks": [
      "Dissertation on representations of GL(n) (1901)"
    ],
    "keyIdeas": [
      "Schur's lemma in representation theory",
      "Schur polynomials",
      "Schur-Weyl duality",
      "Schur complement in matrix theory",
      "Schur multiplier in group theory"
    ],
    "trivia": [
      "Student of Frobenius, his successor at Berlin.",
      "Dismissed by the Nazis in 1935.",
      "Died on his 66th birthday in Palestine."
    ],
    "connections": [
      "frobenius",
      "weyl",
      "young-alfred"
    ],
    "tags": [
      "20th",
      "germany",
      "algebra",
      "representation"
    ]
  },
  {
    "id": "landau-edmund",
    "name": "Edmund Landau",
    "born": "February 14, 1877",
    "died": "February 19, 1938",
    "era": "20th",
    "nationality": "German",
    "fields": [
      "number theory"
    ],
    "short": "German mathematician; author of the definitive early text on prime distribution (1909).",
    "bio": "Edmund Landau was the son of a wealthy Berlin gynecologist and married the daughter of Paul Ehrlich (the Nobel physiologist). His Handbuch der Lehre von der Verteilung der Primzahlen (1909) was the definitive text on analytic number theory for a generation. He introduced 'big-O' notation (though it is really Bachmann's invention that Landau popularized). Dismissed from Göttingen by the Nazis in 1933, he moved to Groningen but was forbidden by Nazi pressure from giving his inaugural lecture. Sarcastic and pedantic in style, his books are famously dry: his Grundlagen der Analysis is perhaps the most formally rigorous (and unreadable) calculus book ever written.",
    "keyWorks": [
      "Handbuch der Lehre von der Verteilung der Primzahlen (1909)",
      "Grundlagen der Analysis (1930)"
    ],
    "keyIdeas": [
      "Popularized big-O notation",
      "Landau's problems (4 open problems in number theory)",
      "Landau prime ideal theorem"
    ],
    "trivia": [
      "Father-in-law of Nobel laureate Paul Ehrlich.",
      "His inaugural lecture at Groningen was blocked by Nazi pressure.",
      "His formal axiomatic calculus textbook is notoriously unreadable.",
      "Listed four problems that all remain open."
    ],
    "connections": [
      "hilbert",
      "frobenius",
      "hardy"
    ],
    "tags": [
      "20th",
      "germany",
      "number-theory"
    ]
  },
  {
    "id": "steinitz",
    "name": "Ernst Steinitz",
    "born": "June 13, 1871",
    "died": "September 29, 1928",
    "era": "20th",
    "nationality": "German",
    "fields": [
      "algebra"
    ],
    "short": "German mathematician; axiomatized the theory of fields in his 1910 paper.",
    "bio": "Steinitz's 1910 paper 'Algebraische Theorie der Körper' (Algebraic Theory of Fields) was the first systematic treatment of abstract fields — their characteristics, prime subfields, algebraic closure, and transcendence degree. It was a landmark in the shift to abstract algebra and directly influenced Noether and van der Waerden. Jewish, he died a few years before the Nazi takeover.",
    "keyWorks": [
      "Algebraische Theorie der Körper (1910)"
    ],
    "keyIdeas": [
      "Abstract theory of fields",
      "Algebraic closure (existence and uniqueness)",
      "Transcendence degree",
      "Steinitz exchange lemma"
    ],
    "trivia": [
      "His 1910 paper is a landmark of abstract algebra.",
      "Directly influenced Emmy Noether.",
      "Died before the Nazi takeover — spared the fate of many of his students."
    ],
    "connections": [
      "hilbert",
      "noether"
    ],
    "tags": [
      "20th",
      "germany",
      "algebra",
      "fields"
    ]
  },
  {
    "id": "van-der-waerden",
    "name": "B.L. van der Waerden",
    "born": "February 2, 1903",
    "died": "January 12, 1996",
    "era": "20th",
    "nationality": "Dutch",
    "fields": [
      "algebra"
    ],
    "short": "Dutch mathematician whose 1930 Moderne Algebra brought abstract algebra to the world.",
    "bio": "Van der Waerden's two-volume Moderne Algebra (1930-31), based on the lectures of Emmy Noether and Emil Artin, was the textbook that transformed algebra worldwide — the first modern graduate algebra book. He also proved (1927) Van der Waerden's theorem in combinatorics: any finite coloring of the integers contains arbitrarily long monochromatic arithmetic progressions. He was a leading historian of ancient mathematics (Science Awakening, 1954). He remained in Germany during WWII, teaching at Leipzig — a decision that was controversial after the war but was justified by some as helping German students and by others as collaboration.",
    "keyWorks": [
      "Moderne Algebra (1930-31)",
      "Science Awakening (1954)"
    ],
    "keyIdeas": [
      "Van der Waerden's theorem in combinatorics",
      "First modern graduate algebra textbook",
      "Codified work of Noether and Artin"
    ],
    "trivia": [
      "Moderne Algebra inaugurated abstract algebra as we now teach it.",
      "Controversial for remaining in Nazi Germany.",
      "Also a pioneering historian of Greek and Babylonian mathematics.",
      "Lived to 92."
    ],
    "connections": [
      "noether",
      "artin",
      "hilbert"
    ],
    "tags": [
      "20th",
      "netherlands",
      "algebra",
      "history"
    ]
  },
  {
    "id": "artin-emil",
    "name": "Emil Artin",
    "born": "March 3, 1898",
    "died": "December 20, 1962",
    "era": "20th",
    "nationality": "Austrian-American",
    "fields": [
      "algebra",
      "number theory"
    ],
    "short": "Austrian mathematician; proved the Artin reciprocity law (1927); teacher of Serge Lang and John Tate.",
    "bio": "Artin was one of the founders of modern algebraic number theory. His 1927 Artin reciprocity law generalized Gauss's quadratic reciprocity to the general abelian extension setting, completing Hilbert's 9th problem. His solution (1927) of Hilbert's 17th problem — that every positive semidefinite rational function is a sum of squares — was also a landmark. Artin was forced out of Hamburg in 1937 (his wife was part Jewish) and moved to the US, where he taught at Notre Dame, Indiana, and Princeton. He returned to Germany in 1958. Tate, Lang, and Harold Mark Edwards were among his students.",
    "keyWorks": [
      "Artin reciprocity (1927)",
      "Galois Theory (lectures, 1942)"
    ],
    "keyIdeas": [
      "Artin reciprocity law (Hilbert's 9th problem)",
      "Solution of Hilbert's 17th problem",
      "Artin L-functions",
      "Artin's conjecture on primitive roots (still open)",
      "Modern exposition of Galois theory"
    ],
    "trivia": [
      "Forced out of Germany in 1937 because his wife was part Jewish.",
      "Returned to Germany in 1958.",
      "Students: Serge Lang, John Tate, Max Zorn.",
      "Musical — played the harpsichord and accordion."
    ],
    "connections": [
      "hilbert",
      "tate",
      "lang",
      "chevalley"
    ],
    "tags": [
      "20th",
      "austria",
      "america",
      "algebra",
      "number-theory"
    ]
  },
  {
    "id": "chevalley",
    "name": "Claude Chevalley",
    "born": "February 11, 1909",
    "died": "June 28, 1984",
    "era": "20th",
    "nationality": "French",
    "fields": [
      "algebra",
      "number theory"
    ],
    "short": "French mathematician; founding member of Bourbaki; reformulated class field theory.",
    "bio": "Chevalley was a founding member of the Bourbaki group in 1934. His work in class field theory gave the subject its modern, idele-based formulation. His 1940s and 50s work on algebraic groups introduced 'Chevalley groups' — constructions of simple algebraic groups over any field that later led to most of the finite simple groups. A leftist activist, he lost his French citizenship by not returning to fight in 1940 (he was in the US), and was blocked for years from a Paris chair — finally getting one in 1955.",
    "keyWorks": [
      "Theory of Lie Groups (1946)",
      "Fundamental Concepts of Algebra (1956)"
    ],
    "keyIdeas": [
      "Chevalley groups",
      "Modern formulation of class field theory",
      "Chevalley-Warning theorem",
      "Chevalley's theorem on constructible sets"
    ],
    "trivia": [
      "Founding member of Bourbaki.",
      "Stripped of French citizenship for staying in the US during WWII.",
      "Blocked from a Paris chair until 1955."
    ],
    "connections": [
      "weil",
      "cartan-henri",
      "artin-emil",
      "grothendieck"
    ],
    "tags": [
      "20th",
      "france",
      "algebra",
      "bourbaki"
    ]
  },
  {
    "id": "tate",
    "name": "John Tate",
    "born": "March 13, 1925",
    "died": "October 16, 2019",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "number theory",
      "arithmetic geometry"
    ],
    "short": "American mathematician; his 1950 Princeton thesis reshaped analytic number theory; Abel Prize 2010.",
    "bio": "Tate's 1950 PhD thesis (advised by Emil Artin) on Fourier analysis in number fields revolutionized the subject, putting L-functions in a conceptual framework based on adele groups. His collaboration with Serre and others built the modern field of arithmetic geometry: Tate modules, Tate curves, Tate cohomology, and the Tate conjectures are all his. At Harvard and then Texas, he influenced a large community. Abel Prize 2010.",
    "keyWorks": [
      "Fourier analysis in number fields (1950 thesis)"
    ],
    "keyIdeas": [
      "Tate's thesis — adele-theoretic L-functions",
      "Tate module",
      "Tate curve",
      "Tate cohomology",
      "Tate conjectures in arithmetic geometry"
    ],
    "trivia": [
      "PhD at Princeton under Artin.",
      "Abel Prize 2010.",
      "Wolf Prize 2002/3.",
      "Father of physicist Jean Tate."
    ],
    "connections": [
      "artin-emil",
      "serre",
      "shimura"
    ],
    "tags": [
      "20th",
      "america",
      "number-theory"
    ]
  },
  {
    "id": "deligne",
    "name": "Pierre Deligne",
    "born": "October 3, 1944",
    "died": "",
    "era": "20th",
    "nationality": "Belgian",
    "fields": [
      "algebraic geometry"
    ],
    "short": "Belgian mathematician; proved the Weil conjectures (1974); Fields Medal 1978, Abel Prize 2013.",
    "bio": "Deligne worked with Grothendieck at the IHÉS from age 20. His 1974 proof of the last of the Weil conjectures — the analog of the Riemann Hypothesis over finite fields — was the crowning achievement of Grothendieck's program and one of the deepest theorems of 20th-century mathematics. He received the Fields Medal in 1978 and the Abel Prize in 2013. He has been permanent professor at the IAS since 1984. Known for extreme generosity in crediting others and for his care with words.",
    "keyWorks": [
      "La conjecture de Weil I (1974)",
      "La conjecture de Weil II (1980)"
    ],
    "keyIdeas": [
      "Proof of the Weil conjectures (1974)",
      "Weights in ℓ-adic cohomology",
      "Hodge theory (mixed Hodge structures)",
      "Deligne-Lusztig theory"
    ],
    "trivia": [
      "Fields Medal 1978; Wolf Prize 2008; Abel Prize 2013.",
      "Did fundamental work at age 20 with Grothendieck.",
      "Permanent professor at the IAS since 1984."
    ],
    "connections": [
      "grothendieck",
      "serre",
      "weil"
    ],
    "tags": [
      "20th",
      "belgium",
      "algebraic-geometry",
      "living",
      "fields"
    ]
  },
  {
    "id": "arnold",
    "name": "Vladimir Arnold",
    "born": "June 12, 1937",
    "died": "June 3, 2010",
    "era": "20th",
    "nationality": "Russian",
    "fields": [
      "mechanics",
      "differential equations"
    ],
    "short": "Russian mathematician; solved Hilbert's 13th problem at age 19; gave the A in KAM theory.",
    "bio": "Vladimir Arnold solved Hilbert's 13th problem as an undergraduate at Moscow State (1957): any continuous function of several variables can be expressed as a composition of continuous functions of one variable plus addition. At 22 his work with Kolmogorov on the stability of Hamiltonian systems gave the A in KAM (Kolmogorov-Arnold-Moser) theory. He was a charismatic and opinionated teacher, fiercely critical of the 'axiomatic' Bourbaki style in favor of concrete geometric intuition. His textbooks Mathematical Methods of Classical Mechanics (1978) and Ordinary Differential Equations (1973) are classics. Denied the Fields Medal (reportedly on political grounds during the Cold War), he received the Wolf (2001) and Shaw (2008) prizes.",
    "keyWorks": [
      "On functions of three variables (1957)",
      "Mathematical Methods of Classical Mechanics (1978)",
      "Singularities of Differentiable Maps (with Gusein-Zade, Varchenko, 1985)"
    ],
    "keyIdeas": [
      "KAM theorem (with Kolmogorov and Moser) — stability of Hamiltonian systems",
      "Solution of Hilbert's 13th problem",
      "Arnold diffusion",
      "Arnold tongues in dynamical systems",
      "ADE classification in singularity theory"
    ],
    "trivia": [
      "Solved Hilbert's 13th problem at age 19.",
      "Controversial denial of the Fields Medal, allegedly on political grounds.",
      "Fiercely anti-Bourbaki, pro-geometric intuition.",
      "Died of peritonitis at 72."
    ],
    "connections": [
      "kolmogorov",
      "moser",
      "sinai"
    ],
    "tags": [
      "20th",
      "russia",
      "mechanics",
      "dynamical"
    ]
  },
  {
    "id": "chern",
    "name": "Shiing-Shen Chern",
    "born": "October 28, 1911",
    "died": "December 3, 2004",
    "era": "20th",
    "nationality": "Chinese-American",
    "fields": [
      "geometry",
      "topology"
    ],
    "short": "Father of modern differential geometry; Chern classes and the Chern-Gauss-Bonnet theorem.",
    "bio": "Chern studied with Élie Cartan in Paris (1936-37) and Oswald Veblen at the IAS. At the IAS in 1944 he proved the intrinsic Chern-Gauss-Bonnet theorem, introducing what are now called Chern classes — fundamental topological invariants of complex vector bundles. He founded three of the world's leading centers of differential geometry: the Mathematics Research Institute at Academia Sinica (Nanjing, 1946), the Berkeley Mathematical Sciences Research Institute (MSRI, 1981), and the Chern Institute at Nankai (1985). He received the inaugural Shaw Prize in mathematics in 2004, shortly before his death at 93. The Chern Medal was established in his honor in 2010.",
    "keyWorks": [
      "A simple intrinsic proof of the Gauss-Bonnet formula (1944)",
      "Characteristic classes of Hermitian manifolds (1946)"
    ],
    "keyIdeas": [
      "Chern classes — topological invariants of complex vector bundles",
      "Chern-Gauss-Bonnet theorem",
      "Chern-Simons theory (with Simons, 1974) — later used in physics",
      "Chern-Weil theory"
    ],
    "trivia": [
      "Founded three of the world's top differential geometry centers.",
      "Inaugural Shaw Prize in Mathematics 2004.",
      "Chern-Simons theory found use in topological quantum field theory decades later.",
      "Father-in-law of mathematician-economist Paul Chu."
    ],
    "connections": [
      "e-cartan",
      "weil",
      "atiyah",
      "singer"
    ],
    "tags": [
      "20th",
      "china",
      "america",
      "geometry"
    ]
  },
  {
    "id": "yau",
    "name": "Shing-Tung Yau",
    "born": "April 4, 1949",
    "died": "",
    "era": "20th",
    "nationality": "Chinese-American",
    "fields": [
      "geometry",
      "analysis"
    ],
    "short": "Chinese-American mathematician; proved the Calabi conjecture (1978); Fields Medal 1982.",
    "bio": "Yau's 1976 proof of the Calabi conjecture (existence of Kähler-Einstein metrics on compact Kähler manifolds with vanishing first Chern class) earned him the Fields Medal in 1982. The 'Calabi-Yau manifolds' that result are fundamental in string theory: the extra dimensions of space in string theory are believed to be a 6-real-dimensional Calabi-Yau manifold. With Richard Schoen he proved the positive mass conjecture in general relativity. He founded the Center of Mathematical Sciences at Tsinghua and continues to be enormously influential in geometric analysis. In 2006 he was involved in a controversial dispute over credit for the Poincaré conjecture.",
    "keyWorks": [
      "On the Ricci curvature of a compact Kähler manifold and the complex Monge-Ampère equation (1978)"
    ],
    "keyIdeas": [
      "Proof of the Calabi conjecture",
      "Calabi-Yau manifolds",
      "Positive mass conjecture (with Schoen)",
      "Yau's geometric analysis program",
      "Schoen-Yau / proof of positive energy theorem"
    ],
    "trivia": [
      "Fields Medal 1982; Wolf Prize 2010.",
      "Calabi-Yau manifolds are fundamental to string theory.",
      "Crawford Prize 1994 (geometric analysis).",
      "Controversy with Perelman's supporters in 2006."
    ],
    "connections": [
      "chern",
      "calabi",
      "perelman"
    ],
    "tags": [
      "20th",
      "china",
      "america",
      "geometry",
      "living",
      "fields"
    ]
  },
  {
    "id": "gromov",
    "name": "Mikhael Gromov",
    "born": "December 23, 1943",
    "died": "",
    "era": "20th",
    "nationality": "Russian-French",
    "fields": [
      "geometry",
      "topology"
    ],
    "short": "Russian-French mathematician; Abel Prize 2009; pioneer of geometric group theory.",
    "bio": "Gromov transformed large areas of geometry, creating new subjects from scratch: geometric group theory, symplectic topology via pseudo-holomorphic curves, and the metric approach to Riemannian geometry. Emigrating from the USSR in 1974, he settled at the IHÉS in France, where he has been permanent professor since 1982. His Gromov-Hausdorff convergence gives a way for 'one space to converge to another.' A visionary thinker willing to take enormous leaps, he has been described as having ideas 30 years ahead of his time. Abel Prize 2009.",
    "keyWorks": [
      "Pseudoholomorphic curves in symplectic manifolds (1985)",
      "Metric structures for Riemannian and Non-Riemannian Spaces (1999)"
    ],
    "keyIdeas": [
      "Pseudoholomorphic curves — founded symplectic topology",
      "Geometric group theory (hyperbolic groups, ends, polynomial growth)",
      "Gromov-Hausdorff convergence",
      "Gromov's h-principle",
      "Gromov's compactness theorem"
    ],
    "trivia": [
      "Emigrated from USSR 1974.",
      "Abel Prize 2009; Wolf Prize 1993; Shaw Prize 2009.",
      "Permanent professor at IHÉS since 1982.",
      "Has been described as having ideas 30 years ahead of their time."
    ],
    "connections": [
      "milnor",
      "thurston",
      "perelman"
    ],
    "tags": [
      "20th",
      "russia",
      "france",
      "geometry",
      "living"
    ]
  },
  {
    "id": "connes",
    "name": "Alain Connes",
    "born": "April 1, 1947",
    "died": "",
    "era": "20th",
    "nationality": "French",
    "fields": [
      "analysis",
      "physics"
    ],
    "short": "French mathematician; Fields Medal 1982 for classifying type III von Neumann algebras; founded noncommutative geometry.",
    "bio": "Connes received the Fields Medal in 1982 for his classification of type III factors (von Neumann algebras) — a subject Murray and von Neumann had left unfinished. He then founded noncommutative geometry, a vast program generalizing Riemannian geometry to settings where 'spaces' are described by noncommutative algebras. Noncommutative geometry has found applications in particle physics (his noncommutative Standard Model) and number theory (Connes's approach to the Riemann Hypothesis via trace formulas). He is professor at the Collège de France, IHÉS, and Ohio State.",
    "keyWorks": [
      "Noncommutative Geometry (1994)",
      "Numerous papers on factors (1970s)"
    ],
    "keyIdeas": [
      "Classification of type III factors",
      "Noncommutative geometry",
      "Cyclic cohomology",
      "Connes-Kreimer renormalization Hopf algebra",
      "Noncommutative Standard Model of particle physics"
    ],
    "trivia": [
      "Fields Medal 1982; Crafoord Prize 2001.",
      "Professor at three institutions simultaneously.",
      "Approach to the Riemann Hypothesis via noncommutative geometry."
    ],
    "connections": [
      "dixmier",
      "atiyah"
    ],
    "tags": [
      "20th",
      "france",
      "analysis",
      "physics",
      "living",
      "fields"
    ]
  },
  {
    "id": "mirzakhani",
    "name": "Maryam Mirzakhani",
    "born": "May 3, 1977",
    "died": "July 14, 2017",
    "era": "21st",
    "nationality": "Iranian",
    "fields": [
      "geometry",
      "dynamical systems"
    ],
    "short": "Iranian mathematician; first woman and first Iranian to win the Fields Medal (2014); died at 40.",
    "bio": "Maryam Mirzakhani was born in Tehran and twice won gold at the International Mathematical Olympiad (1994, 1995) — in 1995 with a perfect score. PhD from Harvard in 2004 under Curtis McMullen, she was professor at Stanford from 2008. Her work studied the geometry of moduli spaces of Riemann surfaces, counting simple closed geodesics on hyperbolic surfaces and proving an analog of the 'magic wand theorem' for moduli spaces (with Alex Eskin). In 2014 she became the first woman (and first Iranian) to win the Fields Medal. She died of breast cancer at 40 in 2017. Iran's government printed her image on the front page of newspapers — a rare honor for a woman not wearing a hijab. International Women's Day in Mathematics (May 12, her birthday) was established in her memory.",
    "keyWorks": [
      "Simple geodesics and Weil-Petersson volumes of moduli spaces of bordered Riemann surfaces (2007)",
      "Growth of Weil-Petersson volumes and random hyperbolic surfaces (2013)",
      "Invariant and stationary measures for SL(2,ℝ) actions on moduli space (with Eskin, 2018)"
    ],
    "keyIdeas": [
      "Counting simple closed geodesics on hyperbolic surfaces",
      "Weil-Petersson volumes of moduli spaces",
      "'Magic wand theorem' for SL(2,ℝ) actions on moduli space"
    ],
    "trivia": [
      "Two-time IMO gold medalist (1994, 1995 — perfect score in 1995).",
      "First woman to win the Fields Medal (2014).",
      "First Iranian to win the Fields Medal.",
      "Died of breast cancer at 40.",
      "May 12 (her birthday) is International Women in Mathematics Day."
    ],
    "connections": [
      "mcmullen",
      "eskin"
    ],
    "tags": [
      "21st",
      "iran",
      "geometry",
      "women",
      "fields"
    ]
  },
  {
    "id": "villani",
    "name": "Cédric Villani",
    "born": "October 5, 1973",
    "died": "",
    "era": "21st",
    "nationality": "French",
    "fields": [
      "analysis",
      "mathematical physics"
    ],
    "short": "French mathematician and politician; Fields Medal 2010 for work on Boltzmann's equation and optimal transport.",
    "bio": "Villani received the 2010 Fields Medal for his proofs (partly with Clément Mouhot and Laurent Desvillettes) on Boltzmann's equation — the equation of kinetic theory describing the behavior of rarefied gases — and on Landau damping. His work with Felix Otto on optimal transport (the modern form of Monge's problem) introduced powerful new tools. Flamboyantly dressed with signature ascots and spider brooches, Villani became a public intellectual in France. He directed the Institut Henri Poincaré 2009-17. Elected to the French National Assembly in 2017, he served a term as a centrist politician. His book Birth of a Theorem (2012) describes his work on Landau damping as a mathematical memoir.",
    "keyWorks": [
      "Topics in Optimal Transportation (2003)",
      "Optimal Transport, Old and New (2008)",
      "Birth of a Theorem (2012)"
    ],
    "keyIdeas": [
      "Landau damping in the Vlasov equation (with Mouhot)",
      "Optimal transport (with Otto, Lott, Sturm)",
      "Entropy methods in the Boltzmann equation"
    ],
    "trivia": [
      "Fields Medal 2010.",
      "French parliamentarian 2017-22.",
      "Signature ascots and spider brooches.",
      "Directed the Institut Henri Poincaré 2009-17."
    ],
    "connections": [
      "lions-pl",
      "otto"
    ],
    "tags": [
      "21st",
      "france",
      "analysis",
      "living",
      "fields"
    ]
  },
  {
    "id": "roberval",
    "name": "Gilles Personne de Roberval",
    "born": "August 8, 1602",
    "died": "October 27, 1675",
    "era": "enlightenment",
    "nationality": "French",
    "fields": [
      "geometry",
      "mechanics"
    ],
    "short": "French mathematician; early developer of indivisibles method; rival of Descartes.",
    "bio": "Roberval held the Ramus chair at the Collège Royal (now Collège de France) from 1634 until his death — it was awarded by competition every three years, and Roberval kept it by never publishing his methods until the next competition. This secrecy cost him priority on many discoveries. He developed an 'indivisibles' method independent of Cavalieri, determined the area under the cycloid, and invented the Roberval balance — a type of precision scale still used today. A member of Mersenne's circle, he was a lifelong antagonist of Descartes.",
    "keyWorks": [
      "Treatise on Indivisibles (1634, published posthumously)"
    ],
    "keyIdeas": [
      "Method of indivisibles (independent of Cavalieri)",
      "Area of the cycloid",
      "Roberval balance"
    ],
    "trivia": [
      "Kept the Ramus chair by not publishing (so rivals couldn't prepare).",
      "Invented a type of balance still used today.",
      "Lifelong rival of Descartes."
    ],
    "connections": [
      "mersenne",
      "descartes",
      "cavalieri"
    ],
    "tags": [
      "enlightenment",
      "france",
      "geometry"
    ]
  },
  {
    "id": "bernoulli-nicolaus",
    "name": "Nicolaus I Bernoulli",
    "born": "October 21, 1687",
    "died": "November 29, 1759",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "probability"
    ],
    "short": "Member of the Bernoulli mathematical dynasty; posed the St. Petersburg Paradox.",
    "bio": "Nicolaus I Bernoulli was the nephew of Jakob and Johann Bernoulli. In 1713 he posed what is now called the St. Petersburg Paradox: a game where you flip a coin until it comes up tails, and the prize doubles each time it comes up heads — starting at $2. The expected value is infinite: 1/2(2) + 1/4(4) + 1/8(8) + ... = ∞. Yet no one would pay more than a modest sum to play. The paradox drove the development of utility theory. His cousin Daniel Bernoulli gave the classic resolution (1738) using logarithmic utility.",
    "keyWorks": [
      "Letter to Pierre Raymond de Montmort (1713)"
    ],
    "keyIdeas": [
      "St. Petersburg Paradox (1713)",
      "Posed problems in probability",
      "Catenary problem contributions"
    ],
    "trivia": [
      "The Bernoulli family produced 8 eminent mathematicians across 3 generations.",
      "St. Petersburg paradox drove the invention of utility theory.",
      "Nephew of Jakob and Johann Bernoulli."
    ],
    "connections": [
      "bernoulli-jakob",
      "bernoulli-johann",
      "bernoulli-daniel",
      "de-moivre"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "probability"
    ]
  },
  {
    "id": "lhuilier",
    "name": "Simon Lhuilier",
    "born": "April 24, 1750",
    "died": "March 28, 1840",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "topology",
      "analysis"
    ],
    "short": "Swiss mathematician; introduced the limit notation lim and extended Euler's polyhedral formula.",
    "bio": "Simon Lhuilier was born in Geneva, won a prize from the Warsaw Academy for a geometry textbook at age 25, and became professor at Geneva. He introduced the 'lim' notation for limits, anticipating Weierstrass. He extended Euler's polyhedral formula V−E+F=2 to polyhedra with holes, finding V−E+F = 2−2g, introducing (implicitly) the genus.",
    "keyWorks": [
      "Éléments d'algèbre et de géométrie (1804)"
    ],
    "keyIdeas": [
      "Introduced 'lim' notation",
      "Extension of Euler's formula to higher-genus surfaces"
    ],
    "trivia": [
      "Introduced 'lim' notation for limits.",
      "His 25-year-old geometry text won a Warsaw prize.",
      "First to treat Euler's formula for solids with holes."
    ],
    "connections": [
      "euler"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "analysis"
    ]
  },
  {
    "id": "sturm",
    "name": "Jacques Charles François Sturm",
    "born": "September 29, 1803",
    "died": "December 15, 1855",
    "era": "19th",
    "nationality": "Swiss-French",
    "fields": [
      "analysis"
    ],
    "short": "Swiss-French mathematician; gave Sturm's theorem for counting polynomial roots; student of Lagrange.",
    "bio": "Sturm was born in Geneva and moved to Paris in 1825 as tutor to the son of Madame de Staël. His 1829 Sturm's theorem gave, for the first time, a complete algorithm for determining the exact number of real roots of a polynomial in any real interval — a problem unsolved for 150 years. He also co-founded, with Joseph Liouville, Sturm-Liouville theory for ordinary differential equations with boundary conditions — foundational to modern theory of eigenvalue problems.",
    "keyWorks": [
      "Mémoire sur la résolution des équations numériques (1829)"
    ],
    "keyIdeas": [
      "Sturm's theorem for counting real roots of polynomials",
      "Sturm-Liouville theory (with Liouville)",
      "Sturm comparison theorem"
    ],
    "trivia": [
      "Tutor to Madame de Staël's son.",
      "Sturm's theorem solved a 150-year-old problem.",
      "The first speed of sound measurement was made by Sturm and Colladon on Lake Geneva in 1826."
    ],
    "connections": [
      "liouville",
      "cauchy",
      "ampere"
    ],
    "tags": [
      "19th",
      "france",
      "switzerland",
      "analysis"
    ]
  },
  {
    "id": "gregory",
    "name": "James Gregory",
    "born": "November 1638",
    "died": "October 1675",
    "era": "enlightenment",
    "nationality": "Scottish",
    "fields": [
      "analysis",
      "astronomy"
    ],
    "short": "Scottish mathematician; invented the reflecting telescope; discovered Taylor series decades before Taylor.",
    "bio": "James Gregory published the Gregorian telescope design in 1663, before Newton's reflector. He anticipated many of Newton's and Leibniz's discoveries in calculus, including the Taylor series (which he found around 1671, 44 years before Taylor), integration techniques, and the series arctan(x) = x − x³/3 + x⁵/5 − ... now called the Madhava-Gregory-Leibniz series. Much of his work was unpublished and only discovered in his papers a century later. He died of a stroke, at 36, while showing students the moons of Jupiter.",
    "keyWorks": [
      "Optica Promota (1663)",
      "Vera Circuli et Hyperbolae Quadratura (1667)"
    ],
    "keyIdeas": [
      "Gregorian reflecting telescope",
      "Taylor series (decades before Taylor)",
      "Arctan series — π/4 = 1 − 1/3 + 1/5 − 1/7 + ...",
      "Distinction between convergent and divergent series"
    ],
    "trivia": [
      "Invented the reflecting telescope 5 years before Newton.",
      "Died at 36 of a stroke while showing students Jupiter's moons.",
      "Discovered Taylor series 44 years before Taylor.",
      "Nephew Alexander Anderson was also a mathematician."
    ],
    "connections": [
      "newton",
      "leibniz",
      "madhava",
      "taylor"
    ],
    "tags": [
      "enlightenment",
      "scotland",
      "analysis"
    ]
  },
  {
    "id": "barrow",
    "name": "Isaac Barrow",
    "born": "October 1630",
    "died": "May 4, 1677",
    "era": "enlightenment",
    "nationality": "English",
    "fields": [
      "analysis",
      "geometry"
    ],
    "short": "Newton's teacher; resigned his Cambridge chair in 1669 to his student.",
    "bio": "Isaac Barrow was the first Lucasian Professor of Mathematics at Cambridge. He published the 'Lectiones Geometricae' (1670), which contain a version of the fundamental theorem of calculus in geometric form — his rule for finding tangents. In 1669 he resigned the Lucasian chair in favor of his 26-year-old student Isaac Newton. He then served as chaplain to Charles II. He famously knocked down an armed highwayman in 1669 who had accosted him on a road.",
    "keyWorks": [
      "Lectiones Geometricae (1670)",
      "Lectiones Opticae (1669)"
    ],
    "keyIdeas": [
      "Geometric version of the fundamental theorem of calculus",
      "Method of tangents (via differential triangles)"
    ],
    "trivia": [
      "Resigned his chair to Newton.",
      "Knocked down a highwayman in 1669.",
      "Chaplain to Charles II.",
      "First Lucasian Professor at Cambridge (1663)."
    ],
    "connections": [
      "newton",
      "wallis"
    ],
    "tags": [
      "enlightenment",
      "england",
      "analysis"
    ]
  },
  {
    "id": "benoulli-nicolas-ii",
    "name": "Nicolaus II Bernoulli",
    "born": "February 6, 1695",
    "died": "July 31, 1726",
    "era": "enlightenment",
    "nationality": "Swiss",
    "fields": [
      "calculus",
      "mechanics"
    ],
    "short": "Son of Johann Bernoulli; died young in St. Petersburg at age 31.",
    "bio": "Nicolaus II Bernoulli was the elder son of Johann Bernoulli and brother of Daniel Bernoulli. In 1725 he and his brother Daniel accepted positions at the new St. Petersburg Academy. Less than a year later, Nicolaus died there of appendicitis at age 31. It was to replace Nicolaus II that Daniel summoned Euler to Russia in 1727. Despite his short life, Nicolaus contributed to the study of curves and to the mechanics of elastic bodies.",
    "keyWorks": [
      "Papers on curves (1720s)"
    ],
    "keyIdeas": [
      "Reciprocal trajectories",
      "Early work on catenary"
    ],
    "trivia": [
      "Died of appendicitis in St. Petersburg at 31.",
      "His vacant position was filled by Euler.",
      "Son of Johann, brother of Daniel."
    ],
    "connections": [
      "bernoulli-johann",
      "bernoulli-daniel",
      "euler"
    ],
    "tags": [
      "enlightenment",
      "switzerland",
      "russia"
    ]
  },
  {
    "id": "noether-max",
    "name": "Max Noether",
    "born": "September 24, 1844",
    "died": "December 13, 1921",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "algebraic geometry"
    ],
    "short": "German algebraic geometer; father of Emmy Noether; cofounder of the German school of algebraic geometry.",
    "bio": "Max Noether was partially paralyzed by polio as a child. He spent his career at Erlangen, where he worked with Brill on the theory of algebraic curves (the Brill-Noether theorem). His daughter Emmy later vastly eclipsed him. He was an obituary writer for Mathematische Annalen and wrote perceptive memorials of many of his contemporaries.",
    "keyWorks": [
      "Papers with Brill on algebraic curves (1873+)"
    ],
    "keyIdeas": [
      "Brill-Noether theorem on algebraic curves",
      "Noether's AF+BG theorem"
    ],
    "trivia": [
      "Father of Emmy Noether.",
      "Partially paralyzed from childhood polio.",
      "Memorialist for Mathematische Annalen."
    ],
    "connections": [
      "brill",
      "noether-emmy"
    ],
    "tags": [
      "19th",
      "germany",
      "algebraic-geometry"
    ]
  },
  {
    "id": "lindemann",
    "name": "Ferdinand von Lindemann",
    "born": "April 12, 1852",
    "died": "March 6, 1939",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "analysis"
    ],
    "short": "German mathematician who proved π is transcendental (1882), settling the 2000-year-old problem of squaring the circle.",
    "bio": "Lindemann's 1882 proof that π is transcendental settled, at last, the impossibility of squaring the circle with compass and straightedge — a problem that had obsessed mathematicians since Greek antiquity. His technique extended Hermite's 1873 proof of the transcendence of e. He was a professor at Königsberg and then Munich. His most famous student was David Hilbert. After Lindemann had graded Hilbert's doctoral dissertation, he asked Hilbert to abstain from giving in to his instinct to publish a set of doctoral theses too radical for the audience.",
    "keyWorks": [
      "Über die Zahl π (1882)"
    ],
    "keyIdeas": [
      "π is transcendental (1882) — ends the 'squaring the circle' problem",
      "Lindemann-Weierstrass theorem (after extension by Weierstrass)"
    ],
    "trivia": [
      "Proved π is transcendental, settling a 2000-year problem.",
      "PhD advisor of David Hilbert.",
      "Also an advisor of Hurwitz and Minkowski."
    ],
    "connections": [
      "hermite",
      "hilbert",
      "hurwitz"
    ],
    "tags": [
      "19th",
      "germany",
      "transcendental",
      "π"
    ]
  },
  {
    "id": "erdos-renyi",
    "name": "Alfréd Rényi",
    "born": "March 20, 1921",
    "died": "February 1, 1970",
    "era": "20th",
    "nationality": "Hungarian",
    "fields": [
      "probability",
      "combinatorics"
    ],
    "short": "Hungarian probabilist; co-founder of random graph theory with Erdős; quote: 'a mathematician is a machine for converting coffee into theorems.'",
    "bio": "Rényi survived forced labor battalions during WWII, escaping once to rescue his parents from the Budapest ghetto. After the war he rose to head the Institute of Mathematics of the Hungarian Academy (now named for him). His joint papers with Erdős in the late 1950s founded random graph theory: if you build a graph on n vertices by including each possible edge with probability p, what does it look like? The answer exhibits striking 'phase transitions' — at p = 1/n, a giant connected component suddenly appears. Rényi also developed measure-theoretic entropy and Rényi divergences.",
    "keyWorks": [
      "On random graphs (with Erdős, 1959)",
      "On the evolution of random graphs (with Erdős, 1960)",
      "Dialogues on Mathematics (1967)"
    ],
    "keyIdeas": [
      "Erdős-Rényi random graph model G(n,p)",
      "Phase transitions in random graphs",
      "Rényi entropy and divergence",
      "Rényi's theorem on Chebyshev-like bounds"
    ],
    "trivia": [
      "'A mathematician is a machine for converting coffee into theorems' — often attributed to Erdős but actually Rényi's.",
      "Escaped a forced labor battalion in WWII.",
      "The Rényi Institute in Budapest is named for him.",
      "Close collaborator of Erdős (32 joint papers)."
    ],
    "connections": [
      "erdos",
      "turan"
    ],
    "tags": [
      "20th",
      "hungary",
      "probability",
      "combinatorics"
    ]
  },
  {
    "id": "singer",
    "name": "Isadore Singer",
    "born": "May 3, 1924",
    "died": "February 11, 2021",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "geometry",
      "analysis"
    ],
    "short": "American mathematician; co-proved the Atiyah-Singer index theorem with Michael Atiyah.",
    "bio": "Is Singer graduated from the University of Michigan at 19, joined the Army for WWII, and then did his PhD at Chicago under Irving Segal. He spent most of his career at MIT. The Atiyah-Singer index theorem (1963), proved with Michael Atiyah during Atiyah's visits to the Institute for Advanced Study, is one of the most important theorems of the 20th century. It has applications throughout physics — especially in gauge theory — and connects analysis (differential operators), geometry (vector bundles), and topology (characteristic classes). He won the Abel Prize in 2004 jointly with Atiyah and the Wolf Prize in 2000.",
    "keyWorks": [
      "The Index of Elliptic Operators I-V (with Atiyah, 1968-71)",
      "Lectures on Elementary Topology and Geometry (with Thorpe, 1967)"
    ],
    "keyIdeas": [
      "Atiyah-Singer index theorem",
      "Ray-Singer analytic torsion",
      "Applications of index theory to physics"
    ],
    "trivia": [
      "Abel Prize 2004 (with Atiyah).",
      "Wolf Prize 2000.",
      "Spent his career at MIT.",
      "Lived to 96."
    ],
    "connections": [
      "atiyah",
      "ray"
    ],
    "tags": [
      "20th",
      "america",
      "geometry",
      "analysis"
    ]
  },
  {
    "id": "wiener",
    "name": "Norbert Wiener",
    "born": "November 26, 1894",
    "died": "March 18, 1964",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "analysis",
      "probability",
      "cybernetics"
    ],
    "short": "American child prodigy; founder of cybernetics; fundamental work on stochastic processes.",
    "bio": "Wiener entered Tufts at 11, got his PhD from Harvard at 18 in mathematical logic. After study in Europe with Russell and Hardy, he joined MIT in 1919 and stayed for 44 years. He was notoriously absent-minded — stories abound of him forgetting where he lived, what he was teaching, and once introducing his daughter to himself at a bus stop. His work on Brownian motion (the 'Wiener process') founded stochastic integration. In WWII he worked on anti-aircraft fire control, leading him to found cybernetics — the study of control and communication in animals and machines (Cybernetics, 1948). In 1947 he published 'A Scientist Rebels' in the Atlantic, refusing to work on military applications.",
    "keyWorks": [
      "Cybernetics: Or Control and Communication in the Animal and the Machine (1948)",
      "The Human Use of Human Beings (1950)",
      "Ex-Prodigy (autobiography, 1953)"
    ],
    "keyIdeas": [
      "Wiener process (mathematical Brownian motion)",
      "Wiener filter",
      "Cybernetics",
      "Tauberian theorems",
      "Paley-Wiener theorem"
    ],
    "trivia": [
      "PhD at age 18.",
      "Once introduced his daughter to himself at a bus stop.",
      "Refused to work on military applications after WWII.",
      "Coined the term 'cybernetics' (1948)."
    ],
    "connections": [
      "russell",
      "hardy",
      "shannon"
    ],
    "tags": [
      "20th",
      "america",
      "analysis",
      "probability",
      "cybernetics"
    ]
  },
  {
    "id": "polya",
    "name": "George Pólya",
    "born": "December 13, 1887",
    "died": "September 7, 1985",
    "era": "20th",
    "nationality": "Hungarian-American",
    "fields": [
      "probability",
      "combinatorics",
      "analysis"
    ],
    "short": "Hungarian-American mathematician famous for How to Solve It (1945) and the Pólya enumeration theorem.",
    "bio": "Pólya studied under Hilbert in Göttingen and at ETH Zurich under Hurwitz. In 1913 he proved the Pólya recurrence theorem: a simple random walk on ℤ^d is recurrent for d = 1, 2 but transient for d ≥ 3 ('a drunken man will find his way home, but a drunken bird may get lost forever'). His 1945 book How to Solve It sold over a million copies, teaching mathematical problem-solving heuristics. With Szegő he wrote Problems and Theorems in Analysis (1925), still a standard. He left Europe in 1940 and settled at Stanford.",
    "keyWorks": [
      "Problems and Theorems in Analysis (with Szegő, 1925)",
      "How to Solve It (1945)",
      "Mathematics and Plausible Reasoning (1954)"
    ],
    "keyIdeas": [
      "Pólya recurrence theorem for random walks",
      "Pólya enumeration theorem (combinatorics)",
      "Pólya urn model",
      "Heuristic problem-solving methods"
    ],
    "trivia": [
      "'A drunken man will find his way home, but a drunken bird may get lost forever.'",
      "How to Solve It has sold over one million copies.",
      "Lived to 97.",
      "Taught at Stanford from 1942 onward."
    ],
    "connections": [
      "szego",
      "hurwitz"
    ],
    "tags": [
      "20th",
      "hungary",
      "america",
      "combinatorics",
      "heuristics"
    ]
  },
  {
    "id": "dirac",
    "name": "Paul Dirac",
    "born": "August 8, 1902",
    "died": "October 20, 1984",
    "era": "20th",
    "nationality": "British",
    "fields": [
      "physics",
      "analysis"
    ],
    "short": "British physicist-mathematician; Dirac equation; predicted antimatter; Lucasian Professor.",
    "bio": "Though better known as a physicist, Dirac's work on quantum mechanics is deeply mathematical. His 1928 Dirac equation combined special relativity with quantum mechanics and predicted the existence of the positron (discovered 1932). He shared the 1933 Nobel Prize with Schrödinger. He introduced the Dirac delta 'function' (really a distribution, later formalized by Schwartz) and bra-ket notation. Famously taciturn — his students at Cambridge coined the unit 'one Dirac' = 'one word per hour' — he would answer questions only after long silences. He was the 15th Lucasian Professor of Mathematics at Cambridge (Newton was the 2nd; Hawking was the 17th).",
    "keyWorks": [
      "The Principles of Quantum Mechanics (1930)",
      "The Quantum Theory of the Electron (1928)"
    ],
    "keyIdeas": [
      "Dirac equation",
      "Dirac delta function δ(x)",
      "Bra-ket notation",
      "Prediction of antimatter (positron)",
      "Dirac monopole"
    ],
    "trivia": [
      "15th Lucasian Professor at Cambridge.",
      "Nobel Prize 1933 (with Schrödinger).",
      "Famously taciturn; the 'Dirac' unit = 'one word per hour'.",
      "Second-cousin-in-law to Eugene Wigner."
    ],
    "connections": [
      "schrodinger",
      "heisenberg",
      "schwartz"
    ],
    "tags": [
      "20th",
      "britain",
      "physics",
      "quantum"
    ]
  },
  {
    "id": "schwartz",
    "name": "Laurent Schwartz",
    "born": "March 5, 1915",
    "died": "July 4, 2002",
    "era": "20th",
    "nationality": "French",
    "fields": [
      "analysis"
    ],
    "short": "French mathematician; invented distribution theory to rigorize the Dirac delta; Fields Medal 1950.",
    "bio": "Nephew of the mathematician Paul Lévy and of Jacques Hadamard (by marriage), Schwartz came from a distinguished Jewish intellectual family. He had to hide from the Nazis in Vichy France (his family name was changed to 'Sélimartin'). His 1945-50 theory of distributions provided a rigorous framework for objects like the Dirac delta and its derivatives, with enormous consequences for PDE theory. For this he won the 1950 Fields Medal. An energetic political activist, he campaigned against colonial wars, the Soviet treatment of dissidents, and was briefly kidnapped by the OAS in 1961.",
    "keyWorks": [
      "Théorie des distributions I, II (1950, 1951)",
      "A Mathematician Grappling with His Century (1997 autobiography)"
    ],
    "keyIdeas": [
      "Theory of distributions (generalized functions)",
      "Tempered distributions",
      "Schwartz space S(ℝⁿ)",
      "Schwartz kernel theorem"
    ],
    "trivia": [
      "Hid from Nazis in Vichy France under the name 'Sélimartin'.",
      "Fields Medal 1950.",
      "Briefly kidnapped by the OAS (1961).",
      "Collected butterflies — his collection had over 20,000 specimens."
    ],
    "connections": [
      "dirac",
      "bourbaki",
      "hadamard"
    ],
    "tags": [
      "20th",
      "france",
      "analysis",
      "distributions"
    ]
  },
  {
    "id": "robinson-julia",
    "name": "Julia Robinson",
    "born": "December 8, 1919",
    "died": "July 30, 1985",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "logic",
      "number theory"
    ],
    "short": "American mathematician who contributed to the negative solution of Hilbert's 10th problem; first woman president of the American Mathematical Society.",
    "bio": "Julia Bowman Robinson lost her mother at age 2 and suffered through scarlet fever and rheumatic fever, leaving her with permanent heart damage. She earned her PhD at Berkeley (1948) under Tarski. Her 30-year attack on Hilbert's 10th problem (does there exist a general algorithm to decide if a Diophantine equation has integer solutions?) reduced the problem to showing that there is a Diophantine relation of exponential growth — the 'Julia Robinson hypothesis.' In 1970 Yuri Matiyasevich, building on her work and work by Martin Davis and Hilary Putnam, proved the hypothesis, resolving Hilbert's 10th in the negative. She was the first woman elected to the National Academy of Sciences Mathematics Section (1975) and first woman president of the American Mathematical Society (1983).",
    "keyWorks": [
      "Existential definability in arithmetic (1952)",
      "The decision problem for exponential Diophantine equations (with Davis, Putnam, 1961)"
    ],
    "keyIdeas": [
      "Julia Robinson hypothesis (last step for Hilbert's 10th)",
      "Existential definability",
      "Early work on game theory"
    ],
    "trivia": [
      "First woman president of the AMS (1983).",
      "First woman elected to the NAS Math Section (1975).",
      "Damaged heart from childhood fever restricted her activity all her life.",
      "Husband: mathematician Raphael Robinson."
    ],
    "connections": [
      "tarski",
      "davis-martin",
      "matiyasevich"
    ],
    "tags": [
      "20th",
      "america",
      "logic",
      "women",
      "hilbert10"
    ]
  },
  {
    "id": "birkhoff",
    "name": "George David Birkhoff",
    "born": "March 21, 1884",
    "died": "November 12, 1944",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "dynamical systems",
      "analysis"
    ],
    "short": "First major American-born and American-educated mathematician; proved Poincaré's 'last geometric theorem.'",
    "bio": "Birkhoff's 1912 proof of Poincaré's 'last geometric theorem' (which Poincaré had left unproved at his death a few months earlier) made Birkhoff's reputation. At Harvard from 1912 until his death, he was the central figure of the first generation of American mathematicians to be world-class. His ergodic theorem (1931) is a foundational result in dynamical systems. His son Garrett Birkhoff was also a notable mathematician. In the 1930s Birkhoff was accused of anti-Semitic hiring practices — refusing to hire European Jewish refugees — a charge still disputed.",
    "keyWorks": [
      "Dynamical Systems (1927)",
      "Aesthetic Measure (1933)"
    ],
    "keyIdeas": [
      "Birkhoff ergodic theorem",
      "Proof of Poincaré's last geometric theorem",
      "Birkhoff normal form in Hamiltonian mechanics",
      "Birkhoff polytope"
    ],
    "trivia": [
      "First world-class American-trained mathematician.",
      "Proof of Poincaré's 'last theorem' made him famous at 28.",
      "Wrote a mathematical theory of aesthetics.",
      "His son Garrett was also a leading mathematician."
    ],
    "connections": [
      "poincare",
      "von-neumann"
    ],
    "tags": [
      "20th",
      "america",
      "dynamics"
    ]
  },
  {
    "id": "stokes",
    "name": "George Gabriel Stokes",
    "born": "August 13, 1819",
    "died": "February 1, 1903",
    "era": "19th",
    "nationality": "Irish",
    "fields": [
      "analysis",
      "physics"
    ],
    "short": "Irish mathematician-physicist; Lucasian Professor; Stokes' theorem, Navier-Stokes equations.",
    "bio": "Stokes was the 13th Lucasian Professor at Cambridge (holding the chair for 54 years, the longest tenure ever). His work on fluid dynamics produced the Navier-Stokes equations (with Claude-Louis Navier) governing the motion of viscous fluids — the existence and smoothness of solutions is one of the seven Clay Millennium Prize Problems. Stokes' theorem (∫∂M ω = ∫M dω) generalizes the fundamental theorem of calculus, Green's theorem, and the divergence theorem. He also did pioneering work on the wave theory of light and fluorescence (he coined the term).",
    "keyWorks": [
      "On the theories of internal friction of fluids in motion (1845)",
      "Mathematical and Physical Papers (5 vols, 1880-1905)"
    ],
    "keyIdeas": [
      "Stokes' theorem",
      "Navier-Stokes equations (with Navier)",
      "Stokes drift",
      "Stokes' law (drag on a sphere)",
      "Fluorescence (coined the term)"
    ],
    "trivia": [
      "54-year tenure as Lucasian Professor — the record.",
      "President of the Royal Society (1885-1890).",
      "Member of Parliament for Cambridge (1887-1891).",
      "Coined the word 'fluorescence'."
    ],
    "connections": [
      "green-george",
      "kelvin",
      "maxwell"
    ],
    "tags": [
      "19th",
      "britain",
      "analysis",
      "physics"
    ]
  },
  {
    "id": "green-george",
    "name": "George Green",
    "born": "July 14, 1793",
    "died": "May 31, 1841",
    "era": "19th",
    "nationality": "English",
    "fields": [
      "analysis",
      "physics"
    ],
    "short": "Self-taught Nottingham miller; Green's theorem, Green's functions; worked in a windmill.",
    "bio": "Green worked in his father's windmill in Nottingham and received only one year of formal education before age 40. Somehow, in 1828 he self-published An Essay on the Application of Mathematical Analysis to the Theories of Electricity and Magnetism, containing Green's theorem and Green's functions. Only 51 subscribers bought it. Sir Edward Bromhead, a subscriber, recognized its importance and finally persuaded Green, at 40, to enroll at Cambridge. Green graduated as fourth wrangler in 1837 but died at 47, not long after. His work was largely unknown until William Thomson (Lord Kelvin) discovered and republished it in 1850. Green's windmill still stands in Nottingham.",
    "keyWorks": [
      "An Essay on the Application of Mathematical Analysis to the Theories of Electricity and Magnetism (1828)"
    ],
    "keyIdeas": [
      "Green's theorem",
      "Green's functions",
      "Introduced the word 'potential'"
    ],
    "trivia": [
      "Self-taught; worked as a miller until age 40.",
      "His 1828 Essay had only 51 subscribers.",
      "Finally entered Cambridge at age 40.",
      "Green's Mill in Nottingham is now a museum.",
      "Buried in the windmill's church; a plaque in Westminster Abbey."
    ],
    "connections": [
      "kelvin",
      "stokes"
    ],
    "tags": [
      "19th",
      "england",
      "self-taught",
      "analysis"
    ]
  },
  {
    "id": "kelvin",
    "name": "William Thomson, Lord Kelvin",
    "born": "June 26, 1824",
    "died": "December 17, 1907",
    "era": "19th",
    "nationality": "British",
    "fields": [
      "analysis",
      "physics"
    ],
    "short": "Scots-Irish polymath; absolute temperature scale named for him; 'discovered' George Green.",
    "bio": "William Thomson entered Glasgow University at age 10 and Cambridge at 17. He made fundamental contributions to thermodynamics (introducing absolute temperature, the Kelvin scale), electrical engineering (the transatlantic telegraph), and fluid dynamics. He was the first British scientist elevated to the House of Lords (1892, as Baron Kelvin of Largs). In 1850 he rediscovered George Green's Essay and published it, making Green's name known. Kelvin famously underestimated the age of the Earth (from cooling rate), missing the contribution of radioactive heating — not yet known in his lifetime. He is buried next to Newton in Westminster Abbey.",
    "keyWorks": [
      "On the Dynamical Theory of Heat (1851)",
      "Treatise on Natural Philosophy (with Tait, 1867)"
    ],
    "keyIdeas": [
      "Absolute temperature scale (Kelvin)",
      "Second law of thermodynamics (Kelvin statement)",
      "Kelvin-Helmholtz instability",
      "Rediscovery of Green's functions",
      "Mathematical theory of the tides"
    ],
    "trivia": [
      "First British scientist in the House of Lords.",
      "Rediscovered George Green's Essay in 1850.",
      "Buried next to Newton in Westminster Abbey.",
      "His 1900 prediction of 'two clouds' on the horizon of physics (relativity, quantum) proved prophetic."
    ],
    "connections": [
      "green-george",
      "stokes",
      "maxwell"
    ],
    "tags": [
      "19th",
      "britain",
      "physics",
      "analysis"
    ]
  },
  {
    "id": "maxwell",
    "name": "James Clerk Maxwell",
    "born": "June 13, 1831",
    "died": "November 5, 1879",
    "era": "19th",
    "nationality": "Scottish",
    "fields": [
      "physics",
      "analysis"
    ],
    "short": "Scottish mathematician-physicist; Maxwell's equations unify electricity, magnetism, and light.",
    "bio": "Maxwell was the greatest mathematical physicist of the 19th century. His four equations, published 1861-65, unified electricity and magnetism and predicted that light is an electromagnetic wave. Einstein called this 'the most profound and the most fruitful that physics has experienced since the time of Newton.' Maxwell also invented the kinetic theory of gases (with Boltzmann), gave the first color photograph (1861), and introduced probabilistic thinking into physics (Maxwell-Boltzmann distribution). Deeply religious and fond of humorous verse, he died of abdominal cancer at 48 — the same age at which his mother had died of the same disease.",
    "keyWorks": [
      "On Physical Lines of Force (1861)",
      "A Dynamical Theory of the Electromagnetic Field (1865)",
      "A Treatise on Electricity and Magnetism (1873)"
    ],
    "keyIdeas": [
      "Maxwell's equations (electromagnetism)",
      "Prediction that light is an electromagnetic wave",
      "Maxwell-Boltzmann distribution",
      "Maxwell's demon (thought experiment)",
      "First color photograph (1861)"
    ],
    "trivia": [
      "Took the first color photograph (tartan ribbon, 1861).",
      "Einstein kept Maxwell's picture on his study wall.",
      "Died at 48 of the same cancer that killed his mother.",
      "Nicknamed 'Dafty' at school."
    ],
    "connections": [
      "kelvin",
      "stokes",
      "boltzmann"
    ],
    "tags": [
      "19th",
      "scotland",
      "physics",
      "analysis"
    ]
  },
  {
    "id": "hasse",
    "name": "Helmut Hasse",
    "born": "August 25, 1898",
    "died": "December 26, 1979",
    "era": "20th",
    "nationality": "German",
    "fields": [
      "number theory"
    ],
    "short": "German number theorist; Hasse principle; controversial for his Nazi-era activities.",
    "bio": "Hasse was a leading German number theorist whose Hasse principle states that a quadratic form has a rational solution iff it has a real solution and a p-adic solution for every prime p — connecting local and global. He joined the Nazi Party in 1937. After the war he was briefly barred from teaching but soon resumed his career. His student Martin Eichler continued the tradition of local-global number theory.",
    "keyWorks": [
      "Zahlentheorie (1949)",
      "Vorlesungen über Klassenkörpertheorie (1967)"
    ],
    "keyIdeas": [
      "Hasse principle (local-global principle)",
      "Hasse-Weil bound for points on curves",
      "Hasse-Minkowski theorem"
    ],
    "trivia": [
      "Joined the Nazi Party in 1937.",
      "Briefly removed from teaching after WWII.",
      "Edited Crelle's Journal after Hensel."
    ],
    "connections": [
      "hensel",
      "artin"
    ],
    "tags": [
      "20th",
      "germany",
      "number-theory"
    ]
  },
  {
    "id": "artin",
    "name": "Emil Artin",
    "born": "March 3, 1898",
    "died": "December 20, 1962",
    "era": "20th",
    "nationality": "Austrian-American",
    "fields": [
      "algebra",
      "number theory"
    ],
    "short": "Austrian-American mathematician; Artin reciprocity, a centerpiece of class field theory.",
    "bio": "Artin was one of the founders of modern algebra. His 1927 reciprocity law is the main theorem of class field theory and generalizes Gauss's quadratic reciprocity. At Hamburg he worked with Hecke and wrote the classic algebra textbook with van der Waerden. In 1937 he emigrated to the US (his wife was Jewish), teaching at Notre Dame, Indiana, and Princeton, before returning to Hamburg in 1958. His son Michael Artin became a leading algebraic geometer. He was also a talented pianist and lute player.",
    "keyWorks": [
      "Galois Theory (1942)",
      "Geometric Algebra (1957)"
    ],
    "keyIdeas": [
      "Artin reciprocity (class field theory)",
      "Artin L-functions",
      "Artin's conjecture on primitive roots",
      "Artin braid groups"
    ],
    "trivia": [
      "Professor's wife was Jewish; family fled to US in 1937.",
      "Son Michael Artin is also famous.",
      "Accomplished musician (piano, lute, flute).",
      "Co-solved 7 of Hilbert's 23 problems, including #9 and #17."
    ],
    "connections": [
      "hasse",
      "noether-emmy",
      "van-der-waerden"
    ],
    "tags": [
      "20th",
      "austria",
      "america",
      "algebra",
      "number-theory"
    ]
  },
  {
    "id": "cohen-paul",
    "name": "Paul Cohen",
    "born": "April 2, 1934",
    "died": "March 23, 2007",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "logic",
      "analysis"
    ],
    "short": "American mathematician; proved the independence of the Continuum Hypothesis using 'forcing' (1963); Fields Medal 1966.",
    "bio": "Paul Cohen, a Stanford professor originally trained in analysis, took up set theory in the late 1950s. In 1963 he invented the method of 'forcing' and used it to prove that the Continuum Hypothesis (|ℝ| = ℵ₁) is independent of the Zermelo-Fraenkel axioms — it can be neither proved nor disproved. Combined with Gödel's 1938 proof that CH is consistent with ZF, this showed CH is genuinely undecidable, closing the first of Hilbert's 1900 problems. He similarly showed the independence of the Axiom of Choice. He received the Fields Medal in 1966 — still the only Fields Medal ever awarded for work in mathematical logic.",
    "keyWorks": [
      "The independence of the continuum hypothesis I, II (1963-64)",
      "Set Theory and the Continuum Hypothesis (1966)"
    ],
    "keyIdeas": [
      "Method of forcing",
      "Independence of the Continuum Hypothesis",
      "Independence of the Axiom of Choice",
      "Generic filters"
    ],
    "trivia": [
      "Fields Medal 1966 — still the only Fields Medal for logic.",
      "Originally an analyst; taught himself set theory.",
      "His son Eric Cohen is an American actor."
    ],
    "connections": [
      "godel",
      "cantor"
    ],
    "tags": [
      "20th",
      "america",
      "logic",
      "set-theory"
    ]
  },
  {
    "id": "mumford",
    "name": "David Mumford",
    "born": "June 11, 1937",
    "died": "",
    "era": "20th",
    "nationality": "British-American",
    "fields": [
      "algebraic geometry",
      "vision"
    ],
    "short": "American algebraic geometer; Fields Medal 1974; later left pure math for computer vision.",
    "bio": "Mumford's Harvard PhD was under Zariski. His 1960s work on geometric invariant theory and moduli spaces of algebraic curves won him the 1974 Fields Medal. In 1983 he surprised the mathematical community by shifting his focus to applied mathematics — specifically vision and pattern recognition, seeing it as a more fertile field for someone past their pure-math prime. His 1993 paper with Shah on image segmentation (the Mumford-Shah functional) remains influential. He won the Shaw Prize (2006), Wolf Prize (2008), and National Medal of Science (2010).",
    "keyWorks": [
      "Geometric Invariant Theory (1965)",
      "The red book of varieties and schemes (Harvard notes)",
      "Tata Lectures on Theta I-III (1983-91)"
    ],
    "keyIdeas": [
      "Geometric invariant theory",
      "Moduli space of curves M_g",
      "Mumford-Shah functional (image segmentation)",
      "Deligne-Mumford stacks"
    ],
    "trivia": [
      "Fields Medal 1974.",
      "Left pure mathematics for vision research in 1983.",
      "Wolf Prize 2008, Shaw Prize 2006, National Medal of Science 2010.",
      "His 'Red Book' lectures are legendary."
    ],
    "connections": [
      "zariski",
      "grothendieck",
      "deligne"
    ],
    "tags": [
      "20th",
      "21st",
      "america",
      "algebraic-geometry",
      "vision",
      "living"
    ]
  },
  {
    "id": "scholze",
    "name": "Peter Scholze",
    "born": "December 11, 1987",
    "died": "",
    "era": "21st",
    "nationality": "German",
    "fields": [
      "algebraic geometry",
      "number theory"
    ],
    "short": "German mathematician; invented perfectoid spaces; Fields Medal 2018 at 30.",
    "bio": "Peter Scholze was a three-time IMO gold medalist for Germany (2004, 2005, 2006, with a perfect score in 2005). At Bonn his 2012 PhD, supervised by Michael Rapoport, introduced perfectoid spaces — a revolutionary new object in p-adic geometry that allowed old problems in number theory and representation theory to be attacked with new tools. Appointed professor at Bonn at 24, he was one of the youngest ever. He won the Fields Medal in 2018 at age 30. Known for his extraordinary clarity and unusually fast pace of discovery, Scholze has developed (with Dustin Clausen) a revision of condensed mathematics that aims to unify analytic and algebraic geometry.",
    "keyWorks": [
      "Perfectoid spaces (2012 PhD thesis)",
      "The local Langlands correspondence for GL_n over p-adic fields (with Harris, 2013)",
      "Condensed mathematics (with Clausen, 2019+)"
    ],
    "keyIdeas": [
      "Perfectoid spaces",
      "p-adic Hodge theory, diamonds",
      "Condensed mathematics (with Clausen)",
      "Etale cohomology of adic spaces"
    ],
    "trivia": [
      "Three-time IMO gold medal for Germany (perfect score 2005).",
      "Professor at Bonn at 24.",
      "Fields Medal 2018.",
      "His 2012 thesis revolutionized p-adic geometry."
    ],
    "connections": [
      "grothendieck",
      "deligne",
      "rapoport"
    ],
    "tags": [
      "21st",
      "germany",
      "number-theory",
      "living",
      "fields"
    ]
  },
  {
    "id": "donaldson",
    "name": "Simon Donaldson",
    "born": "August 20, 1957",
    "died": "",
    "era": "20th",
    "nationality": "British",
    "fields": [
      "geometry",
      "topology"
    ],
    "short": "British mathematician; Fields Medal 1986 for exotic smooth structures on ℝ⁴.",
    "bio": "Donaldson's PhD work at Oxford (1983) used Yang-Mills gauge theory to prove a stunning fact about 4-dimensional topology: there exist smooth structures on ℝ⁴ inequivalent to the standard one. (No other ℝⁿ has exotic smooth structures — ℝ⁴ is uniquely weird.) This result earned him the Fields Medal in 1986 at age 29. His collaboration with physicists on gauge theory was deeply fruitful for both fields. More recently he has worked on Kähler-Einstein metrics and Fano manifolds.",
    "keyWorks": [
      "Self-dual connections and the topology of smooth 4-manifolds (1983)",
      "The geometry of four-manifolds (with Kronheimer, 1990)"
    ],
    "keyIdeas": [
      "Donaldson invariants",
      "Exotic smooth structures on ℝ⁴",
      "Donaldson theory (4-manifold topology)",
      "Donaldson-Thomas invariants"
    ],
    "trivia": [
      "Fields Medal 1986 at age 29.",
      "Knighted in 2012.",
      "His work on 4-manifolds was a shock to the topology community."
    ],
    "connections": [
      "atiyah",
      "kronheimer"
    ],
    "tags": [
      "20th",
      "21st",
      "britain",
      "topology",
      "geometry",
      "living"
    ]
  },
  {
    "id": "witten",
    "name": "Edward Witten",
    "born": "August 26, 1951",
    "died": "",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "mathematical physics"
    ],
    "short": "American string theorist; only physicist to win the Fields Medal (1990).",
    "bio": "Edward Witten began his career thinking he would be a journalist — he majored in history at Brandeis and worked on the McGovern campaign. He turned to physics and received his PhD from Princeton in 1976. At the Institute for Advanced Study since 1987, his influence on both theoretical physics and pure mathematics has been enormous. His use of quantum field theory to predict results in geometry — notably the Seiberg-Witten invariants of 4-manifolds — has reshaped geometric topology. In 1990 he became the first (and to date only) physicist ever to win the Fields Medal. He is arguably the most influential living theoretical physicist.",
    "keyWorks": [
      "Supersymmetry and Morse theory (1982)",
      "Topological quantum field theory (1988)",
      "Monopoles and four-manifolds (with Seiberg, 1994)"
    ],
    "keyIdeas": [
      "Topological quantum field theory",
      "Seiberg-Witten invariants",
      "M-theory (string theory unification)",
      "Witten index",
      "Mirror symmetry (physics perspective)"
    ],
    "trivia": [
      "Only physicist ever to win the Fields Medal (1990).",
      "Started as a history major and journalism intern.",
      "Worked on the McGovern campaign in 1972.",
      "IAS since 1987."
    ],
    "connections": [
      "atiyah",
      "seiberg"
    ],
    "tags": [
      "20th",
      "21st",
      "america",
      "physics",
      "topology",
      "living",
      "fields"
    ]
  },
  {
    "id": "matiyasevich",
    "name": "Yuri Matiyasevich",
    "born": "March 2, 1947",
    "died": "",
    "era": "20th",
    "nationality": "Russian",
    "fields": [
      "logic",
      "number theory"
    ],
    "short": "Russian mathematician who, at 22, gave the final step in solving Hilbert's 10th problem (negatively, 1970).",
    "bio": "In 1970, building on decades of work by Julia Robinson, Martin Davis, and Hilary Putnam — all of whom had reduced the problem to the existence of a particular kind of Diophantine relation — 22-year-old Matiyasevich constructed the missing ingredient using Fibonacci numbers. The resulting DPRM theorem (Davis-Putnam-Robinson-Matiyasevich) resolved Hilbert's 10th problem in the negative: there is no general algorithm to decide whether a polynomial equation in several variables has integer solutions.",
    "keyWorks": [
      "Enumerable sets are Diophantine (1970)",
      "Hilbert's Tenth Problem (1993)"
    ],
    "keyIdeas": [
      "Negative solution of Hilbert's 10th Problem (1970)",
      "Matiyasevich's theorem: every computably enumerable set is Diophantine"
    ],
    "trivia": [
      "22 years old when he completed the proof.",
      "Solution relied on Fibonacci numbers.",
      "Long-standing friend of Julia Robinson.",
      "Director of the Steklov Institute in St. Petersburg."
    ],
    "connections": [
      "robinson-julia",
      "davis-martin",
      "hilbert"
    ],
    "tags": [
      "20th",
      "russia",
      "logic",
      "hilbert10",
      "living"
    ]
  },
  {
    "id": "davis-martin",
    "name": "Martin Davis",
    "born": "March 8, 1928",
    "died": "January 1, 2023",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "logic",
      "computation"
    ],
    "short": "American logician; contributed key reductions toward the negative solution of Hilbert's 10th problem.",
    "bio": "Martin Davis was Emil Post's student at NYU. His 1953 PhD showed (anticipating Matiyasevich's later work) that a certain natural conjecture would suffice to resolve Hilbert's 10th. Together with Hilary Putnam in 1961 and Julia Robinson in the late 1960s, he reduced Hilbert's 10th problem to the existence of a single exponential Diophantine relation. Matiyasevich's 1970 proof completed the negative solution. Davis also wrote classic texts on computability theory and co-developed the DPLL algorithm (1960-62) for propositional satisfiability, still the basis for modern SAT solvers.",
    "keyWorks": [
      "Computability and Unsolvability (1958)",
      "The Undecidable (editor, 1965)",
      "The Universal Computer (2000)"
    ],
    "keyIdeas": [
      "DPLL algorithm for SAT (with Putnam, Logemann, Loveland)",
      "Reductions toward Hilbert's 10th",
      "Davis-Putnam theorem"
    ],
    "trivia": [
      "Student of Emil Post.",
      "Co-invented DPLL SAT algorithm (1960-62).",
      "Lived to 94.",
      "Long-time NYU professor."
    ],
    "connections": [
      "post",
      "robinson-julia",
      "matiyasevich",
      "putnam"
    ],
    "tags": [
      "20th",
      "america",
      "logic",
      "computation"
    ]
  },
  {
    "id": "langlands",
    "name": "Robert Langlands",
    "born": "October 6, 1936",
    "died": "",
    "era": "20th",
    "nationality": "Canadian-American",
    "fields": [
      "number theory",
      "representation theory"
    ],
    "short": "Canadian mathematician; architect of the Langlands program, a vast web of conjectures linking number theory and representation theory.",
    "bio": "In January 1967 Langlands, then a 30-year-old assistant professor at Princeton, sent a 17-page handwritten letter to André Weil outlining a visionary program linking number theory, automorphic forms, and group representation theory. The 'Langlands program' grew from this letter into what has been called 'a grand unified theory of mathematics.' It unifies and generalizes class field theory, the Shimura-Taniyama-Weil conjecture (used to prove Fermat's Last Theorem), and representations of reductive groups. Langlands moved from Princeton to the Institute for Advanced Study, where he occupied Einstein's old office. He was awarded the Abel Prize in 2018.",
    "keyWorks": [
      "Letter to Weil (January 1967)",
      "Problems in the theory of automorphic forms (1970)"
    ],
    "keyIdeas": [
      "Langlands program",
      "Langlands reciprocity conjecture",
      "Langlands functoriality principle",
      "Geometric Langlands program"
    ],
    "trivia": [
      "Abel Prize 2018.",
      "Occupied Einstein's old IAS office.",
      "His 1967 letter to Weil is famous.",
      "Speaks fluent Russian and Turkish, among other languages."
    ],
    "connections": [
      "weil",
      "shimura",
      "harish-chandra",
      "wiles"
    ],
    "tags": [
      "20th",
      "21st",
      "canada",
      "america",
      "number-theory",
      "living"
    ]
  },
  {
    "id": "green-ben",
    "name": "Ben Green",
    "born": "February 27, 1977",
    "died": "",
    "era": "20th",
    "nationality": "British",
    "fields": [
      "number theory",
      "combinatorics"
    ],
    "short": "British mathematician; with Tao proved that the primes contain arbitrarily long arithmetic progressions.",
    "bio": "Ben Green is a Cambridge-trained combinatorial number theorist. With Terence Tao, he proved (2004) that for any k, the primes contain infinitely many arithmetic progressions of length k. The Green-Tao theorem combined Furstenberg's ergodic-theoretic proof of Szemerédi's theorem with number-theoretic input about the primes. Green is Waynflete Professor of Pure Mathematics at Oxford.",
    "keyWorks": [
      "The primes contain arbitrarily long arithmetic progressions (with Tao, 2004/2008)"
    ],
    "keyIdeas": [
      "Green-Tao theorem",
      "Additive combinatorics",
      "Gowers norms"
    ],
    "trivia": [
      "Proved the Green-Tao theorem at 27.",
      "Waynflete Professor at Oxford.",
      "Fellow of the Royal Society."
    ],
    "connections": [
      "tao",
      "gowers",
      "szemeredi"
    ],
    "tags": [
      "20th",
      "21st",
      "britain",
      "number-theory",
      "living"
    ]
  },
  {
    "id": "gowers",
    "name": "Timothy Gowers",
    "born": "November 20, 1963",
    "died": "",
    "era": "20th",
    "nationality": "British",
    "fields": [
      "analysis",
      "combinatorics"
    ],
    "short": "British mathematician; Fields Medal 1998; Rouse Ball Professor at Cambridge.",
    "bio": "Tim Gowers won the Fields Medal in 1998 for his work in Banach space theory and additive combinatorics, including a new proof of Szemerédi's theorem (on arithmetic progressions in dense sets of integers) using Fourier analysis — his 'Gowers uniformity norms' have become a standard tool in additive combinatorics. He has been a major advocate of collaborative mathematics online; his Polymath projects aim to solve problems by community effort. He also edited The Princeton Companion to Mathematics (2008).",
    "keyWorks": [
      "A new proof of Szemerédi's theorem (2001)",
      "The Princeton Companion to Mathematics (editor, 2008)"
    ],
    "keyIdeas": [
      "Gowers uniformity norms",
      "Fourier-analytic proof of Szemerédi's theorem",
      "Polymath Project"
    ],
    "trivia": [
      "Fields Medal 1998.",
      "Rouse Ball Professor at Cambridge (as was Littlewood).",
      "Knighted 2012.",
      "Founded the Polymath project for collaborative math.",
      "Edited the 1000-page Princeton Companion to Mathematics."
    ],
    "connections": [
      "tao",
      "green-ben",
      "szemeredi"
    ],
    "tags": [
      "20th",
      "21st",
      "britain",
      "analysis",
      "living",
      "fields"
    ]
  },
  {
    "id": "sullivan",
    "name": "Dennis Sullivan",
    "born": "February 12, 1941",
    "died": "",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "topology",
      "dynamical systems"
    ],
    "short": "American mathematician; Abel Prize 2022; fundamental contributions to topology and dynamics.",
    "bio": "Dennis Sullivan obtained his PhD from Princeton in 1966 under William Browder. His early work on surgery theory and on rational homotopy theory was very influential. In the late 1970s and 1980s he turned to dynamical systems and holomorphic dynamics, proving (1985) the 'No Wandering Domains' theorem that completed Fatou and Julia's 1918 program. He has been at CUNY Graduate Center since 1981. He won the Wolf Prize (2010) and the Abel Prize (2022).",
    "keyWorks": [
      "Infinitesimal computations in topology (1977)",
      "Quasiconformal homeomorphisms and dynamics (1985)"
    ],
    "keyIdeas": [
      "Rational homotopy theory (Sullivan models)",
      "No Wandering Domains theorem",
      "Sullivan's dictionary (dynamics ↔ Kleinian groups)"
    ],
    "trivia": [
      "Abel Prize 2022.",
      "Wolf Prize 2010.",
      "At CUNY Graduate Center since 1981.",
      "Proved Fatou's 1918 conjecture in 1985."
    ],
    "connections": [
      "thurston",
      "browder"
    ],
    "tags": [
      "20th",
      "21st",
      "america",
      "topology",
      "dynamics",
      "living"
    ]
  },
  {
    "id": "uhlenbeck",
    "name": "Karen Uhlenbeck",
    "born": "August 24, 1942",
    "died": "",
    "era": "20th",
    "nationality": "American",
    "fields": [
      "geometry",
      "analysis"
    ],
    "short": "American mathematician; first woman to win the Abel Prize (2019); pioneer of geometric analysis.",
    "bio": "Karen Uhlenbeck was a founder of modern geometric analysis. Her work on minimal surfaces, harmonic maps, and Yang-Mills equations provided analytic tools that Simon Donaldson used for his Fields Medal-winning work on 4-manifold topology. In 2019 she became the first woman awarded the Abel Prize. She has been at the Institute for Advanced Study and the University of Texas at Austin. Throughout her career she has been an advocate for women in mathematics, founding the 'Women and Mathematics' program at the IAS.",
    "keyWorks": [
      "Connections with L^p bounds on curvature (1982)",
      "Removable singularities in Yang-Mills fields (1982)"
    ],
    "keyIdeas": [
      "Uhlenbeck compactness",
      "Bubbling analysis for harmonic maps",
      "Yang-Mills instantons"
    ],
    "trivia": [
      "First woman Abel Prize laureate (2019).",
      "National Medal of Science 2000.",
      "Co-founded IAS Women and Mathematics Program.",
      "Mentored many women in geometric analysis."
    ],
    "connections": [
      "donaldson",
      "taubes"
    ],
    "tags": [
      "20th",
      "21st",
      "america",
      "geometry",
      "women",
      "living"
    ]
  },
  {
    "id": "hensel",
    "name": "Kurt Hensel",
    "born": "December 29, 1861",
    "died": "June 1, 1941",
    "era": "19th",
    "nationality": "German",
    "fields": [
      "number theory"
    ],
    "short": "German mathematician; invented p-adic numbers (1897).",
    "bio": "Hensel was a student of Kronecker. His 1897 invention of the p-adic numbers — number systems in which numbers are 'close' if they differ by a high power of p — opened a new world in number theory. Initially viewed as a curiosity, p-adic methods became central in 20th-century number theory (local-global principles, the Hasse-Minkowski theorem, modular forms, and ultimately the proof of Fermat's Last Theorem). Hensel also edited Crelle's Journal for 40 years.",
    "keyWorks": [
      "Theorie der algebraischen Zahlen (1908)",
      "Zahlentheorie (1913)"
    ],
    "keyIdeas": [
      "p-adic numbers (1897)",
      "Hensel's lemma",
      "p-adic analysis (founded)"
    ],
    "trivia": [
      "Edited Crelle's Journal for 40 years.",
      "Student of Kronecker.",
      "His p-adics were considered a curiosity for decades."
    ],
    "connections": [
      "kronecker",
      "hasse"
    ],
    "tags": [
      "19th",
      "20th",
      "germany",
      "number-theory",
      "p-adic"
    ]
  },

  {
    "id": "ramanujan",
    "name": "Srinivasa Ramanujan",
    "born": "December 22, 1887",
    "died": "April 26, 1920",
    "era": "20th",
    "nationality": "Indian",
    "fields": ["number theory", "analysis"],
    "short": "Self-taught Indian genius; discovered thousands of identities; collaborated with Hardy at Cambridge.",
    "bio": "Srinivasa Ramanujan grew up in Kumbakonam, South India, largely self-taught from a single British textbook. In 1913 he wrote to G.H. Hardy in Cambridge, enclosing 120 theorems — including continued-fraction identities Hardy said 'defeated me completely; I had never seen anything in the least like them before.' Hardy arranged for Ramanujan to come to Cambridge. In three years they wrote revolutionary papers on the partition function, highly composite numbers, and mock theta functions. Ramanujan's health collapsed under the English climate, vegetarian scarcities, and probable amoebiasis; he returned to India in 1919 and died at 32. His 'lost notebook,' rediscovered in 1976, contains mock theta functions that remain a live research area. The 2015 film The Man Who Knew Infinity dramatizes his story.",
    "keyWorks": ["Ramanujan's Notebooks (1904-1914)", "Highly Composite Numbers (1915)", "Asymptotic formulae for partitions (with Hardy, 1918)"],
    "keyIdeas": [
      "Ramanujan's partition formula (with Hardy)",
      "Mock theta functions (discovered shortly before death, resurrected 1976+)",
      "Ramanujan tau function and conjecture (proved by Deligne)",
      "Ramanujan prime",
      "Ramanujan-Hardy 'taxicab' number 1729"
    ],
    "trivia": [
      "Elected FRS at 31 — one of the youngest ever.",
      "Taxicab number 1729 story: 'I thought the number of my taxi-cab was 1729. It seemed to me rather a dull number.' Ramanujan: 'No, Hardy, it is a very interesting number.'",
      "Largely self-taught from Carr's Synopsis of Elementary Results.",
      "His lost notebook was rediscovered in 1976.",
      "Died of amoebiasis at 32."
    ],
    "connections": ["hardy", "littlewood", "deligne"],
    "tags": ["20th", "india", "number-theory"]
  },

  {
    "id": "hardy",
    "name": "G.H. Hardy",
    "born": "February 7, 1877",
    "died": "December 1, 1947",
    "era": "20th",
    "nationality": "English",
    "fields": ["number theory", "analysis"],
    "short": "English mathematician; discovered Ramanujan; author of A Mathematician's Apology (1940).",
    "bio": "Godfrey Harold Hardy was the dominant figure in British pure mathematics in the early 20th century. With J.E. Littlewood at Cambridge, he produced a corpus of 100+ joint papers on analytic number theory, Fourier analysis, and inequalities. His 1913 recognition of the young Ramanujan's letter as coming from 'a mathematician of the highest quality' was called by Hardy 'the one romantic incident in my life.' A Mathematician's Apology (1940), written near the end of his career, is a meditation on pure mathematics, beauty, and the uselessness of his own work — ironic in that his hard-core number theory became central to cryptography. He was a public atheist and a cricket fanatic who could be persuaded that God existed only by a rain-delay at Lord's.",
    "keyWorks": ["A Course of Pure Mathematics (1908)", "A Mathematician's Apology (1940)", "An Introduction to the Theory of Numbers (with Wright, 1938)", "Inequalities (with Littlewood and Pólya, 1934)"],
    "keyIdeas": [
      "Hardy-Weinberg principle (independently, 1908)",
      "Hardy-Littlewood circle method (with Littlewood, 1919)",
      "Hardy-Littlewood conjectures on prime k-tuples",
      "Hardy-Ramanujan asymptotic for partitions"
    ],
    "trivia": [
      "'There is no permanent place in the world for ugly mathematics.' — A Mathematician's Apology.",
      "Brought Ramanujan to Cambridge.",
      "An atheist who tried to trick God with a false telegram.",
      "His first-class cricket was as passionate as his first-class mathematics."
    ],
    "connections": ["ramanujan", "littlewood", "polya"],
    "tags": ["20th", "britain", "number-theory"]
  },

  {
    "id": "littlewood",
    "name": "John Edensor Littlewood",
    "born": "June 9, 1885",
    "died": "September 6, 1977",
    "era": "20th",
    "nationality": "English",
    "fields": ["analysis", "number theory"],
    "short": "English mathematician; 35-year collaborator with Hardy; author of 'Littlewood's Miscellany.'",
    "bio": "Littlewood and Hardy collaborated for 35 years on more than 100 joint papers. Littlewood tended to be the one who did the heavy analytical lifting, Hardy the one who polished and published. Littlewood himself did remarkable solo work, including the Littlewood three-spheres inequality, the Littlewood-Offord problem, and the proof that π(n) − li(n) changes sign infinitely often (1914) — surprising since empirical data had suggested li(n) is always greater. His Miscellany (1953, expanded 1986) is one of the most entertaining books of mathematical anecdote ever written.",
    "keyWorks": ["A Mathematician's Miscellany (1953)", "Theory of Functions (with Titchmarsh, 1930s)"],
    "keyIdeas": [
      "Hardy-Littlewood circle method",
      "Littlewood's theorem: π(n) - li(n) changes sign infinitely often",
      "Skewes's number (bound from Littlewood's work)",
      "Littlewood-Offord problem"
    ],
    "trivia": [
      "35-year collaboration with Hardy.",
      "Suffered from depression throughout his life.",
      "His 'Miscellany' is a beloved source of mathematical anecdote.",
      "Lived to 92."
    ],
    "connections": ["hardy", "ramanujan"],
    "tags": ["20th", "britain", "analysis"]
  },

  {
    "id": "noether-emmy",
    "name": "Emmy Noether",
    "born": "March 23, 1882",
    "died": "April 14, 1935",
    "era": "20th",
    "nationality": "German",
    "fields": ["algebra", "mathematical physics"],
    "short": "Most important woman in the history of mathematics; founded modern abstract algebra; Noether's theorem links symmetry and conservation.",
    "bio": "Amalie 'Emmy' Noether was the daughter of mathematician Max Noether. Women could not matriculate at Erlangen, so she attended as an auditor; she received her PhD in 1907 but could not find a salaried academic position. Hilbert invited her to Göttingen in 1915, but the philosophy faculty blocked her habilitation (Hilbert's famous retort: 'I do not see that the sex of the candidate is an argument against her admission as a Privatdozent. After all, we are a university, not a bathing establishment.'). She lectured under Hilbert's name for years. Her 1921 paper 'Idealtheorie in Ringbereichen' founded the modern theory of commutative rings. Her 1918 theorem — every continuous symmetry of a physical action corresponds to a conservation law — is one of the most important results in theoretical physics. Dismissed by the Nazis in 1933, she went to Bryn Mawr and taught at the IAS. She died at 53 from a sudden complication after an ovarian cyst operation. Einstein called her 'the most significant creative mathematical genius thus far produced since the higher education of women began.'",
    "keyWorks": ["Invariante Variationsprobleme (1918)", "Idealtheorie in Ringbereichen (1921)"],
    "keyIdeas": [
      "Noether's theorem — symmetries ↔ conservation laws (1918)",
      "Noetherian rings — rings with ascending chain condition",
      "Abstract ideal theory",
      "Representation theory contributions"
    ],
    "trivia": [
      "Could not receive a salary in Germany; worked for years as an 'assistant' under Hilbert's name.",
      "Einstein called her the most significant creative mathematical genius since women's higher education began.",
      "Dismissed by the Nazis 1933; died at Bryn Mawr 1935.",
      "Her father Max was also a distinguished mathematician."
    ],
    "connections": ["hilbert", "noether-max", "einstein", "artin-emil"],
    "tags": ["20th", "germany", "america", "algebra", "women"]
  },

  {
    "id": "godel",
    "name": "Kurt Gödel",
    "born": "April 28, 1906",
    "died": "January 14, 1978",
    "era": "20th",
    "nationality": "Austrian-American",
    "fields": ["logic", "foundations"],
    "short": "Austrian-American logician; proved the Incompleteness Theorems (1931); close friend of Einstein at the IAS.",
    "bio": "Kurt Gödel's 1931 paper 'On Formally Undecidable Propositions of Principia Mathematica and Related Systems' shattered Hilbert's program with two theorems: (1) any consistent formal system containing elementary arithmetic contains true statements that cannot be proven within the system; (2) no such system can prove its own consistency. At 25 Gödel had demolished the idea that mathematics could be made complete and self-verifying. In 1940 he fled Nazi-occupied Austria via Siberia and Japan to reach the IAS in Princeton, where he spent the rest of his career as Einstein's closest walking companion. Einstein said he went to the Institute 'just to have the privilege of walking home with Gödel.' Gödel developed pathological paranoia about food poisoning in his later years, eating only what his wife Adele prepared; when she was hospitalized in 1977, he starved himself, weighing 65 pounds at death. In 1948, preparing for his US citizenship interview, he found a logical inconsistency in the Constitution that could allow dictatorship — Einstein and Morgenstern, his sponsors, had to talk the judge away from the topic.",
    "keyWorks": ["On Formally Undecidable Propositions (1931)", "Consistency of the Axiom of Choice and the Generalized Continuum Hypothesis (1940)"],
    "keyIdeas": [
      "First Incompleteness Theorem",
      "Second Incompleteness Theorem",
      "Gödel numbering (encoding syntax as numbers)",
      "Consistency of AC and GCH with ZF",
      "Gödel's completeness theorem",
      "Gödel metric (rotating universe solution to Einstein's field equations)"
    ],
    "trivia": [
      "Close friend of Einstein; they walked home together daily at Princeton.",
      "Found a logical flaw in the US Constitution allowing dictatorship.",
      "Developed paranoid fear of food poisoning; starved to death at 71 weighing 65 lbs.",
      "Published his ontological proof of God posthumously."
    ],
    "connections": ["hilbert", "einstein", "von-neumann", "morgenstern"],
    "tags": ["20th", "austria", "america", "logic", "foundations"]
  },

  {
    "id": "turing",
    "name": "Alan Turing",
    "born": "June 23, 1912",
    "died": "June 7, 1954",
    "era": "20th",
    "nationality": "English",
    "fields": ["logic", "computer science", "cryptography"],
    "short": "English mathematician; founder of theoretical computer science; cracked the Enigma code during WWII.",
    "bio": "Alan Turing's 1936 paper 'On Computable Numbers' introduced the Turing machine, giving a precise mathematical definition of 'algorithm' and 'computation' — the foundation of computer science. The same paper proved the halting problem undecidable, giving another route to Gödel's incompleteness. At Bletchley Park during WWII, he led the team that broke the German Enigma code, shortening the war by an estimated 2-4 years and saving 14 million lives. After the war he designed early computers at the NPL and Manchester, and wrote the seminal 1950 paper 'Computing Machinery and Intelligence' proposing the Turing Test. In 1952 he was prosecuted for homosexuality, accepted chemical castration, and lost his security clearance. He died in 1954 of cyanide poisoning at age 41 — ruled a suicide (by a bitten apple), though his mother believed it an accident. In 2009 the British government formally apologized; in 2013 he was given a posthumous royal pardon.",
    "keyWorks": ["On Computable Numbers, with an Application to the Entscheidungsproblem (1936)", "Computing Machinery and Intelligence (1950)"],
    "keyIdeas": [
      "Turing machine",
      "Halting problem (undecidability)",
      "Church-Turing thesis",
      "Turing Test",
      "Morphogenesis via reaction-diffusion equations (1952)"
    ],
    "trivia": [
      "Broke the Enigma code; saved an estimated 14 million lives.",
      "Died by cyanide-laced apple at 41.",
      "Prosecuted for homosexuality in 1952.",
      "Pardoned posthumously 2013; on the £50 note since 2021.",
      "The Turing Award is computer science's 'Nobel.'"
    ],
    "connections": ["godel", "church", "von-neumann", "hardy"],
    "tags": ["20th", "britain", "computation", "logic"]
  },

  {
    "id": "church",
    "name": "Alonzo Church",
    "born": "June 14, 1903",
    "died": "August 11, 1995",
    "era": "20th",
    "nationality": "American",
    "fields": ["logic"],
    "short": "American logician; invented λ-calculus; Turing's thesis advisor at Princeton.",
    "bio": "Alonzo Church invented λ-calculus (lambda calculus) in 1932 — a formal system for defining computable functions that was later shown equivalent to Turing machines. Church proved (1936) that first-order logic is undecidable (the Entscheidungsproblem), using λ-calculus; Turing's independent proof using Turing machines appeared a few months later. The Church-Turing thesis is that the two formalisms capture exactly what is effectively computable. At Princeton for 40 years, he advised Turing, Rosser, Scott, and Davis as PhD students, founding a school that shaped 20th-century logic and theoretical computer science.",
    "keyWorks": ["The Calculi of Lambda-Conversion (1941)", "Introduction to Mathematical Logic (1956)"],
    "keyIdeas": [
      "λ-calculus (1932)",
      "Church-Turing thesis",
      "Church's theorem: first-order logic is undecidable",
      "Church numerals"
    ],
    "trivia": [
      "Turing's PhD advisor at Princeton.",
      "Invented λ-calculus, the basis of functional programming.",
      "Founded the Journal of Symbolic Logic.",
      "His λ-calculus predates and is equivalent to Turing's machines."
    ],
    "connections": ["turing", "godel"],
    "tags": ["20th", "america", "logic", "computation"]
  },

  {
    "id": "von-neumann",
    "name": "John von Neumann",
    "born": "December 28, 1903",
    "died": "February 8, 1957",
    "era": "20th",
    "nationality": "Hungarian-American",
    "fields": ["analysis", "game theory", "computer science", "physics"],
    "short": "Hungarian-American polymath; child prodigy; founded game theory, quantum mechanics rigor, and stored-program computing.",
    "bio": "János von Neumann (later John) was so obviously prodigious that, when his tutor first worked through calculus with him at age 8, the tutor left in tears. He published his first paper at 18 and received his mathematics PhD (Budapest) and chemical engineering diploma (ETH Zurich) simultaneously at 22. Hilbert brought him to Göttingen, where he axiomatized set theory and gave the first mathematically rigorous formulation of quantum mechanics. From 1933 he was one of the original six mathematics professors at the Institute for Advanced Study (along with Einstein and Gödel). He worked on the Manhattan Project, calculating the precise implosion lensing for the Trinity and Fat Man bombs. His 1944 Theory of Games and Economic Behavior (with Morgenstern) founded game theory. His 1945 First Draft of a Report on the EDVAC established the 'von Neumann architecture' used by essentially every modern computer. A famously brilliant and rapid speaker, he could do multi-digit multiplication in his head while holding a conversation about something else. Diagnosed with cancer in 1955, he died at 53, his mind attended at the end by priests and armed guards because he was afraid of what he might say in his decline to his Russian past.",
    "keyWorks": ["Mathematische Grundlagen der Quantenmechanik (1932)", "Theory of Games and Economic Behavior (with Morgenstern, 1944)", "First Draft of a Report on the EDVAC (1945)", "The Computer and the Brain (1958, posthumous)"],
    "keyIdeas": [
      "Minimax theorem (1928)",
      "Founded game theory (with Morgenstern)",
      "Mathematical foundations of quantum mechanics",
      "von Neumann algebras",
      "von Neumann architecture for stored-program computers",
      "Merge sort",
      "Cellular automata and self-reproducing machines"
    ],
    "trivia": [
      "His tutor wept when 8-year-old Johnny showed him calculus.",
      "Could multiply 8-digit numbers in his head.",
      "Attended Budapest, ETH Zurich simultaneously with Berlin and Göttingen.",
      "Calculated the implosion lenses for the Nagasaki bomb.",
      "Died at 53 of cancer, possibly from radiation at Los Alamos."
    ],
    "connections": ["hilbert", "godel", "einstein", "morgenstern", "turing", "ulam"],
    "tags": ["20th", "hungary", "america", "manifold", "game-theory"]
  },

  {
    "id": "banach",
    "name": "Stefan Banach",
    "born": "March 30, 1892",
    "died": "August 31, 1945",
    "era": "20th",
    "nationality": "Polish",
    "fields": ["analysis", "functional analysis"],
    "short": "Polish mathematician; founded functional analysis; central figure of the Scottish Café school in Lwów.",
    "bio": "Stefan Banach was an illegitimate child raised by a laundress in Krakow and largely self-taught in mathematics. Hugo Steinhaus discovered him in 1916 in the Planty Park, overhearing him discussing Lebesgue integration with a friend. His 1920 PhD, 'On Operations on Abstract Sets and Their Application to Integral Equations,' founded functional analysis. Banach and his colleagues, most famously at the Scottish Café in Lwów, would prove theorems over coffee, writing on the marble tabletops in pencil; results were copied into the 'Scottish Book' by the head waiter. Under Nazi occupation (1941-44) Banach was forced to feed lice for German typhus-vaccine research — the best available 'safe' job for a Polish intellectual. He died of lung cancer shortly after the war.",
    "keyWorks": ["Théorie des opérations linéaires (1932)"],
    "keyIdeas": [
      "Banach space",
      "Banach-Tarski paradox (with Tarski, 1924)",
      "Hahn-Banach theorem",
      "Banach fixed-point theorem",
      "Open mapping theorem",
      "Uniform boundedness principle"
    ],
    "trivia": [
      "Illegitimate son of a laundress; self-taught.",
      "Theorems proved on marble tabletops at the Scottish Café.",
      "Forced by Nazis to feed lice for typhus vaccine research.",
      "Died at 53 of lung cancer."
    ],
    "connections": ["steinhaus", "tarski", "sierpinski", "ulam"],
    "tags": ["20th", "poland", "analysis", "functional"]
  },

  {
    "id": "tarski",
    "name": "Alfred Tarski",
    "born": "January 14, 1901",
    "died": "October 26, 1983",
    "era": "20th",
    "nationality": "Polish-American",
    "fields": ["logic", "set theory"],
    "short": "Polish-American logician; gave a formal definition of truth (1933); co-discovered Banach-Tarski paradox.",
    "bio": "Alfred Tarski (born Tajtelbaum) was one of the four 'great logicians of the 20th century' (with Gödel, Frege, and Peano). His 1933 paper 'The Concept of Truth in Formalized Languages' gave a rigorous semantic definition of truth for formal languages — a foundation of model theory. His Banach-Tarski paradox (1924, with Banach) showed a ball can be decomposed into finitely many pieces and reassembled into two balls of the same size, using the axiom of choice. Trapped in the US by the outbreak of WWII in 1939, he joined Berkeley in 1942 and built the greatest American school of mathematical logic. He never returned to Poland; his wife and children survived the Holocaust in hiding and joined him in 1946.",
    "keyWorks": ["The Concept of Truth in Formalized Languages (1933)", "A Decision Method for Elementary Algebra and Geometry (1948)"],
    "keyIdeas": [
      "Semantic definition of truth",
      "Banach-Tarski paradox (with Banach)",
      "Tarski's undefinability theorem (truth is not definable in arithmetic)",
      "Decidability of elementary real algebra and geometry",
      "Cylindric algebras"
    ],
    "trivia": [
      "Trapped in the US by the outbreak of WWII; wife and children survived in hiding.",
      "Built the greatest American school of mathematical logic at Berkeley.",
      "Banach-Tarski paradox proves: a ball can be cut and reassembled into two balls.",
      "Considered one of the four greatest logicians of the 20th century."
    ],
    "connections": ["banach", "godel"],
    "tags": ["20th", "poland", "america", "logic"]
  },

  {
    "id": "sierpinski",
    "name": "Wacław Sierpiński",
    "born": "March 14, 1882",
    "died": "October 21, 1969",
    "era": "20th",
    "nationality": "Polish",
    "fields": ["set theory", "topology"],
    "short": "Polish mathematician; namesake of the Sierpiński triangle and carpet; founded the Polish School of Mathematics.",
    "bio": "Sierpiński, along with Zygmunt Janiszewski and Stefan Mazurkiewicz, founded the Polish School of Mathematics in 1920, which dominated set theory, topology, and logic in the interwar period. His Sierpiński triangle (1915) and Sierpiński carpet (1916) are classic examples of fractals, predating Mandelbrot's term by 60 years. During WWI he was interned in Russia; during WWII he taught at the Underground Polish University in occupied Warsaw. He received the USSR's Stalin Prize in 1948 despite never having been a communist.",
    "keyWorks": ["Cardinal and Ordinal Numbers (1958)", "Pythagorean Triangles (1962)"],
    "keyIdeas": [
      "Sierpiński triangle and carpet",
      "Sierpiński curve",
      "Sierpiński's theorem on continuous functions"
    ],
    "trivia": [
      "Founded the Polish School of Mathematics.",
      "Taught at the Underground Polish University in Nazi-occupied Warsaw.",
      "His fractals predate Mandelbrot's term by 60 years."
    ],
    "connections": ["banach", "tarski"],
    "tags": ["20th", "poland", "set-theory", "topology"]
  },

  {
    "id": "weyl",
    "name": "Hermann Weyl",
    "born": "November 9, 1885",
    "died": "December 8, 1955",
    "era": "20th",
    "nationality": "German",
    "fields": ["geometry", "physics", "group theory"],
    "short": "German mathematician; Hilbert's most brilliant student; unified Lie groups with differential geometry and quantum mechanics.",
    "bio": "Hermann Weyl was Hilbert's most philosophically-minded pupil. His 1913 Die Idee der Riemannschen Fläche was the first rigorous modern treatment of Riemann surfaces. He made fundamental contributions to general relativity (Raum, Zeit, Materie, 1918), the representation theory of Lie groups (Weyl's theorem on complete reducibility, Weyl character formula), and the mathematical foundations of quantum mechanics. In 1933 his Jewish wife made remaining in Germany impossible, and he accepted a permanent position at the IAS, succeeding Hilbert as Germany's most influential mathematician in American exile. His philosophical writings, and his essays like 'The Mathematical Way of Thinking,' are widely read.",
    "keyWorks": ["Die Idee der Riemannschen Fläche (1913)", "Raum, Zeit, Materie (1918)", "Gruppentheorie und Quantenmechanik (1928)", "The Classical Groups (1939)"],
    "keyIdeas": [
      "Weyl character formula",
      "Weyl group",
      "Weyl tensor in GR",
      "Gauge invariance (originated the concept)",
      "Rigorous theory of Riemann surfaces"
    ],
    "trivia": [
      "Hilbert's favorite student.",
      "Left Germany 1933 because his wife was Jewish.",
      "Succeeded Einstein as the IAS's senior figure.",
      "'My work always tried to unite the true with the beautiful; but when I had to choose one or the other, I usually chose the beautiful.'"
    ],
    "connections": ["hilbert", "einstein", "noether-emmy", "brouwer"],
    "tags": ["20th", "germany", "america", "geometry"]
  },

  {
    "id": "brouwer",
    "name": "L.E.J. Brouwer",
    "born": "February 27, 1881",
    "died": "December 2, 1966",
    "era": "20th",
    "nationality": "Dutch",
    "fields": ["topology", "foundations"],
    "short": "Dutch mathematician; founded modern topology; led the intuitionist school against Hilbert's formalism.",
    "bio": "Luitzen Egbertus Jan Brouwer founded modern topology with his fixed-point theorem (1910) and proof of the invariance of dimension (1911). He then abandoned classical mathematics for intuitionism, a philosophy of mathematics that rejects the law of excluded middle for infinite sets — so, for instance, 'every number is either prime or composite' is not taken as automatically true. The Hilbert-Brouwer controversy was the great foundational debate of the 1920s. Brouwer edited Mathematische Annalen with Hilbert, but after a personal falling-out Hilbert purged him from the editorial board in 1928 in a gesture many found unjustified. Brouwer spent his later decades increasingly isolated. He died after being hit by a car outside his home.",
    "keyWorks": ["On the Foundations of Mathematics (1907 PhD thesis)", "Beweis der Invarianz der Dimensionenzahl (1911)"],
    "keyIdeas": [
      "Brouwer fixed-point theorem",
      "Invariance of dimension",
      "Intuitionism in the foundations of mathematics",
      "Constructive mathematics",
      "Brouwer's theorem on triangulations"
    ],
    "trivia": [
      "Founded modern topology, then rejected it.",
      "Hilbert-Brouwer controversy was the great foundational debate of the 1920s.",
      "Hilbert removed him from Annalen editorial board in 1928.",
      "Died after being hit by a car outside his home."
    ],
    "connections": ["hilbert", "weyl"],
    "tags": ["20th", "netherlands", "topology", "foundations"]
  },

  {
    "id": "lebesgue",
    "name": "Henri Lebesgue",
    "born": "June 28, 1875",
    "died": "July 26, 1941",
    "era": "20th",
    "nationality": "French",
    "fields": ["analysis"],
    "short": "French mathematician; founded modern measure theory and the Lebesgue integral (1902).",
    "bio": "Henri Lebesgue's 1902 thesis, 'Intégrale, longueur, aire' (Integral, Length, Area), introduced the Lebesgue measure and integral — generalizations that handle vastly more functions than the classical Riemann integral and are the foundation of modern real analysis, probability theory, and functional analysis. His work resolved long-standing paradoxes about when you can interchange limits and integrals, and enabled the development of Lp spaces and Fourier analysis on general spaces. He held chairs at Poitiers, Rennes, and the Collège de France.",
    "keyWorks": ["Intégrale, longueur, aire (1902 thesis)", "Leçons sur l'intégration (1904)"],
    "keyIdeas": [
      "Lebesgue measure",
      "Lebesgue integral",
      "Lebesgue dominated convergence theorem",
      "Lebesgue differentiation theorem"
    ],
    "trivia": [
      "Replaced the 300-year Riemann integral.",
      "His 1902 thesis is one of the most influential in 20th-century mathematics.",
      "Professor at Collège de France.",
      "'I could prove it but I do not remember how.' — Lebesgue."
    ],
    "connections": ["borel", "baire", "hadamard"],
    "tags": ["20th", "france", "analysis"]
  },

  {
    "id": "borel",
    "name": "Émile Borel",
    "born": "January 7, 1871",
    "died": "February 3, 1956",
    "era": "20th",
    "nationality": "French",
    "fields": ["analysis", "probability"],
    "short": "French mathematician and politician; co-founder of measure theory; first to state 'infinite monkey theorem' (1913).",
    "bio": "Émile Borel was another founder of measure theory, introducing in 1898 what are now called Borel sets and Borel measure. His work laid the groundwork for Lebesgue. He was also an early theorist of game theory (before von Neumann) and of probability. Politically active, he was a French Minister of the Navy in 1925, a Resistance member during WWII (briefly imprisoned by the Vichy regime), and a Deputy in the French parliament. His 1913 'Mécanique statistique et irréversibilité' is credited with the first statement of the infinite monkey theorem: a monkey typing randomly will almost surely produce the works of Shakespeare given infinite time.",
    "keyWorks": ["Leçons sur la théorie des fonctions (1898)"],
    "keyIdeas": [
      "Borel sets and Borel measure",
      "Heine-Borel theorem",
      "Early game theory (before von Neumann)",
      "Infinite monkey theorem",
      "Borel-Cantelli lemma"
    ],
    "trivia": [
      "French Minister of the Navy 1925.",
      "Imprisoned briefly by the Vichy regime.",
      "Stated the infinite monkey theorem 1913.",
      "Early game theorist before von Neumann."
    ],
    "connections": ["lebesgue", "hadamard", "poincare", "cartan-henri"],
    "tags": ["20th", "france", "analysis", "probability"]
  },

  {
    "id": "zermelo",
    "name": "Ernst Zermelo",
    "born": "July 27, 1871",
    "died": "May 21, 1953",
    "era": "20th",
    "nationality": "German",
    "fields": ["set theory", "logic"],
    "short": "German mathematician; axiomatized set theory (1908); proved the well-ordering theorem using the axiom of choice.",
    "bio": "Ernst Zermelo's 1904 proof of the well-ordering theorem (every set can be well-ordered) provoked a storm of controversy because of his explicit use of the axiom of choice (AC). His 1908 axiomatization of set theory — later refined by Fraenkel and Skolem into ZFC — is the standard foundation of modern mathematics. He was dismissed from Freiburg in 1935 after refusing to give the Hitler salute; reinstated in 1946.",
    "keyWorks": ["Beweis, dass jede Menge wohlgeordnet werden kann (1904)", "Untersuchungen über die Grundlagen der Mengenlehre (1908)"],
    "keyIdeas": [
      "Axiom of choice (explicit use)",
      "Zermelo-Fraenkel set theory (ZF, ZFC)",
      "Well-ordering theorem",
      "Zermelo's navigation problem"
    ],
    "trivia": [
      "Refused the Hitler salute and was dismissed from his chair in 1935.",
      "Reinstated in 1946 but never recovered his health.",
      "His axioms, refined by Fraenkel, are the standard foundation of math."
    ],
    "connections": ["cantor", "hilbert", "fraenkel"],
    "tags": ["20th", "germany", "set-theory"]
  },

  {
    "id": "kolmogorov",
    "name": "Andrey Kolmogorov",
    "born": "April 25, 1903",
    "died": "October 20, 1987",
    "era": "20th",
    "nationality": "Russian",
    "fields": ["probability", "analysis", "dynamical systems"],
    "short": "Russian mathematician; axiomatized probability theory (1933); central figure in 20th-century Russian mathematics.",
    "bio": "Andrey Nikolaevich Kolmogorov's 1933 'Grundbegriffe der Wahrscheinlichkeitsrechnung' (Foundations of Probability Theory) axiomatized probability theory using measure theory — the definition that every probability class has used since. He made fundamental contributions to nearly every area of mathematics he touched: turbulence (the Kolmogorov 5/3 law), algorithmic complexity (Kolmogorov complexity), classical mechanics (the K in KAM theory), topology (cohomology), and intuitionistic logic. A lifelong educator, he directed the USSR's elite Physico-Mathematical School No. 18 (the 'Kolmogorov School').",
    "keyWorks": ["Grundbegriffe der Wahrscheinlichkeitsrechnung (1933)"],
    "keyIdeas": [
      "Axiomatic probability theory (measure-theoretic)",
      "Kolmogorov complexity",
      "KAM theorem (with Arnold and Moser)",
      "Kolmogorov's 5/3 law of turbulence",
      "Kolmogorov-Smirnov test",
      "Chapman-Kolmogorov equations"
    ],
    "trivia": [
      "Axiomatized probability in 1933.",
      "Dominated 20th-century Russian mathematics.",
      "Founded the elite Physico-Mathematical School No. 18 in Moscow.",
      "His students included Arnold, Sinai, Gelfand."
    ],
    "connections": ["arnold", "sinai", "aleksandrov"],
    "tags": ["20th", "russia", "probability"]
  },

  {
    "id": "erdos",
    "name": "Paul Erdős",
    "born": "March 26, 1913",
    "died": "September 20, 1996",
    "era": "20th",
    "nationality": "Hungarian",
    "fields": ["number theory", "combinatorics"],
    "short": "Hungarian mathematician; published 1,500+ papers with 500+ collaborators; the itinerant monk of mathematics.",
    "bio": "Paul Erdős (pronounced 'air-dish') is the most prolific mathematician of the 20th century and perhaps of all time: 1,525 papers with 511 coauthors. After fleeing Nazi-occupied Europe in 1938, he never again had a permanent home. He traveled the world for 60 years with a suitcase and a few hundred dollars, living with host mathematicians for a few days at a time, contributing papers and moving on. 'My brain is open,' he would announce upon arrival. He worked on probabilistic number theory, graph theory, Ramsey theory, and combinatorial number theory. He used amphetamines for decades to maintain his productivity, stopping once on a bet and complaining that mathematics had been set back a month. The Erdős number — the collaboration distance from Erdős — is a mathematical folk institution (Erdős = 0, coauthors = 1, etc.). He died of a heart attack at a conference, as he would have wished.",
    "keyWorks": ["Elementary proof of the prime number theorem (with Selberg, 1949)", "1,525 papers"],
    "keyIdeas": [
      "Probabilistic method in combinatorics",
      "Ramsey theory and the Erdős-Szekeres theorem",
      "Elementary proof of PNT (with Selberg)",
      "Erdős-Ko-Rado theorem"
    ],
    "trivia": [
      "1,525 papers with 511 coauthors.",
      "Homeless for 60 years, traveling between host mathematicians.",
      "The Erdős number measures coauthorship distance.",
      "Used amphetamines; stopped on a bet and called mathematics set back a month.",
      "'A mathematician is a device for turning coffee into theorems.' — actually Rényi, about Erdős."
    ],
    "connections": ["renyi", "selberg", "tao"],
    "tags": ["20th", "hungary", "number-theory", "combinatorics"]
  },

  {
    "id": "weil",
    "name": "André Weil",
    "born": "May 6, 1906",
    "died": "August 6, 1998",
    "era": "20th",
    "nationality": "French",
    "fields": ["algebraic geometry", "number theory"],
    "short": "French mathematician; founding member of Bourbaki; stated the Weil conjectures (1949); brother of philosopher Simone Weil.",
    "bio": "André Weil was one of the founders of the Bourbaki group in 1934 and perhaps its most commanding intellectual presence. His work on algebraic geometry over finite fields (Foundations of Algebraic Geometry, 1946) and his 1949 Weil conjectures (connecting the zeta function of a variety over a finite field to the topology of its complex-analytic counterpart) were the roadmap for much of 20th-century arithmetic geometry; they were proved by Deligne in 1974. During WWII he refused to report for French military service (citing pacifism and seeking to continue his research), was imprisoned in Finland and France, and eventually escaped to the US via Brazil. He spent his career at Chicago and the IAS. His sister Simone Weil was a major 20th-century philosopher.",
    "keyWorks": ["Foundations of Algebraic Geometry (1946)", "Sur les courbes algébriques et les variétés qui s'en déduisent (1948)"],
    "keyIdeas": [
      "Weil conjectures",
      "Foundations of algebraic geometry",
      "Adeles and ideles in number theory",
      "Mordell-Weil theorem",
      "Bourbaki (founding member)"
    ],
    "trivia": [
      "Sister of philosopher Simone Weil.",
      "Imprisoned in Finland in 1939 — Finnish authorities thought he was a Soviet spy.",
      "Founding Bourbaki member.",
      "The Weil conjectures were proved by Deligne in 1974."
    ],
    "connections": ["cartan-henri", "chevalley", "deligne", "grothendieck"],
    "tags": ["20th", "france", "america", "algebraic-geometry", "bourbaki"]
  },

  {
    "id": "grothendieck",
    "name": "Alexander Grothendieck",
    "born": "March 28, 1928",
    "died": "November 13, 2014",
    "era": "20th",
    "nationality": "German-French",
    "fields": ["algebraic geometry"],
    "short": "German-born French mathematician; revolutionized algebraic geometry with the theory of schemes; Fields Medal 1966.",
    "bio": "Alexander Grothendieck was born in Berlin to anarchist revolutionary parents. His father, Sascha Schapiro, died at Auschwitz; his mother survived with him in French internment camps. He was self-taught through his teens, rediscovering Lebesgue integration on his own. From 1958 at the IHÉS he launched a staggering reconstruction of algebraic geometry: the theory of schemes (replacing classical varieties), étale cohomology, topoi, motives, and a sequence of conjectures that would organize the field for a generation. The thousand-page EGA (Éléments de géométrie algébrique, with Dieudonné) and SGA (Séminaire) reshaped the subject. Awarded the Fields Medal in 1966, he refused to travel to Moscow to accept it in protest of Soviet suppression of Eastern European mathematicians. In 1970 he discovered that the IHÉS was partly funded by the French military; he resigned in protest and spent the rest of his life in increasing isolation, much of it as a recluse in the Pyrenees, refusing to see visitors. His unpublished Récoltes et Semailles (1986) is a 1,000-page memoir. He died a hermit in 2014.",
    "keyWorks": ["Éléments de géométrie algébrique (EGA, 1960-67)", "Séminaire de géométrie algébrique (SGA, 1960-69)", "Récoltes et Semailles (1985-86, unpublished memoir)"],
    "keyIdeas": [
      "Theory of schemes (replacing classical algebraic varieties)",
      "Étale cohomology",
      "Topoi (abstracting the notion of topological space)",
      "Motives (conjectural universal cohomology)",
      "Grothendieck-Riemann-Roch theorem",
      "K-theory",
      "Grothendieck topology"
    ],
    "trivia": [
      "Father died at Auschwitz.",
      "Fields Medal 1966 — refused to travel to Moscow to receive it.",
      "Resigned from the IHÉS over military funding 1970.",
      "Spent his last 20 years as a hermit in the Pyrenees.",
      "Récoltes et Semailles runs to ~1,000 pages."
    ],
    "connections": ["serre", "dieudonne", "deligne", "weil"],
    "tags": ["20th", "france", "algebraic-geometry", "fields"]
  },

  {
    "id": "serre",
    "name": "Jean-Pierre Serre",
    "born": "September 15, 1926",
    "died": "",
    "era": "20th",
    "nationality": "French",
    "fields": ["algebraic geometry", "topology", "number theory"],
    "short": "French mathematician; youngest Fields Medalist ever (1954, age 27); inaugural Abel Prize 2003.",
    "bio": "Serre received the Fields Medal at 27, the youngest ever, for his work transforming algebraic topology and introducing spectral sequences into the computation of homotopy groups. He then turned to algebraic geometry (FAC, 1955, founded sheaf cohomology for varieties) and to number theory (GAGA, modular forms, ℓ-adic representations). He was an essential collaborator of Grothendieck and then of Tate. Serre's conjectures on Galois representations were key in the road to Fermat's Last Theorem. The only person to have won the Fields Medal, the Abel Prize (inaugural, 2003), and the Wolf Prize (2000). Still actively lecturing in his late 90s.",
    "keyWorks": ["Homologie singulière des espaces fibrés (1951 thesis)", "Faisceaux algébriques cohérents (FAC, 1955)", "Géométrie algébrique et géométrie analytique (GAGA, 1956)", "Cours d'arithmétique (1970)"],
    "keyIdeas": [
      "Serre spectral sequence",
      "Serre duality",
      "FAC — sheaf cohomology for algebraic varieties",
      "GAGA principle",
      "Serre's modularity conjecture (proved by Khare-Wintenberger)"
    ],
    "trivia": [
      "Youngest Fields Medalist ever (27, in 1954).",
      "Inaugural Abel Prize 2003.",
      "Wolf Prize 2000.",
      "Only person to win Fields, Abel, and Wolf.",
      "Still lecturing at the Collège de France well into his 90s."
    ],
    "connections": ["grothendieck", "tate", "cartan-henri", "weil"],
    "tags": ["20th", "21st", "france", "algebraic-geometry", "living", "fields"]
  },

  {
    "id": "atiyah",
    "name": "Michael Atiyah",
    "born": "April 22, 1929",
    "died": "January 11, 2019",
    "era": "20th",
    "nationality": "English",
    "fields": ["geometry", "topology"],
    "short": "English mathematician; Fields Medal 1966; Abel Prize 2004 (with Singer) for the index theorem.",
    "bio": "Michael Atiyah was born in London to a Lebanese-Scottish family. His Fields Medal (1966) recognized his work on K-theory and topological invariants of elliptic operators. With Isadore Singer he proved the Atiyah-Singer Index Theorem (1963), one of the deepest results of 20th-century mathematics, unifying analysis, geometry, and topology: the analytic index of an elliptic operator equals its topological index. In the 1980s he pivoted toward mathematical physics, becoming a key figure in the dialogue between pure mathematics and quantum field theory/string theory, notably with Edward Witten. He was master of Trinity College, Cambridge (1990-97) and founding director of the Isaac Newton Institute. In 2018 at age 89 he claimed a proof of the Riemann Hypothesis; it was not accepted by the community.",
    "keyWorks": ["The Index of Elliptic Operators (with Singer, 1963)", "K-Theory (1967)"],
    "keyIdeas": [
      "Atiyah-Singer index theorem",
      "K-theory (topological)",
      "Atiyah-Bott fixed-point theorem",
      "Instantons and gauge theory"
    ],
    "trivia": [
      "Fields Medal 1966.",
      "Abel Prize 2004 (shared with Singer).",
      "Master of Trinity College 1990-97.",
      "Claimed to have proved the Riemann Hypothesis in 2018, age 89.",
      "Bridge-builder between mathematics and physics."
    ],
    "connections": ["singer", "hirzebruch", "bott", "witten"],
    "tags": ["20th", "britain", "geometry", "topology", "fields"]
  },

  {
    "id": "wiles",
    "name": "Andrew Wiles",
    "born": "April 11, 1953",
    "died": "",
    "era": "20th",
    "nationality": "English",
    "fields": ["number theory"],
    "short": "English mathematician; proved Fermat's Last Theorem (1994) after 7 years of secret work.",
    "bio": "Andrew Wiles first encountered Fermat's Last Theorem at age 10 in a Cambridge library book. He became a number theorist and, after hearing in 1986 that proving the Taniyama-Shimura conjecture for semistable elliptic curves would imply FLT (via work of Frey, Serre, and Ribet), he devoted himself to it in secret for seven years, working alone in his attic. He announced the proof at a Cambridge workshop in June 1993; a gap was found that autumn; working with his former student Richard Taylor he filled it in September 1994. Fermat's Last Theorem, stated in 1637, had fallen after 357 years. Because he was over 40 (the Fields Medal age cut-off), he received a special silver plaque from the IMU. Knighted in 2000; Abel Prize 2016.",
    "keyWorks": ["Modular elliptic curves and Fermat's Last Theorem (1995)"],
    "keyIdeas": [
      "Proof of Fermat's Last Theorem",
      "Modularity theorem (semistable case)",
      "Iwasawa theory contributions",
      "Main conjecture of Iwasawa theory (proved with Mazur)"
    ],
    "trivia": [
      "First encountered Fermat's Last Theorem at age 10.",
      "Worked alone on FLT in secret for 7 years.",
      "Announced proof at Cambridge 1993; gap found; fixed with Taylor 1994.",
      "Too old for a Fields Medal; special IMU plaque in 1998.",
      "Knighted 2000; Abel Prize 2016."
    ],
    "connections": ["taylor-richard", "mazur", "shimura", "taniyama"],
    "tags": ["20th", "21st", "britain", "number-theory", "living"]
  },

  {
    "id": "russell",
    "name": "Bertrand Russell",
    "born": "May 18, 1872",
    "died": "February 2, 1970",
    "era": "20th",
    "nationality": "English",
    "fields": ["logic", "philosophy"],
    "short": "English philosopher and logician; co-authored Principia Mathematica with Whitehead; Nobel in Literature 1950.",
    "bio": "Bertrand Russell, 3rd Earl Russell, was orphaned young and raised by his grandparents. His 1901 discovery of Russell's Paradox (the set of all sets that do not contain themselves) destroyed Frege's logical foundations of arithmetic on the day Frege was about to publish the second volume of his Grundgesetze. With A.N. Whitehead he wrote the three-volume Principia Mathematica (1910-13), an attempt to derive all mathematics from logic — famously taking over 300 pages to prove 1+1=2. Dismissed from Trinity College in 1916 for pacifist activities, imprisoned in 1918 for writing a seditious article, he later won the Nobel Prize in Literature (1950) and led the movement against nuclear weapons in the 1950s and 60s. He was imprisoned again at 89 for a sit-down protest. Lived to 97.",
    "keyWorks": ["Principia Mathematica (with Whitehead, 1910-13)", "Introduction to Mathematical Philosophy (1919)", "The Analysis of Mind (1921)"],
    "keyIdeas": [
      "Russell's paradox (1901)",
      "Theory of types",
      "Descriptive phrases (theory of definite descriptions)",
      "Logical atomism"
    ],
    "trivia": [
      "Discovered Russell's paradox the day Frege was going to press.",
      "Imprisoned twice (1918 and 1961, age 89).",
      "Nobel in Literature 1950.",
      "Principia takes 300+ pages to prove 1+1=2.",
      "Lived to 97."
    ],
    "connections": ["whitehead", "frege", "wittgenstein"],
    "tags": ["20th", "britain", "logic", "philosophy"]
  },

  {
    "id": "whitehead",
    "name": "Alfred North Whitehead",
    "born": "February 15, 1861",
    "died": "December 30, 1947",
    "era": "20th",
    "nationality": "English",
    "fields": ["logic", "philosophy"],
    "short": "English mathematician and philosopher; co-author of Principia Mathematica; founder of process philosophy.",
    "bio": "A.N. Whitehead was senior author of Principia Mathematica (1910-13) with his former student Bertrand Russell. After his mathematical-logical career, he moved to the philosophy department at Harvard in 1924 (at age 63) and developed process philosophy, culminating in Process and Reality (1929). He had lost his son Eric in WWI, an event that deeply affected his later philosophical writing.",
    "keyWorks": ["Principia Mathematica (with Russell, 1910-13)", "An Introduction to Mathematics (1911)", "Process and Reality (1929)"],
    "keyIdeas": [
      "Principia Mathematica (co-author)",
      "Process philosophy"
    ],
    "trivia": [
      "Moved to Harvard philosophy at age 63.",
      "His son Eric was killed in WWI.",
      "Taught Russell before collaborating with him."
    ],
    "connections": ["russell"],
    "tags": ["20th", "britain", "logic", "philosophy"]
  }
];

// Export for browser
if (typeof window !== "undefined") {
  window.MATHEMATICIANS = MATHEMATICIANS;
  window.getMathematicianById = function(id) {
    return MATHEMATICIANS.find(m => m.id === id);
  };
}
