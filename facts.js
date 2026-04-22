// ============================================================================
// ADDITIONAL FACTS — theorems, numbers, dates, quotes — for quiz generation
// Organized for FAMAT-style recall questions.
// ============================================================================

const FAMOUS_THEOREMS = [
  { id: "pythagoras-thm", name: "Pythagorean Theorem", statement: "In a right triangle, a² + b² = c².", discoverer: "pythagoras", year: "c. 530 BC", era: "ancient", note: "Known to Babylonians ~1000 years earlier, but first proved by Pythagoreans." },
  { id: "fund-thm-arithmetic", name: "Fundamental Theorem of Arithmetic", statement: "Every integer > 1 factors uniquely into primes (up to order).", discoverer: "euclid", year: "c. 300 BC", era: "ancient", note: "In Euclid's Elements, Book IX." },
  { id: "infinitude-primes", name: "Infinitude of Primes", statement: "There are infinitely many prime numbers.", discoverer: "euclid", year: "c. 300 BC", era: "ancient" },
  { id: "archimedes-pi", name: "Bounds on π", statement: "223/71 < π < 22/7.", discoverer: "archimedes", year: "c. 250 BC", era: "ancient" },
  { id: "eratosthenes-sieve", name: "Sieve of Eratosthenes", statement: "Algorithm for finding all primes up to n.", discoverer: "eratosthenes", year: "c. 240 BC", era: "ancient" },
  { id: "euler-identity", name: "Euler's Identity", statement: "e^(iπ) + 1 = 0.", discoverer: "euler", year: "1748", era: "enlightenment", note: "Often called 'the most beautiful formula in mathematics.'" },
  { id: "euler-formula-polyhedra", name: "Euler's Polyhedral Formula", statement: "V − E + F = 2 for convex polyhedra.", discoverer: "euler", year: "1750", era: "enlightenment" },
  { id: "basel-problem", name: "Basel Problem", statement: "Σ 1/n² = π²/6.", discoverer: "euler", year: "1735", era: "enlightenment", note: "Posed by Pietro Mengoli in 1650; attempted by the Bernoullis." },
  { id: "seven-bridges", name: "Seven Bridges of Königsberg", statement: "No closed tour crosses each bridge exactly once (founded graph theory).", discoverer: "euler", year: "1736", era: "enlightenment" },
  { id: "ftalg", name: "Fundamental Theorem of Algebra", statement: "Every non-constant polynomial over ℂ has a complex root.", discoverer: "gauss", year: "1799", era: "19th", note: "d'Alembert gave a flawed proof in 1746; Gauss gave 4 proofs during his life." },
  { id: "quad-reciprocity", name: "Quadratic Reciprocity", statement: "For distinct odd primes p and q, (p/q)(q/p) = (−1)^{(p−1)(q−1)/4}.", discoverer: "gauss", year: "1796", era: "19th", note: "Gauss gave eight distinct proofs." },
  { id: "fund-thm-calc", name: "Fundamental Theorem of Calculus", statement: "Differentiation and integration are inverse operations.", discoverer: "newton", year: "c. 1666", era: "enlightenment", note: "Geometric form known to Barrow; independently by Leibniz." },
  { id: "newton-laws", name: "Newton's Laws of Motion", statement: "F = ma; conservation of momentum; action-reaction.", discoverer: "newton", year: "1687", era: "enlightenment" },
  { id: "binomial-thm", name: "Binomial Theorem", statement: "(a+b)^n = Σ C(n,k) a^{n−k} b^k.", discoverer: "newton", year: "1665", era: "enlightenment", note: "Generalized to non-integer exponents by Newton." },
  { id: "fermat-last", name: "Fermat's Last Theorem", statement: "No integer solutions to xⁿ + yⁿ = zⁿ for n > 2.", discoverer: "fermat", year: "1637 (stated)", era: "enlightenment", note: "Proved by Wiles 1994, 357 years later." },
  { id: "fermat-little", name: "Fermat's Little Theorem", statement: "a^p ≡ a (mod p) for prime p.", discoverer: "fermat", year: "1640", era: "enlightenment" },
  { id: "bolzano-wstrass", name: "Bolzano-Weierstrass Theorem", statement: "Every bounded sequence in ℝⁿ has a convergent subsequence.", discoverer: "bolzano", year: "1817", era: "19th" },
  { id: "ivt", name: "Intermediate Value Theorem", statement: "If f continuous on [a,b], f takes every value between f(a) and f(b).", discoverer: "bolzano", year: "1817", era: "19th" },
  { id: "cauchy-integral", name: "Cauchy's Integral Formula", statement: "f(a) = (1/2πi) ∮ f(z)/(z−a) dz.", discoverer: "cauchy", year: "1831", era: "19th" },
  { id: "cauchy-residue", name: "Residue Theorem", statement: "∮_γ f(z) dz = 2πi Σ Res(f, zₖ).", discoverer: "cauchy", year: "1831", era: "19th" },
  { id: "abel-ruffini", name: "Abel-Ruffini Theorem", statement: "The general polynomial equation of degree ≥ 5 has no solution by radicals.", discoverer: "abel", year: "1824", era: "19th" },
  { id: "galois-thm", name: "Galois's Theorem on Solvability", statement: "A polynomial is solvable by radicals iff its Galois group is solvable.", discoverer: "galois", year: "1832", era: "19th" },
  { id: "4squares", name: "Lagrange's Four-Square Theorem", statement: "Every natural number is a sum of at most four squares.", discoverer: "lagrange", year: "1770", era: "enlightenment" },
  { id: "pigeonhole", name: "Pigeonhole Principle", statement: "If n items are in m boxes with n > m, some box has more than one item.", discoverer: "dirichlet", year: "1834", era: "19th", note: "Called the 'Schubfachprinzip' (drawer principle)." },
  { id: "noether-thm", name: "Noether's Theorem", statement: "Every differentiable symmetry of a physical action corresponds to a conservation law.", discoverer: "noether-emmy", year: "1915", era: "20th" },
  { id: "incompleteness1", name: "Gödel's First Incompleteness Theorem", statement: "Any consistent formal system containing arithmetic has true but unprovable statements.", discoverer: "godel", year: "1931", era: "20th" },
  { id: "incompleteness2", name: "Gödel's Second Incompleteness Theorem", statement: "No consistent system can prove its own consistency.", discoverer: "godel", year: "1931", era: "20th" },
  { id: "halting", name: "Halting Problem", statement: "No algorithm decides whether an arbitrary program halts.", discoverer: "turing", year: "1936", era: "20th" },
  { id: "banach-tarski", name: "Banach-Tarski Paradox", statement: "A ball can be decomposed and reassembled into two balls of the same size.", discoverer: "banach", year: "1924", era: "20th", note: "Uses the axiom of choice." },
  { id: "pnt", name: "Prime Number Theorem", statement: "π(n) ~ n/ln n.", discoverer: "hadamard", year: "1896", era: "19th", note: "Conjectured by Gauss and Legendre; independently proved by de la Vallée Poussin." },
  { id: "weil-conj", name: "Weil Conjectures (Riemann Hypothesis over Finite Fields)", statement: "Zeros of the zeta function of a variety over F_q lie on specific lines.", discoverer: "weil", year: "1949 (stated)", era: "20th", note: "Proved by Deligne 1974." },
  { id: "atiyah-singer", name: "Atiyah-Singer Index Theorem", statement: "The analytic index of an elliptic operator equals its topological index.", discoverer: "atiyah", year: "1963", era: "20th" },
  { id: "poincare-conj", name: "Poincaré Conjecture", statement: "Every simply-connected closed 3-manifold is homeomorphic to S³.", discoverer: "poincare", year: "1904 (stated)", era: "20th", note: "Proved by Perelman 2002-3." },
  { id: "green-tao", name: "Green-Tao Theorem", statement: "The primes contain arithmetic progressions of arbitrary length.", discoverer: "tao", year: "2004", era: "21st" },
  { id: "thales-thm", name: "Thales' Theorem", statement: "An angle inscribed in a semicircle is a right angle.", discoverer: "thales", year: "c. 600 BC", era: "ancient" },
  { id: "hippocrates-lune", name: "Quadrature of the Lune", statement: "A specific lune can be squared exactly with compass and straightedge.", discoverer: "hippasus", year: "c. 440 BC", era: "ancient", note: "First successful quadrature of a curvilinear figure. (Hippocrates of Chios, not the physician.)" },
  { id: "heron-formula", name: "Heron's Formula", statement: "A = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2.", discoverer: "heron", year: "c. 60 AD", era: "ancient" },
  { id: "ptolemy-thm", name: "Ptolemy's Theorem", statement: "For a cyclic quadrilateral ABCD: AC·BD = AB·CD + AD·BC.", discoverer: "ptolemy", year: "c. 150 AD", era: "ancient" },
  { id: "brahmagupta-formula", name: "Brahmagupta's Formula", statement: "Area of cyclic quadrilateral = √((s−a)(s−b)(s−c)(s−d)).", discoverer: "brahmagupta", year: "628 AD", era: "medieval" },
  { id: "desargues-thm", name: "Desargues's Theorem", statement: "Two triangles are in perspective from a point iff in perspective from a line.", discoverer: "desargues", year: "1648", era: "enlightenment" },
  { id: "pascal-thm", name: "Pascal's Theorem", statement: "Opposite sides of a hexagon inscribed in a conic meet in collinear points.", discoverer: "pascal", year: "1640", era: "enlightenment", note: "Proved by Pascal at age 16." },
  { id: "descartes-thm", name: "Descartes's Rule of Signs", statement: "Number of positive real roots of a polynomial ≤ number of sign changes in coefficients.", discoverer: "descartes", year: "1637", era: "enlightenment" },
  { id: "moivre-formula", name: "De Moivre's Formula", statement: "(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).", discoverer: "de-moivre", year: "1722", era: "enlightenment" },
  { id: "wallis-product", name: "Wallis Product", statement: "π/2 = (2·2·4·4·6·6 ... ) / (1·3·3·5·5·7 ... ).", discoverer: "wallis", year: "1656", era: "enlightenment" },
  { id: "cantor-diagonal", name: "Cantor's Diagonal Argument", statement: "The real numbers are uncountable.", discoverer: "cantor", year: "1891", era: "19th" },
  { id: "russell-paradox", name: "Russell's Paradox", statement: "The set of all sets that don't contain themselves is inconsistent.", discoverer: "russell", year: "1901", era: "20th" }
];

const FAMOUS_NUMBERS = [
  { name: "π (pi)", value: "≈ 3.14159", history: "Ratio of circumference to diameter. Symbol introduced by William Jones 1706; popularized by Euler.", keyPeople: ["archimedes", "madhava", "ramanujan", "euler", "lambert", "lindemann"] },
  { name: "e (Euler's number)", value: "≈ 2.71828", history: "Base of natural logarithm. Discovered by Bernoulli studying compound interest (1683); symbol e by Euler 1727.", keyPeople: ["bernoulli-jakob", "euler", "hermite"] },
  { name: "φ (golden ratio)", value: "(1+√5)/2 ≈ 1.618", history: "Named 'divine proportion' by Pacioli; studied by Euclid.", keyPeople: ["euclid", "pacioli", "fibonacci", "kepler"] },
  { name: "γ (Euler-Mascheroni constant)", value: "≈ 0.57721", history: "lim (H_n − ln n). Unknown if rational or irrational.", keyPeople: ["euler", "mascheroni"] },
  { name: "1729 (Ramanujan's taxicab)", value: "1729 = 1³+12³ = 9³+10³", history: "Smallest number expressible as sum of two cubes in two ways. Ramanujan's reply to Hardy, 1918.", keyPeople: ["ramanujan", "hardy"] },
  { name: "i (imaginary unit)", value: "i² = −1", history: "Coined by Descartes (pejoratively); symbol i by Euler 1777.", keyPeople: ["bombelli", "euler", "descartes"] }
];

const FAMOUS_QUOTES = [
  { text: "Mathematics is the queen of the sciences and number theory is the queen of mathematics.", speaker: "gauss" },
  { text: "God made the integers; all else is the work of man.", speaker: "kronecker" },
  { text: "We must know. We will know.", speaker: "hilbert" },
  { text: "The book of nature is written in the language of mathematics.", speaker: "galileo" },
  { text: "No one will expel us from the paradise which Cantor has created.", speaker: "hilbert" },
  { text: "Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows.", speaker: "minkowski" },
  { text: "I have created a new, another world out of nothing.", speaker: "bolyai" },
  { text: "Sire, I had no need of that hypothesis.", speaker: "laplace" },
  { text: "It took them only an instant to cut off that head, and a hundred years may not produce another like it.", speaker: "lagrange" },
  { text: "I have discovered a truly marvellous proof of this, which this margin is too narrow to contain.", speaker: "fermat" },
  { text: "The essence of mathematics lies in its freedom.", speaker: "cantor" },
  { text: "Life is good for only two things: discovering mathematics and teaching mathematics.", speaker: "poisson" },
  { text: "Mathematics is the art of giving the same name to different things.", speaker: "poincare" },
  { text: "He ceased to calculate and to live.", speaker: "euler", note: "Said by Condorcet about Euler" },
  { text: "I turn aside with a shudder of horror from this lamentable plague of functions which have no derivatives.", speaker: "hermite" },
  { text: "For the honor of the human spirit.", speaker: "jacobi" },
  { text: "A mathematician is a device for turning coffee into theorems.", speaker: "erdos", note: "Often attributed to Erdős but actually said by Alfréd Rényi" },
  { text: "My brain is open.", speaker: "erdos" },
  { text: "Je n'ai pas le temps. (I have no time.)", speaker: "galois", note: "Written in margins the night before his fatal duel" }
];

// For timeline / era summaries
const ERA_INFO = {
  ancient: { label: "Ancient", range: "3000 BC – 500 AD", color: "#8B6F47", description: "From Babylonian clay tablets to Greek geometry to the Alexandrian school — the foundations of Western mathematics, including arithmetic, Euclidean geometry, conic sections, and trigonometry." },
  medieval: { label: "Medieval", range: "500 – 1400", color: "#6B5B95", description: "While Europe lost the thread, mathematics flourished in India (decimal numerals, trigonometry, early calculus) and the Islamic world (al-jabr, algorithms, the 10-digit decimal system that Europe would eventually adopt)." },
  renaissance: { label: "Renaissance", range: "1400 – 1650", color: "#B33951", description: "The printing press, the rediscovery of Greek mathematics, the solution of cubic and quartic equations, the invention of logarithms, the birth of modern notation, and the first steps toward calculus." },
  enlightenment: { label: "Enlightenment", range: "1650 – 1800", color: "#1D3557", description: "The invention of analytic geometry, probability, calculus (by Newton and Leibniz), and the towering synthesis of Euler, whose work defined analysis for a century." },
  "19th": { label: "19th Century", range: "1800 – 1900", color: "#5C3317", description: "The century of rigor, abstraction, and specialization. Gauss, Cauchy, Abel, Galois, Riemann, Weierstrass, and Cantor transformed mathematics, creating modern algebra, analysis, geometry, and set theory." },
  "20th": { label: "20th Century", range: "1900 – 2000", color: "#264653", description: "From Hilbert's program to Gödel's shock, from Noether's algebra to Turing's computation, from Bourbaki's structuralism to Grothendieck's schemes — and the first widespread involvement of women and non-Europeans at the highest levels." },
  "21st": { label: "21st Century", range: "2000 – present", color: "#2A9D8F", description: "Solutions to centuries-old problems (Poincaré, Fermat), the rise of computer-assisted proof, massive collaboration, and the first women and Africans to win the Fields Medal." }
};

// Quiz tags for organization
const QUIZ_CATEGORIES = [
  { id: "dates", label: "Dates & Chronology", description: "When was X born? When did they publish? Who came first?" },
  { id: "nationality", label: "Nationalities & Places", description: "Where did they work? What school did they found?" },
  { id: "works", label: "Named Works & Papers", description: "Who wrote which famous book?" },
  { id: "theorems", label: "Theorems & Discoveries", description: "Match theorem to discoverer, and what does it say?" },
  { id: "contemporaries", label: "Contemporaries & Rivals", description: "Who taught whom? Who feuded with whom?" },
  { id: "trivia", label: "Trivia & Anecdotes", description: "The stories, the duels, the coincidences, the death scenes." }
];

if (typeof window !== 'undefined') {
  window.FAMOUS_THEOREMS = FAMOUS_THEOREMS;
  window.FAMOUS_NUMBERS = FAMOUS_NUMBERS;
  window.FAMOUS_QUOTES = FAMOUS_QUOTES;
  window.ERA_INFO = ERA_INFO;
  window.QUIZ_CATEGORIES = QUIZ_CATEGORIES;
}
