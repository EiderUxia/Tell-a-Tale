import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../css/tarjetasCapcomic.css'

export default function TarjetasCapcomic(props) {
    return (
        <div>
            <Card class="cardModComic" sx={{ maxWidth: 500 }}>
                <CardActionArea>
                    <CardMedia
                        class="IMGCardComic"
                        component="img"
                        image={props.imagen}
                        alt="green iguana"
                    />
                    <CardContent
                        class="ContentCardComic"
                    >
                        <Typography class="TituloCap" gutterBottom variant="h5" component="div">
                            {props.titulo}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
