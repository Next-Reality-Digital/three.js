import { UniformsGroup } from "./UniformsGroup.js"; // Assuming this path is correct relative to your file

/**
 * @author robertlong / https://github.com/robertlong
 * @author WestLangley / https://github.com/WestLangley (Updated to ES6 class)
 */

class RawUniformsGroup extends UniformsGroup {
	constructor(data) {
		// Call the parent class constructor (UniformsGroup)
		super();

		// Set the flag to identify this type
		this.isRawUniformsGroup = true;

		// Initialize RawUniformsGroup specific properties
		this.data = data;
		this.autoUpdate = true;
		this.needsUpdate = false; // This seems redundant if autoUpdate is true, but kept for compatibility
	}

	// Override add method - Note: It was unimplemented before
	add(_uniform) {
		console.warn(
			"THREE.RawUniformsGroup: .add() is unimplemented. Modify .data manually instead."
		);
		return this;
	}

	// Override remove method - Note: It was unimplemented before
	remove(_uniform) {
		// Original had a typo in the warning message, referencing .add()
		console.warn(
			"THREE.RawUniformsGroup: .remove() is unimplemented. Modify .data manually instead."
		);
		return this;
	}

	// Override copy method
	copy(source) {
		// Call the parent class's copy method first
		super.copy(source);

		// Copy RawUniformsGroup specific properties
		this.autoUpdate = source.autoUpdate;

		// Make sure source.data exists and is sliceable before copying
		// Use slice(0) for a shallow copy of the array/typed array if applicable
		this.data =
			source.data && typeof source.data.slice === "function"
				? source.data.slice(0)
				: source.data;

		return this;
	}
}

export { RawUniformsGroup };
