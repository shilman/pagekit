/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

import InputDate from '../../app/system/app/components/input-date.vue';
import InputFilter from '../../app/system/app/components/input-filter.vue';
// import InputImageMeta from '../../app/system/app/components/input-image-meta.vue';
// import InputImage from '../../app/system/app/components/input-image.vue';
// import InputVideo from '../../app/system/app/components/input-video.vue';
// import Loader from '../../app/system/app/components/loader.vue';
// import Modal from '../../app/system/app/components/modal.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Input', module)
  .add('input-date', () => ({
    components: { InputDate },
    template: '<input-date />',
    methods: {},
  }))
  .add('input-filter', () => ({
    components: { InputFilter },
    template: '<input-filter />',
    methods: {},
  }))
