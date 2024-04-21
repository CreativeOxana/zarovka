import '../pages/index.css';

/* 1.verze
export const Bulb = ({ on }) => {
  return (
    <>
      <div className={on === true ? 'bulb bulb--on' : 'bulb'}></div>
    </>
  );
};
*/

export const Bulb = ({ on }) => (
  <>
    <div className={on === true ? 'bulb bulb--on' : 'bulb'}></div>
  </>
);
