import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'o4vohdlc',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skr99odBxLl4VzrrjUUCOnPrCKSnz0LCJhK5nILCuGfLfYmyTEHvLAn41dkuQQs2vHHiqv230ZVDOsFizi94NcG8daOwl9eI8f8gaghIpZRev1wGyr0XcEHW745Z0visirLlOz2iYJ1BNXBrVxKxYBTQhrNJjttEXydNZWmGODnjNPbFHjgy',
  useCdn: false,
  ignoreBrowserTokenWarning: true,
})