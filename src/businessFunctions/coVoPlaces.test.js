import { covoCoordToRealCoord, realCoordToCoVoCoord } from "./coVoPlaces.js";

test("covoCoordToRealCoord returns number within range", () => {
  const covoLat = Math.floor(Math.random() * 1800001) - 900000;
  const covoLong = Math.floor(Math.random() * 3600001) - 1800000;

  expect(
    covoCoordToRealCoord({ covoLat, covoLong }).lat
  ).toBeGreaterThanOrEqual(-90);
  expect(covoCoordToRealCoord({ covoLat, covoLong }).lat).toBeLessThanOrEqual(
    90
  );
  expect(
    covoCoordToRealCoord({ covoLat, covoLong }).long
  ).toBeGreaterThanOrEqual(-180);
  expect(covoCoordToRealCoord({ covoLat, covoLong }).long).toBeLessThanOrEqual(
    180
  );
});

test("realCoordToCoVoCoord returns number within range", () => {
  const lat = Math.floor(Math.random() * 181) - 90;
  const long = Math.floor(Math.random() * 361) - 180;

  expect(
    realCoordToCoVoCoord({
      lat,
      long
    }).covoLat
  ).toBeGreaterThanOrEqual(-900000);
  expect(
    realCoordToCoVoCoord({
      lat,
      long
    }).covoLat
  ).toBeLessThanOrEqual(900000);
  expect(
    realCoordToCoVoCoord({
      lat,
      long
    }).covoLong
  ).toBeGreaterThanOrEqual(-1800000);
  expect(
    realCoordToCoVoCoord({
      lat,
      long
    }).covoLong
  ).toBeLessThanOrEqual(1800000);
});
