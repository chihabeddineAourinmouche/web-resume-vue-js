const calculateSubsetRatio = (width) => {
	const someThreshold = 500 // I WANT THAT AT 500 I HAVE THE FULL SET OF ICON CLASSES
	const someOtherThreshold = 500 // THE LARGER THE SLOWER THE DECREESE
	// DEFINE A BASELINE RATIO (E.G., 0.5 FOR HALF) AND ADJUST BASED ON WIDTH
	const baseRatio = 0.5;
	const adjustmentFactor = (width - someThreshold) / someOtherThreshold; // ADJUST AS NEEDED

	// CLAMP THE RATIO BETWEEN 0 AND 1 TO AVOID OUT-OF-BOUNDS ERRORS
	return Math.min(Math.max(baseRatio + adjustmentFactor, 0), 1);
}

export { calculateSubsetRatio }