const styles: { [key: string]: React.CSSProperties } = {
    head: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 1rem',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 1rem',
        /* needs treatment
        '@media (min-width: 768px)': {
           padding: '2rem 10%',
        },
        */
    },
    navUl: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '1.5rem',
        fontSize: '1.25rem',
    },
    navA: {
        textDecoration: 'none',
        color: '#ddd6cb',
        fontWeight: 'bold',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
    },
    navAHover: {
        background: 'linear-gradient(90deg, #ff8a05, #f9b331)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 18px rgba(248, 190, 42, 0.8)',
    },
    active: {
        background: 'linear-gradient(90deg, #ff8a05, #f9b331)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
};

export default styles;