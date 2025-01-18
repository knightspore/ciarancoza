import { createFileRoute } from '@tanstack/react-router'
import Section from '../components/section'
import SEO from '../components/seo'

export const Route = createFileRoute('/art')({
    component: Art,
    ssr: true,
})

function Art() {
    return <>
        <SEO
            title="Music, Art & Design"
            description="Various bits of music, 2D and 3D art, design work and some modelling I've done over the years"
            keywords={["Art", "Design", "Music", "Parabyl", "Three Witches", "Ciarán Slemon"]}
            image="https://ciaran.co.za/img/logo-square.png"
            url="https://ciaran.co.za/art"
        />
        <Section id="music" title="Music">
            <p>
                I've released a number of albums, singles and EPs as Parabyl, as well
                as in my previous band Three Witches. Here are some of my favourites:
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-4">
                <div
                    id="lizard-people"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe style="border: 0; width: 350px; height: 500px;" src="https://bandcamp.com/EmbeddedPlayer/album=1549326037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://parabyl.bandcamp.com/album/lizard-people">Lizard People by Parabyl</a></iframe>`,
                    }}
                />
                <div
                    id="dispersion"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe style="border: 0; width: 350px; height: 500px;" src="https://bandcamp.com/EmbeddedPlayer/album=1893600787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://parabyl.bandcamp.com/album/dispersion">Dispersion by Parabyl</a></iframe>`,
                    }}
                />
                <div
                    id="entanglement"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe style="border: 0; width: 350px; height: 500px;" src="https://bandcamp.com/EmbeddedPlayer/album=3021373265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://parabyl.bandcamp.com/album/entanglement-ep">Entanglement EP by Parabyl</a></iframe>`,
                    }}
                />
                <div
                    id="music-for-dogs"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe width="350px" height="500px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/361985640&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/three-witches-1" title="Three Witches" target="_blank" style="color: #cccccc; text-decoration: none;">Three Witches</a> · <a href="https://soundcloud.com/three-witches-1/sets/music-for-dogs-ep" title="Music for Dogs EP" target="_blank" style="color: #cccccc; text-decoration: none;">Music for Dogs EP</a></div>`,
                    }}
                />
                <div
                    id="miscommunication-skills"
                    dangerouslySetInnerHTML={{
                        __html: `<iframe width="350px" height="500px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/224393598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/three-witches-1" title="Three Witches" target="_blank" style="color: #cccccc; text-decoration: none;">Three Witches</a> · <a href="https://soundcloud.com/three-witches-1/sets/miscommunication-skills" title="Miscommunication Skills" target="_blank" style="color: #cccccc; text-decoration: none;">Miscommunication Skills</a></div>`,
                    }}
                />
            </div>
        </Section>
    </>
}
