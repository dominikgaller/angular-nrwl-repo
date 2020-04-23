module.exports = {
  name: 'rest-services',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/rest-services',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
