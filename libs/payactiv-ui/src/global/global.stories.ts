import '../../../../dist/libs/payactiv-ui/www/build/payactiv-ui.css'
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Colors'
};


export const PrimaryColorPalette = () => {
  const payactivBlueHex = text('Payactiv Blue', '#0097fb', 'HEX');
  const payactivBlueRGB = text('Payactiv Blue', 'RGB 0/151/251', 'RGB');
  const darkBlueHex = text('Dark Blue', '#0063D1', 'HEX');
  const darkBlueRGB = text('Dark Blue', 'RGB 0/99/209', 'RGB');
  const deepBlueHex = text('deep Blue', '#0063D1', 'HEX');
  const deepBlueRGB = text('deep Blue', 'RGB 0/99/209', 'RGB');

  return `
    <div style="color: white; font-size: 14px; text-align: center; display: flex; justify-content: space-evenly;">
        <div style="background-color: #0097fb; width: 150px; height: 200px; padding: 5px;">
            <p>Payactiv Blue</p>
            <p>#0097fb</p>
            <p>RGB 0/151/251</p>
        </div>

        <div style="background-color: #0063D1; width: 150px; height: 200px; padding: 5px;">
            <p>Dark Blue</p>
            <p>#0063D1</p>
            <p>RGB 0/99/209</p>
        </div>

        <div style="background-color: #0063D1; width: 150px; height: 200px; padding: 5px;">
            <p>Deep Blue</p>
            <p>#0063D1</p>
            <p>RGB 0/99/209</p>
        </div>
    </div>
  `;
};

export const SecondaryColorPalette = () => {
    const nearBlackHex = text('Near Black', '#0097fb', 'HEX');
    const nearBlackRGB = text('Near Black', 'RGB 0/151/251', 'RGB');
    const midBlackHex = text('Mid Black', '#0063D1', 'HEX');
    const midBlackRGB = text('Mid Black', 'RGB 0/99/209', 'RGB');
    const lightBlackHex = text('Light Black', '#0063D1', 'HEX');
    const lightBlackRGB = text('Light Black', 'RGB 0/99/209', 'RGB');

    return `
      <div style="color: white; font-size: 14px; text-align: center; display: flex; justify-content: space-evenly;">
          <div style="background-color: #0F1E38; width: 150px; height: 200px; padding: 5px;">
              <p>Near Black</p>
              <p>#0F1E38</p>
              <p>RGB 0/151/251</p>
          </div>

          <div style="background-color: #172C4C; width: 150px; height: 200px; padding: 5px;">
              <p>Mid Black</p>
              <p>#172C4C</p>
              <p>RGB 0/99/209</p>
          </div>

          <div style="background-color: #3D506E; width: 150px; height: 200px; padding: 5px;">
              <p>Light Black</p>
              <p>#3D506E</p>
              <p>RGB 0/99/209</p>
          </div>
      </div>
    `;
  };