<template>
	<div>
		<slot/>
		<div
			v-for="(timeline, year) in events"
			v-if="isDatePast(`${year}/12/31`)">
			<h3>{{ year }}</h3>
			<div
				v-for="(events, month) in timeline"
				v-if="events.length && isDatePast(`${year}/${month}/30`)">
				<h4>{{ month }}</h4>
				<ul>
					<event-item
						v-for="(event, index) in events"
						:key="index"
						:past="past"
						:month="month"
						:event="event"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import eventsTimeline from '../data';
import EventItem from './EventItem';
import { isPast } from '../utils';

export default {
	components: {
		EventItem,
	},

	props: {
		past: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			events: eventsTimeline,
		};
	},

	methods: {
		isDatePast(date) {
			return isPast(date) === this.past;
		}
	}
}
</script>
