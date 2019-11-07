import React from 'react';
const data = [
	{
		id: 1,
		value: 'I have a bike',
		checked: false
	},
	{
		id: 2,
		value: 'I have a car',
		checked: true
	},
	{
		id: 3,
		value: 'I have a boat',
		checked: true
	}
];

const texts = data.map((text) => {
	return (
		<li>
			<input
				type="checkbox"
				name="vehicle1"
				value="Bike"
				checked={text.changed}
				onChange={() => (text.changed = !text.checked)}
			/>
			{text.value}
			<br />
		</li>
	);
});

export default texts;
