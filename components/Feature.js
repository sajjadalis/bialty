export const Feature = {
	props: {
		title: String,
		iconClass: String,
		divClass: String,
	},
	template: `
    <div :class="['flex items-center', divClass]">
        <svg :class="iconClass" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><g fill="none"><path d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6zm7.354-.896a.5.5 0 1 0-.708-.708L5.5 6.543L4.354 5.396a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l2.5-2.5z" fill="currentColor"></path></g></svg>

        <span class="ml-2">{{ title }}</span>
    </div>
    `,
	setup(props) {},
};
