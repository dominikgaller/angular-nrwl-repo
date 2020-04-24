module.exports = {
  name: 'libs-util-generic-form',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/libs/util/generic-form',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
