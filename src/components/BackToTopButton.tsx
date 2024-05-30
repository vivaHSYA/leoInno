const BackToTopButton = ({
    onScroll,
}: {
    onScroll: boolean,
}) => {
    
    return (
        <>
            {onScroll && (
                <a
                    className='gototop active'
                    href="#"
                ><i className="fa fa-angle-up"></i></a>
            )}
        </>
    )
}
export default BackToTopButton