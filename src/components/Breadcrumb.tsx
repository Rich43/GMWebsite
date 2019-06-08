import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from './Routing';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: 2,
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        fontSize: '0.8rem',
        '& .icon': {
            marginRight: 4,
            fontSize: '1.3em',
        }
    },
    link: {
        display: 'flex',
        padding: '2px 6px',
        borderRadius: 10,
        background: theme.palette.primary.main,
        color: theme.palette.text.primary,
        textDecoration: 'none',
        transition: 'color 0.175s, background 0.175s',
        '&:hover, &:focus': {
            background: theme.palette.head.main,
        },
    },
    flat: {
        display: 'flex',
        padding: '2px 6px',
    },
    separator: {
        marginLeft: -8,
        marginRight: -8,
    }
}), {
    classNamePrefix: 'breadcrumb',
});

export const Breadcrumb: FunctionComponent = () => {
    const classes = useStyles();
    const pathnames = useLocation().pathname.split('/').filter(x => x);

    const homeFlat = (
        <>
            <HomeIcon fontSize='inherit' className='icon'/>
            Home
        </>
    );

    const homeLink = pathnames.length === 0 ?
        (<span className={classes.flat}>{homeFlat}</span>) : (<Link to="/" className={classes.link}>{homeFlat}</Link>);

    return (
        <Breadcrumbs 
            aria-label='Breadcrumb'
            separator={<NavigateNextIcon fontSize='small' className={classes.separator} />}
            className={classes.root}
        >
            {homeLink}

            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return last ? <span>{value}</span> : <Link className={classes.link} to={to} key={to}>{value}</Link>;
            })};
        </Breadcrumbs>
    );
};