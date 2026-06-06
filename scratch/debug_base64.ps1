$lines = Get-Content 'C:\Users\satma\.gemini\antigravity-ide\brain\e1d2a468-0f01-4433-9307-fd771759ec74\.system_generated\logs\transcript.jsonl'
$last_req = $null
foreach ($line in $lines) {
    if ($line -match '"type":"USER_INPUT"') {
        if ($line -match 'data:image/jpeg;base64') {
            $last_req = $line
        }
    }
}

$obj = $last_req | ConvertFrom-Json
$content = $obj.content
$start = $content.IndexOf('data:image/jpeg;base64,') + 23
$end = $content.IndexOf(' ', $start)
if ($end -eq -1) { $end = $content.IndexOf("`n", $start) }
if ($end -eq -1) { $end = $content.Length }

$base64 = $content.Substring($start, $end - $start).Trim()
Set-Content -Path 'c:\Users\satma\Documents\Personal Website\scratch\debug_base64.txt' -Value $base64
