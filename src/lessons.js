const lesson = (concept, method, example, worked, shortcut, trap) => ({
  concept, method, example, worked, shortcut, trap
});

export const lessons = {
  'rc-main': lesson(
    'A central idea states the author\'s overall claim, not merely the topic or a vivid example. Track how each paragraph changes or supports that claim.',
    ['Read the opening and conclusion for the author\'s position.', 'Label each paragraph: claim, evidence, contrast, or qualification.', 'State the whole passage in one neutral sentence before looking at options.'],
    'A passage says filters are unavoidable, then compares human editors with algorithms and asks which goal each optimizes.',
    ['The topic is filtering, but the claim is about the objective behind filtering.', 'A good answer says the value of a filter depends on what it is designed to optimize.'],
    'Eliminate answers that describe only one paragraph or add an absolute word such as always.',
    'A true detail can be the wrong main idea. Scope must cover the entire passage.'
  ),
  'rc-inference': lesson(
    'An inference is a conclusion supported by the passage even when its exact words are absent. It must stay within the author\'s evidence.',
    ['Find the lines relevant to the question.', 'Translate those lines into a cautious conclusion.', 'Reject options requiring a new premise or a stronger claim.'],
    'If a system maximizes what is easy to measure, what follows about its behavior?',
    ['Quickly measurable outcomes are likely to shape its choices.', 'It does not follow that all unmeasured outcomes disappear.'],
    'Prefer the weakest option that the evidence definitely supports.',
    'A plausible real-world claim is not an inference unless the passage supports it.'
  ),
  'rc-detail': lesson(
    'Detail questions test precise retrieval, often with a paraphrase. The answer must match the relevant line without changing its direction or scope.',
    ['Locate the named idea or keyword in the passage.', 'Read one sentence before and after it.', 'Compare each option against that local context.'],
    'The passage says trees reduce heat but street shape and roof reflectivity also matter. What is explicitly stated?',
    ['Trees are one useful intervention.', 'A claim that trees alone solve urban heat contradicts the passage.'],
    'Search by a distinctive noun from the question, then verify the surrounding sentence.',
    'Do not select an option merely because it repeats the passage\'s vocabulary.'
  ),
  'rc-application': lesson(
    'Application questions transfer the author\'s principle to a new case. Preserve the principle; change only the setting.',
    ['Write the principle in abstract terms.', 'Identify which new case has the same causal structure.', 'Check that no new assumption is needed.'],
    'A passage judges a recommendation system by its objective. Which new design fits?',
    ['A library recommender that values discovery as well as clicks applies the principle.', 'A design judged only by short-term clicks does not.'],
    'Test the option as if it were a fresh example of the author\'s rule.',
    'Surface similarity is weaker than matching the underlying logic.'
  ),
  'rc-argument': lesson(
    'Argument questions ask what strengthens, weakens, or explains a conclusion. Separate the conclusion from the evidence first.',
    ['Underline the conclusion.', 'Name the assumption connecting evidence to conclusion.', 'Choose the option that directly changes that connection.'],
    'A city claims more trees alone will solve its heat problem.',
    ['The assumption is that other causes are negligible.', 'Evidence that reflective roofs strongly affect heat would weaken the claim.'],
    'Use the “if this is true, does the conclusion move?” test.',
    'An interesting fact about the topic may have no effect on the argument.'
  ),
  'rc-tone': lesson(
    'Tone is the author\'s attitude, not the mood of the topic. Calibrate both direction and intensity.',
    ['Notice evaluative verbs and qualifiers.', 'Decide positive, negative, or balanced.', 'Choose the least extreme word that still fits.'],
    '“The proposal may help, though evidence remains limited” expresses what tone?',
    ['The writer is cautiously qualified, not hostile.', 'The word may and the evidence caveat limit certainty.'],
    'Cross out emotional or absolute tone words unless the prose is clearly emotional.',
    'A serious subject does not automatically imply a pessimistic tone.'
  ),
  'va-summary': lesson(
    'A para summary keeps the main claim and its key qualification while dropping examples, repetition, and side points.',
    ['Identify the thesis.', 'Mark any contrast or qualification essential to meaning.', 'Reject options that omit it or add a claim.'],
    'Remote work changes the role of offices from individual focus to coordination and shared equipment.',
    ['The summary should preserve that offices remain useful.', 'It should capture the change in purpose rather than predict their disappearance.'],
    'Check coverage and distortion before choosing the shortest option.',
    'A concise option can still be wrong when it drops the central contrast.'
  ),
  'va-completion': lesson(
    'A missing sentence must connect logically and grammatically to both neighboring sentences.',
    ['Track referents such as this, they, and however.', 'Identify the transition required at the gap.', 'Read the full paragraph aloud with each candidate.'],
    'Sentence A introduces a claim; sentence C begins “This exception...”.',
    ['The missing sentence must introduce an exception.', 'A general restatement of A would leave “This exception” without a referent.'],
    'Pronoun references often eliminate options faster than topic similarity.',
    'A sentence can match the topic but break the paragraph\'s logic.'
  ),
  'va-odd': lesson(
    'Four sentences form one paragraph; the odd sentence breaks its topic, chronology, or logical chain.',
    ['Find the most secure opening sentence.', 'Link sentences using pronouns, repeated terms, and cause-effect.', 'Test which sentence cannot fit without forcing a jump.'],
    'Four sentences discuss how archives preserve records; one discusses museum ticket prices.',
    ['The archive sentences build one argument.', 'The ticket-price sentence changes the subject.'],
    'Build a three- or four-sentence chain first; the leftover sentence is often clear.',
    'Do not exclude a contrast sentence simply because it begins with “however.”'
  ),
  'va-order': lesson(
    'Para jumbles are solved by strong links: introduction before reference, claim before example, cause before consequence.',
    ['Find an opening without unexplained pronouns.', 'Lock pairs using this, such, however, dates, and repeated nouns.', 'Check the full paragraph for a coherent ending.'],
    '3 introduces researchers treating archives as the past; 1 says this makes archives seem neutral; 2 challenges that view; 4 draws the implication.',
    ['The reference “this” in 1 points back to 3.', '“Yet” in 2 challenges the appearance of neutrality.', '“Therefore” in 4 concludes: 3-1-2-4.'],
    'Strong adjacent pairs are safer than guessing the entire order at once.',
    'Chronology alone is not enough when the paragraph is argumentative.'
  ),
  'lr-schedule': lesson(
    'Scheduling sets map entities to ordered time slots. Hard adjacency and before/after rules usually determine the useful cases.',
    ['Draw one slot per position.', 'Place fixed or adjacent blocks first.', 'List remaining cases and check every rule for each.'],
    'A is before C; B is not first; D is immediately after B in four slots.',
    ['Treat B-D as a block.', 'B-D can be in slots 2-3 only if A is in slot 1 and C in slot 4.', 'A-B-D-C satisfies all rules.'],
    'Use blocks for immediately before/after; this cuts the number of permutations.',
    '“After” is not the same as “immediately after.”'
  ),
  'lr-games': lesson(
    'Tournament sets combine fixtures, outcomes, and points. Make one row per match and one score column per team.',
    ['List all pairings once.', 'Assign win, draw, and loss points exactly as stated.', 'Sum by team and cross-check total points.'],
    'P beats Q, draws R, and loses to S with 3 points for a win and 1 for a draw.',
    ['P earns 3 + 1 + 0.', 'P finishes with 4 points.'],
    'In a no-draw match, total awarded points are fixed; use that as a consistency check.',
    'Do not award one draw point to the pair instead of one point to each team.'
  ),
  'di-tables': lesson(
    'Data interpretation tables reward clean totals and careful denominators. Separate row totals from column totals.',
    ['Copy only the needed cells.', 'Label units and totals.', 'Compute the requested comparison using the correct denominator.'],
    'Tea sales are 80, 100, 120, 90; coffee sales are 120, 100, 90, 150.',
    ['Tea total = 390.', 'Coffee total = 460.', 'The ratio is 39:46.'],
    'Cancel common factors before dividing large totals.',
    'A share of total sales uses tea plus coffee as denominator, not coffee alone.'
  ),
  'di-ratios': lesson(
    'A ratio compares quantities on the same scale. If two ratios share a term, make that term equal before combining them.',
    ['Write each ratio with labels.', 'Scale to a shared common term.', 'Reduce only after the quantities align.'],
    'A:B = 3:5 and B:C = 10:7.',
    ['Scale A:B to 6:10.', 'Then A:C = 6:7.'],
    'Use the least common multiple of the shared term.',
    'Never combine 3:5 and 10:7 directly while B has two different scales.'
  ),
  'lr-arrange': lesson(
    'Arrangement sets place people or objects in positions. Facing direction changes how left and right are interpreted.',
    ['Draw indexed seats or positions.', 'Place fixed positions and end constraints.', 'Apply relative order and adjacency; verify all clues.'],
    'L is middle; N is at an end; J is left of K; M is not next to N.',
    ['Place L in seat 3.', 'Test N at seat 1 or 5.', 'N-J-L-M-K meets every clue.'],
    'Use a position table and eliminate whole branches when one hard rule fails.',
    'For people facing south, their left is your right on the page.'
  ),
  'lr-distribution': lesson(
    'Distribution sets turn totals and minimums into equations and inequalities.',
    ['Define one variable for a constrained quantity.', 'Express the others from the clues.', 'Check integer, minimum, and ordering conditions.'],
    'P, Q, R share 12 tokens; R = 2Q and P > Q, with each at least 2.',
    ['Let Q = q; then R = 2q and P = 12 - 3q.', 'P > q gives 12 > 4q, so q < 3.', 'The minimum gives q = 2.'],
    'Bound the variable before enumerating values.',
    'An algebraic solution can still fail an integer or minimum condition.'
  ),
  'di-charts': lesson(
    'Charts encode values through axis scales and legends. Read the unit before doing arithmetic.',
    ['Identify axes, units, series, and whether values are totals or rates.', 'Read the relevant bars or points.', 'Calculate only after labeling the quantities.'],
    'A chart shows 40 units in year one and 50 in year two.',
    ['Change = 50 - 40 = 10.', 'Percentage increase = 10 / 40 = 25%.'],
    'For percent change, use the earlier value as base.',
    'A truncated vertical axis can exaggerate a visual difference.'
  ),
  'lr-optimize': lesson(
    'Constraint problems ask what is possible, necessary, or best under rules. Treat each rule as a testable condition.',
    ['Write a compact variable and constraint table.', 'Prune impossible branches as soon as a rule fails.', 'For maximum or minimum, prove no better case exists.'],
    'Choose two of A, B, C; A requires B and B excludes C.',
    ['If A is chosen, B must be chosen: A-B is valid.', 'B-C is invalid because B excludes C.', 'A-C is invalid because A requires B.'],
    'The strongest restriction usually determines the first branch.',
    'Finding one feasible case does not prove it is optimal.'
  ),
  'qa-percent': lesson(
    'A percent is a ratio out of 100. Every percent change has a specific base, which can change between steps.',
    ['Identify the base for each percent.', 'Convert each change into a multiplier.', 'Multiply successive factors, then compare with the original.'],
    'A price rises 20% and then falls 20%.',
    ['Start with 100.', 'After increase: 100 x 1.20 = 120.', 'After decrease: 120 x 0.80 = 96, which is 4% below 100.'],
    'For equal rise and fall of r%, net loss is r²/100 percent; here 4%.',
    'Do not cancel 20% and 20%: the second percent uses the new base.'
  ),
  'qa-pl': lesson(
    'Profit and loss compare selling price with cost price. Discount compares selling price with marked price.',
    ['Compute selling price from marked price and discount.', 'Subtract cost price to get profit or loss.', 'Divide by cost price for profit percentage.'],
    'Marked price 1500, discount 20%, cost price 1000.',
    ['Selling price = 1500 x 0.8 = 1200.', 'Profit = 1200 - 1000 = 200.', 'Profit percentage = 200 / 1000 x 100 = 20%.'],
    'Apply chained discounts as multipliers rather than adding percentages.',
    'Profit percentage is normally based on cost price, not marked price.'
  ),
  'qa-ratio': lesson(
    'Ratios express relative parts, not absolute values. Introduce a common multiplier when totals or differences are given.',
    ['Write quantities as ax, bx, and so on.', 'Use the given total or difference to solve x.', 'Return to the requested quantity or ratio.'],
    'A:B = 3:5 and together they have 64.',
    ['Total parts = 8.', 'One part = 64 / 8 = 8.', 'A = 24 and B = 40.'],
    'The parts method avoids two-variable equations for simple ratio totals.',
    'A ratio of 3:5 does not mean A is 3 or B is 5.'
  ),
  'qa-average': lesson(
    'An average is total divided by count. When an item is added, removed, or replaced, track the total first.',
    ['Convert average back to total.', 'Apply the change to total and count.', 'Divide to obtain the new average.'],
    'Five scores average 18. A sixth score is 30.',
    ['Old total = 5 x 18 = 90.', 'New total = 120.', 'New average = 120 / 6 = 20.'],
    'Use deviations from a convenient assumed mean when numbers cluster.',
    'Do not average two group averages without weighting by group sizes.'
  ),
  'qa-mixture': lesson(
    'Mixture questions conserve total quantity and the amount of each component.',
    ['Choose one component to track.', 'Write its initial and final amounts.', 'Equate amounts after adding, removing, or replacing.'],
    'Mix 10 L of 20% solution with 10 L of 40% solution.',
    ['Active amount = 2 + 4 = 6 L.', 'Total volume = 20 L.', 'Final concentration = 6 / 20 = 30%.'],
    'For two pure concentrations, alligation gives inverse quantities when the mean is known.',
    'Averaging concentrations directly works only for equal volumes.'
  ),
  'qa-tsd': lesson(
    'Distance = speed x time. Average speed for an entire trip is total distance divided by total time.',
    ['Write each leg\'s distance and time.', 'Add distances and times separately.', 'Divide total distance by total time.'],
    'Travel 180 km at 60 km/h and return 180 km at 90 km/h.',
    ['Times are 3 h and 2 h.', 'Total distance = 360 km; total time = 5 h.', 'Average speed = 72 km/h.'],
    'For equal distances at speeds a and b, use 2ab/(a+b).',
    'The arithmetic mean of the two speeds is wrong unless travel times are equal.'
  ),
  'qa-work': lesson(
    'Work problems add rates, not completion times. A person finishing in t days does 1/t of the job per day.',
    ['Set the whole job to 1.', 'Convert each worker to a rate.', 'Add or subtract rates and invert the combined rate.'],
    'A completes a job in 6 days and B in 3 days.',
    ['Rates are 1/6 and 1/3 job/day.', 'Together they do 1/2 job/day.', 'They finish in 2 days.'],
    'Choose a convenient common multiple of times as the number of work units.',
    'Adding 6 and 3 days does not give the joint completion time.'
  ),
  'qa-interest': lesson(
    'Simple interest grows on original principal; compound interest grows on the updated balance.',
    ['Identify principal, annual rate, and time.', 'Choose simple or compound formula.', 'Check whether compounding frequency changes the rate per period.'],
    'Invest 1000 at 10% annually for two years.',
    ['Simple amount = 1000 + 2 x 100 = 1200.', 'Compound amount = 1000 x 1.1² = 1210.'],
    'For two years, compound interest exceeds simple interest by P(r/100)².',
    'For half-yearly compounding, halve the annual rate and double the periods.'
  ),
  'qa-linear': lesson(
    'Linear equations describe straight-line relationships; systems are solved by substitution or elimination.',
    ['Define variables with units.', 'Translate each condition into an equation.', 'Eliminate one variable and verify in every original equation.'],
    'x + y = 10 and x - y = 2.',
    ['Add equations to get 2x = 12.', 'So x = 6 and y = 4.', 'Both original equations hold.'],
    'Add or subtract equations when coefficients already match.',
    'A value that satisfies one equation may fail the other.'
  ),
  'qa-quadratic': lesson(
    'Quadratics may be factored, completed to a square, or solved with the discriminant.',
    ['Put the equation in ax² + bx + c = 0 form.', 'Look for factors whose product is ac and sum is b.', 'If factoring fails, use the formula and verify both roots.'],
    'Solve x² - 7x + 12 = 0.',
    ['Numbers 3 and 4 multiply to 12 and add to 7.', '(x - 3)(x - 4) = 0.', 'The roots are 3 and 4.'],
    'Before using the formula, test small integer factor pairs.',
    'Forgetting both plus and minus loses one root.'
  ),
  'qa-ineq': lesson(
    'Inequalities behave like equations except multiplying or dividing by a negative reverses the sign.',
    ['Move terms to one side.', 'Factor or isolate the variable.', 'Mark critical points and test intervals.'],
    'Solve -2x > 6.',
    ['Divide by -2 and reverse > to <.', 'The answer is x < -3.'],
    'Use a sign chart for products and rational expressions.',
    'Do not multiply across an unknown-sign denominator without splitting cases.'
  ),
  'qa-functions': lesson(
    'A function maps each allowed input to one output. Domain restrictions must be checked before substitution.',
    ['Read the function rule and its domain.', 'Substitute carefully, especially inside nested functions.', 'Check whether the requested inverse or composition exists.'],
    'If f(x) = 2x + 3, find f(4) and f(f(4)).',
    ['f(4) = 11.', 'f(f(4)) = f(11) = 25.'],
    'For compositions, work from the inside outward.',
    'f(x + 1) is not f(x) + 1 unless the function rule makes it so.'
  ),
  'qa-logs': lesson(
    'A logarithm answers which exponent produces a number. Its base and argument must satisfy their domain rules.',
    ['Rewrite log_b(a) = c as b^c = a.', 'Apply product, quotient, or power rules only to valid positive arguments.', 'Verify solutions in the original log expression.'],
    'Find log_2(32).',
    ['2^5 = 32.', 'Therefore log_2(32) = 5.'],
    'Convert to exponent form before manipulating unfamiliar log equations.',
    'log(a + b) does not equal log(a) + log(b).'
  ),
  'qa-series': lesson(
    'Sequences may have constant differences, ratios, or patterned second differences. Check the simplest rule that fits all given terms.',
    ['Compute first differences.', 'If not constant, inspect ratios or second differences.', 'Confirm the rule on every term before extending.'],
    '2, 5, 8, 11, ?',
    ['Each term increases by 3.', 'The next term is 14.'],
    'Write a short difference row to reveal arithmetic patterns quickly.',
    'Do not infer a complex rule from only the first two terms.'
  ),
  'qa-numbers': lesson(
    'Number properties use prime factors to organize divisibility, factors, HCF, and LCM.',
    ['Prime-factor the number.', 'Translate the question into exponent choices.', 'Multiply the independent choices.'],
    'How many positive divisors does 360 have?',
    ['360 = 2³ x 3² x 5¹.', 'Choose exponents in 4, 3, and 2 ways.', 'Total divisors = 4 x 3 x 2 = 24.'],
    'Prime factorization is the common starting point for many number-system questions.',
    'The divisor formula counts positive divisors unless stated otherwise.'
  ),
  'qa-remainder': lesson(
    'Remainders depend on congruence classes. Reduce large expressions modulo the divisor at every step.',
    ['Identify the modulus.', 'Replace each number with its remainder.', 'Use a repeating cycle for powers if needed.'],
    'Find the remainder when 7^3 is divided by 5.',
    ['7 is congruent to 2 mod 5.', '2³ = 8, which leaves remainder 3.'],
    'For powers, list residues until the cycle repeats.',
    'A negative residue must be converted back to the requested nonnegative remainder.'
  ),
  'qa-geometry': lesson(
    'Geometry questions are solved from stated relationships and named theorems, not how a sketch appears.',
    ['Mark all given equal sides, angles, and parallels.', 'Choose a relevant theorem.', 'Solve algebraically and check geometric bounds.'],
    'A triangle has angles 50° and 60°. Find the third.',
    ['Triangle angles total 180°.', 'Third angle = 180 - 50 - 60 = 70°.'],
    'Look for similar triangles before calculating individual lengths.',
    'Diagrams may not be drawn to scale.'
  ),
  'qa-mensuration': lesson(
    'Mensuration uses perimeter, area, surface area, and volume formulas. Keep linear, square, and cubic units distinct.',
    ['Identify the shape and requested measure.', 'Write the correct formula with units.', 'Substitute and simplify only after the formula is set.'],
    'A rectangle is 8 cm by 5 cm. Find area and perimeter.',
    ['Area = 8 x 5 = 40 cm².', 'Perimeter = 2(8 + 5) = 26 cm.'],
    'Split composite shapes into familiar rectangles, triangles, or circles.',
    'Area and perimeter have different units and cannot be interchanged.'
  ),
  'qa-coordinate': lesson(
    'Coordinate geometry converts shape facts into algebra through slope, distance, and midpoint.',
    ['Plot or label the points.', 'Choose the needed formula.', 'Substitute ordered coordinates carefully.'],
    'Find the midpoint of (2, 4) and (8, 10).',
    ['Average x-coordinates: (2 + 8)/2 = 5.', 'Average y-coordinates: (4 + 10)/2 = 7.', 'Midpoint = (5, 7).'],
    'A quick sketch catches sign mistakes before formula work.',
    'In slope, subtract coordinates in the same order above and below.'
  ),
  'qa-pnc': lesson(
    'Permutations count ordered outcomes; combinations count selections where order does not matter.',
    ['Decide whether swapping chosen items creates a new outcome.', 'Use multiplication for successive choices.', 'Divide out repeated orders for combinations.'],
    'Select two people from four for an unordered committee.',
    ['There are 4 x 3 ordered pairs.', 'Each committee appears twice.', 'Number of committees = 12 / 2 = 6.'],
    'Ask “does AB differ from BA?” before choosing a formula.',
    'Do not count arrangements when the question asks only for a group.'
  ),
  'qa-probability': lesson(
    'Probability is favorable equally likely outcomes divided by all outcomes. Count the sample space explicitly.',
    ['Define the experiment and outcome units.', 'Count all outcomes.', 'Count favorable outcomes once each and divide.'],
    'Two fair dice are rolled. What is the chance their sum is 8?',
    ['There are 6 x 6 = 36 ordered outcomes.', 'Five pairs sum to 8: (2,6),(3,5),(4,4),(5,3),(6,2).', 'Probability = 5/36.'],
    'Use the complement when “at least one” is harder to count directly.',
    'Two dice outcomes are ordered even when the sum is not.'
  ),
  'qa-sets': lesson(
    'Sets use union, intersection, and complement to avoid double counting.',
    ['Draw two circles or write a four-region table.', 'Use |A union B| = |A| + |B| - |A intersection B|.', 'Subtract the union from the total for neither.'],
    'Of 80 people, 45 like tea, 40 coffee, and 20 both.',
    ['At least one = 45 + 40 - 20 = 65.', 'Neither = 80 - 65 = 15.'],
    'Fill the overlap first, then the A-only and B-only regions.',
    'Adding 45 and 40 counts the overlap twice.'
  )
};
