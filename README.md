# MBA GD AI Agent

Voice-first MBA Group Discussion simulator.

## MVP
- Participant setup and topic selection
- Random/selected/custom topics
- 2-minute preparation timer
- Voice registration UI
- Live GD timer + one-minute warning
- Structured scoring and evidence model
- AI evaluation endpoint
- Detailed participant report
- Demo mode for repeatable testing

## Run
npm install
cp .env.example .env.local
npm run dev

Set OPENAI_API_KEY server-side to enable AI evaluation. Never expose it in browser code.

## Production audio note
For reliable multi-person attribution, each participant should join from an identified audio channel/device or a dedicated diarization layer. A single mixed microphone cannot reliably identify overlapping speakers.
