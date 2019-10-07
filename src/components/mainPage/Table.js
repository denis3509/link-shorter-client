import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '700px',
    margin : '50px auto',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));


export default function LinksTable(props) {
  const classes = useStyles();
  const {table} = props;
  const rows = table.map(row => {
    const {shortUrl, originalUrl, clicks} = row;
    return {shortUrl, originalUrl, clicks}
  });
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>

            <TableCell align="left">Short url</TableCell>
            <TableCell align="center">Original Url</TableCell>
            <TableCell align="right">Clicks</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.shortUrl}>

              <TableCell align="left"><a href={row.shortUrl}>{row.shortUrl}</a></TableCell>
              <TableCell align="left"><a href={row.originalUrl}>{row.originalUrl.slice(0,40)}...</a></TableCell>
              <TableCell align="center">{row.clicks}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}