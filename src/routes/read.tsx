import { createFileRoute } from '@tanstack/react-router'
import Section from '../components/section';
import Title from '../components/page-title';

export const Route = createFileRoute('/read')({
    component: Read,
    ssr: true,
});

function Read() {

    const posts = [];

    return <>
        <Title>Read</Title>
        <Section id="feed" title="Latest">
            {posts.length === 0 && <p className="text-coral-400">Under construction...</p>}
        </Section>
    </>
}
