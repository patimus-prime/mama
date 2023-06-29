import { Container, Text, Space } from "@mantine/core"
{/* <iframe width="100%" */ }
// height="300" scrolling="no" frameborder="no" allow="autoplay"
//  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1643798881&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/patrick-finnerty-422479857" title="Patrick Finnerty" target="_blank" style="color: #cccccc; text-decoration: none;">Patrick Finnerty</a> · <a href="https://soundcloud.com/patrick-finnerty-422479857/sets/patplaylist" title="PatPlaylist" target="_blank" style="color: #cccccc; text-decoration: none;">PatPlaylist</a></div>


// https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1643798881&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true
export function SoundCloudIFrame() {
    return (
        <>
            {/* Using text to align because I'm lazy */}
            <Space h="xl" />
            <Text align="center">
                <iframe
                    width={166 * 2}
                    height={166 * 1.5}
                    // scrolling="no" 
                    frameBorder={0}
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1643798881&color=%23ff5500
                    &auto_play=true
                    &hide_related=false
                    &show_comments=false
                    &show_user=true
                    &show_reposts=false
                    &show_teaser=true
                    &visual=true
                    &buying=false"
                >
                </iframe>
            </Text > <Space h="xl" />
        </>
    )
};