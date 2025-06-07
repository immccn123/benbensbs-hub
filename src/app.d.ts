// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type LuoguColors =
		| "Red"
		| "Orange"
		| "Green"
		| "Blue"
		| "Purple"
		| "Gray"
		| "Cheater";

	namespace Ccb {
		interface HandledBenben {
			content: string;
			time: Date;
			user: {
				id: number;
				name: string;
				color: LuoguColors;
			};
		}
	}
}

export {};
