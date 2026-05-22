import classes from './archive.module.css';

export default function ArchiveLayout({ archive, latest }) {
  return (
    <div className={classes.page}>
      <h2 className={classes.heading}>News Archive Page</h2>
      <div className={classes.slots}>
        <section className={classes.latest}>{archive}</section>
        <div className={classes.divider} />
        <section className={classes.latest}>{latest}</section>
      </div>
    </div>
  );
}
