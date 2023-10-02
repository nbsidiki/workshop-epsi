const layoutPdf ={
    page: {
        flexDirection: 'column',
        fontSize: 10,
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        width: '20%',
        marginBottom: 20
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 600,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    subTitle: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6'
    },
    cell: {
        width: '8%',
        textAlign: 'center',
        padding: '1px',
        fontSize: 10,
        flexWrap: 'wrap'
    },
    headerText: {
        color: '#787878',
        fontWeight: 600,
        fontSize: 12
    },
    textCell: {
        fontSize: 8,
    },
    pagination: {
        position: 'absolute',
        bottom: 15,
        right: 15
    }
};

export default layoutPdf;
