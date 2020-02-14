import styledComponents from 'styled-components'

export const TrackWrapper = styledComponents.div`
.track-card{
    border-color: black;
    border-style: groove;
    border-width: 1px;
    transition: 1s linear;
}
.card-footer{
    background: white;
    border-top: black;
    transition: all 1s linear;
}
&:hover{
    .track-card{
        border: 2rem;
        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.4);
    }
    .card-footer{
        background: rgba(224,201,247,1);
    }
}
.track-container:hover .single-track-image {
    position: relative;
    transform: scale(1.1);
}
.single-track-image{
    transition: all 1s linear;
}
`