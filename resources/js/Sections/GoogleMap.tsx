function GoogleMap({ height }: { height: string }) {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3901.7827368073317!2d-77.0707662493877!3d-12.058464388179209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDAzJzMwLjUiUyA3N8KwMDQnMDMuNyJX!5e0!3m2!1ses!2spe!4v1727130588163!5m2!1ses!2spe"
            style={{ border: 0, width: "100%", height: height }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
}

export default GoogleMap;
